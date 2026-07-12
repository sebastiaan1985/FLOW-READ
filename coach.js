/**
 * coach.js — Slimme Leescoach (offline, geen API-key nodig)
 *
 * Vier onderdelen:
 *  - Coach.adaptief : per-oefening doel-WPM in de "flow-zone" (~80% succes)
 *  - Coach.feedback : persoonlijke coach-berichten (kids- en volwassen-toon)
 *  - Coach.vragen   : begripsvragen uit de bibliotheek, zonder AI-key
 *  - Coach.planner  : "volgende beste oefening"-aanbeveling
 *
 * Werkt volledig offline en gebruikt geen betaalde API of gedeelde sleutel.
 *
 * State: localStorage 'coach_state' (gesynct via supabase-sync.js → extra).
 */

const Coach = {

  // ── STATE ──────────────────────────────────────────────────
  _state: null,

  laad() {
    if (this._state) return this._state;
    try {
      this._state = JSON.parse(localStorage.getItem('coach_state') || 'null') || {};
    } catch (e) { this._state = {}; }
    this._state.perOefening = this._state.perOefening || {};
    this._state.laatsteTemplates = this._state.laatsteTemplates || [];
    return this._state;
  },

  sla() {
    if (this._state) localStorage.setItem('coach_state', JSON.stringify(this._state));
  },

  // ── PROFIEL ────────────────────────────────────────────────
  gebruiker() {
    try { return JSON.parse(localStorage.getItem('snellees_gebruiker') || '{}'); }
    catch (e) { return {}; }
  },

  doelgroep() {
    const g = this.gebruiker();
    if (g.doelgroep) return g.doelgroep;
    if (localStorage.getItem('kids_modus') === '1') return 'kids9-12';
    if (g.leeftijd) {
      if (g.leeftijd <= 9) return 'kids6-9';
      if (g.leeftijd <= 12) return 'kids9-12';
      if (g.leeftijd <= 17) return 'teens';
    }
    return 'volwassen';
  },

  isKids() { return this.doelgroep().startsWith('kids'); },

  naam() { return this.gebruiker().naam || ''; },

  baseline() {
    try { return JSON.parse(localStorage.getItem('begintest_baseline') || 'null'); }
    catch (e) { return null; }
  },

  stats() {
    try { return JSON.parse(localStorage.getItem('snellees_stats') || '{}'); }
    catch (e) { return {}; }
  },

  begripScores() {
    try { return JSON.parse(localStorage.getItem('snellees_begrip_scores') || '[]'); }
    catch (e) { return []; }
  },

  /** Begrip vastleggen (0-100) en aan de laatste sessie van de oefening koppelen. */
  registreerBegrip(pct, type) {
    const scores = this.begripScores();
    scores.push(Math.round(pct));
    if (scores.length > 50) scores.splice(0, scores.length - 50);
    localStorage.setItem('snellees_begrip_scores', JSON.stringify(scores));
    const st = this.laad();
    const oef = st.perOefening[type];
    const laatste = oef && oef.sessies[oef.sessies.length - 1];
    if (laatste && laatste.begrip == null) {
      laatste.begrip = Math.round(pct);
      this.adaptief.herbereken(type);
    }
  },

  // ── ADAPTIEVE MOEILIJKHEID ─────────────────────────────────
  adaptief: {
    MAX_WPM: { 'kids6-9': 250, 'kids9-12': 350, 'teens': 450, 'volwassen': 700 },
    START_WPM: { 'kids6-9': 90, 'kids9-12': 130, 'teens': 180, 'volwassen': 220 },

    _grens() {
      const groep = Coach.doelgroep();
      const basis = Coach.baseline();
      const min = Math.max(60, basis ? Math.round(basis.wpm * 0.8) : 80);
      return { min, max: this.MAX_WPM[groep] || 700 };
    },

    /** Actueel doel-WPM voor een oefening (rsvp, chunk, langetekst, ...). */
    doelWpm(type) {
      const st = Coach.laad();
      const oef = st.perOefening[type];
      if (oef && oef.doelWpm) return oef.doelWpm;
      const basis = Coach.baseline();
      const start = basis ? Math.round(basis.wpm * 1.05)
                          : this.START_WPM[Coach.doelgroep()] || 220;
      const { min, max } = this._grens();
      return Math.min(max, Math.max(min, start));
    },

    /** Sessie verwerken. Tempo stijgt alleen na drie beoordeelde rondes. */
    naSessie(type, wpm, begripPct) {
      const st = Coach.laad();
      const oef = st.perOefening[type] = st.perOefening[type] ||
        { doelWpm: this.doelWpm(type), sessies: [] };

      oef.sessies.push({ wpm, begrip: begripPct ?? null, ts: Date.now() });
      if (oef.sessies.length > 30) oef.sessies.splice(0, oef.sessies.length - 30);

      Coach.sla();
      return this.herbereken(type);
    },

    herbereken(type) {
      const st = Coach.laad();
      const oef = st.perOefening[type];
      if (!oef) return this.doelWpm(type);
      const laatste3 = oef.sessies.slice(-3);
      const beoordeeld = laatste3.filter(s => s.begrip != null);
      if (beoordeeld.length === 3) {
        const succes = beoordeeld.filter(s => s.begrip >= 67).length / beoordeeld.length;

        const { min, max } = this._grens();
        if (succes >= 0.8) {
          oef.doelWpm = Math.min(max, Math.round(oef.doelWpm * 1.08));
        } else if (succes <= 0.5) {
          oef.doelWpm = Math.max(min, Math.round(oef.doelWpm * 0.9));
        }
      }
      Coach.sla();
      return oef.doelWpm;
    },

    /** Plateau: gemiddelde van laatste 5 sessies wijkt <2% af van de 5 ervoor. */
    isPlateau() {
      const sessies = (Coach.stats().sessies || []).filter(s =>
        Number.isFinite(s.wpm) && s.wpm > 0 && s.wpm <= 900 && s.begrip != null
      );
      if (sessies.length < 10) return false;
      const wpms = sessies.slice(-10).map(s => s.wpm);
      const recent = wpms.slice(5).reduce((a, v) => a + v, 0) / 5;
      const eerder = wpms.slice(0, 5).reduce((a, v) => a + v, 0) / 5;
      return Math.abs(recent - eerder) < Math.max(5, eerder * 0.02);
    },
  },

  // ── FEEDBACK-ENGINE ────────────────────────────────────────
  feedback: {
    /**
     * Templates: {id, cat, kids, volw} — slots: {naam} {wpm} {delta}
     * {streak} {oefening} {doel} {dagdeel}
     */
    TEMPLATES: [
      // eerste keer / weinig data
      { id: 'e1', cat: 'eerste', kids: 'Welkom {naam}! 🚀 Elke keer dat je oefent, worden je lees-spieren sterker!', volw: 'Welkom {naam}. Doe eerst de begintest — dan weet je precies waar je start en zie je je vooruitgang.' },
      { id: 'e2', cat: 'eerste', kids: 'Goed bezig! Nog een paar oefeningen en ik kan zien waar jij super goed in bent! ⭐', volw: 'Na een paar sessies herken ik je patronen en krijg je persoonlijk advies.' },
      { id: 'e3', cat: 'eerste', kids: 'Oefen rustig en kijk hoeveel je van het verhaal onthoudt. Dát is jouw echte score! ⭐', volw: 'Leestempo verschilt per tekst en leesdoel. We bouwen alleen op wanneer je begrip stabiel blijft.' },
      // vooruitgang
      { id: 'v1', cat: 'vooruitgang', kids: 'WAUW {naam}! Je las {wpm} woorden per minuut — {delta}% sneller dan eerst! 🎉', volw: 'Sterke sessie: {wpm} WPM, {delta}% boven je gemiddelde van de afgelopen week.' },
      { id: 'v2', cat: 'vooruitgang', kids: 'Je tempo groeit en je antwoorden blijven goed. Dat is echte vooruitgang! 🚀', volw: 'Je tempo stijgt met behoud van begrip. Bevestig dit nog op een paar vergelijkbare teksten.' },
      { id: 'v3', cat: 'vooruitgang', kids: 'Sneller én alles begrepen — jij bent een leeskampioen! 🏆', volw: 'Sneller lezen mét behoud van begrip — precies de juiste balans. Uitstekend.' },
      { id: 'v4', cat: 'vooruitgang', kids: 'Je las {wpm} woorden per minuut en hield het verhaal vast. Knap! 💪', volw: '{wpm} WPM in deze sessie, {delta}% boven je recente gemiddelde. Controleer of dit over meerdere teksten standhoudt.' },
      // begrip-waarschuwing (snelheid-begrip trade-off)
      { id: 'b1', cat: 'begrip', kids: 'Hé snelheidsduivel! 😄 Je leest supersnel, maar de vragen waren lastig, hè? Ga een tikkeltje langzamer.', volw: 'Je snelheid stijgt, maar je begrip zakte onder de 70%. Ga 10% langzamer — snelheid zonder begrip telt niet.' },
      { id: 'b2', cat: 'begrip', kids: 'Snelheid is leuk, maar het verhaal snappen is het echte goud! 🏅 Vertel na elke alinea kort wat er gebeurde.', volw: 'Vat na iedere alinea de hoofdgedachte in één zin samen. Lukt dat niet, verlaag dan het tempo.' },
      { id: 'b3', cat: 'begrip', kids: 'Even op de rem! 🚦 Lees het volgende verhaal iets rustiger, dan snap je alles weer.', volw: 'Twee sessies op rij begrip onder de 60%. Ik heb je doeltempo iets verlaagd — kwaliteit eerst.' },
      // streak
      { id: 's1', cat: 'streak', kids: '{streak} dagen op rij geoefend! 🔥 Jouw vuur brandt steeds feller!', volw: '{streak} dagen op rij getraind. Regelmaat maakt je metingen beter vergelijkbaar.' },
      { id: 's2', cat: 'streak', kids: 'Weer terug! Dag {streak} van jouw super-streak! ⚡', volw: 'Dag {streak} van je streak. Een korte, aandachtige sessie is vandaag genoeg.' },
      { id: 's3', cat: 'streak', kids: 'Jij bent een echte volhouder, {naam}! {streak} dagen! 🌟', volw: 'Sterke discipline, {naam} — {streak} dagen op rij. Dit is hoe gewoontes ontstaan.' },
      // plateau
      { id: 'p1', cat: 'plateau', kids: 'Je snelheid staat even stil — tijd voor iets anders! Probeer {oefening} eens! 🎯', volw: 'Je WPM is al even stabiel. Doorbreek het plateau met {oefening} — dat traint een andere vaardigheid.' },
      { id: 'p2', cat: 'plateau', kids: 'Nieuwe uitdaging = sneller leren! Zullen we {oefening} proberen? 🧩', volw: 'Plateau gedetecteerd. Wissel je routine af: {oefening} pakt vaak de ontbrekende schakel.' },
      { id: 'p3', cat: 'plateau', kids: 'Tijd voor een andere uitdaging! Probeer {oefening}! 👀', volw: 'Je resultaten zijn stabiel. Wissel tekstsoort of strategie en probeer {oefening} voor een nieuwe prikkel.' },
      // comeback (paar dagen weggeweest)
      { id: 'c1', cat: 'comeback', kids: 'Daar ben je weer, {naam}! Ik heb je gemist! 🤗 Zullen we er een topdag van maken?', volw: 'Welkom terug, {naam}. Een korte sessie vandaag en je zit weer in het ritme.' },
      { id: 'c2', cat: 'comeback', kids: 'Yes, je bent er weer! Je lees-spieren zijn uitgerust en klaar voor actie! 💪', volw: 'Even weggeweest — geen probleem. Begin rustig op je vertrouwde tempo; het niveau komt snel terug.' },
      // terugval
      { id: 't1', cat: 'terugval', kids: 'Vandaag ging het ietsje langzamer — dat is oké! Zelfs kampioenen hebben rustdagen. 😊', volw: 'Iets onder je gemiddelde vandaag. Normaal: vermoeidheid en tijdstip spelen mee. Morgen weer een kans.' },
      { id: 't2', cat: 'terugval', kids: 'Niet elke dag is een recorddag. Morgen vlieg je er weer overheen! 🛫', volw: 'Een dip na een groeispurt is normaal — je brein verwerkt de nieuwe vaardigheid. Blijf oefenen.' },
      // dagdeel
      { id: 'd1', cat: 'algemeen', kids: 'Een verhaal goed begrijpen is een superkracht die je vaak kunt gebruiken! ✨', volw: 'Plan moeilijke teksten op een moment waarop jij alert bent en weinig wordt onderbroken.' },
      { id: 'd2', cat: 'algemeen', kids: 'Na elke alinea één zin navertellen helpt je het verhaal vasthouden. 🧠', volw: 'Korte, gerichte sessies maken het makkelijker om tempo en begrip eerlijk te vergelijken.' },
      { id: 'd3', cat: 'algemeen', kids: 'Jij oefent tempo én onthouden. Die twee horen bij elkaar! 📚', volw: 'Je laatste geldige sessie was {wpm} WPM. Gebruik dat als richtpunt, niet als vaste grens voor iedere tekst.' },
      // doel
      { id: 'g1', cat: 'doel', kids: 'Nog even en je haalt de {doel} met goed begrip. Zet hem op! 🎯', volw: 'Je volgende richtpunt is {doel} WPM met stabiel begrip. Verhoog pas na meerdere geldige rondes.' },
      { id: 'g2', cat: 'doel', kids: 'Jouw missie: {doel} woorden per minuut én de vragen goed! 🚀', volw: 'Richtpunt: {doel} WPM met minimaal 80% begrip. Kwaliteit bepaalt of het tempo omhooggaat.' },
    ],

    /** Analyseer de situatie → kies categorie + template + vul slots. */
    genereer() {
      const st = Coach.laad();
      const stats = Coach.stats();
      const sessies = (stats.sessies || []).filter(s =>
        Number.isFinite(s.wpm) && s.wpm > 0 && s.wpm <= 900 && s.begrip != null
      );
      const begrip = Coach.begripScores();
      const streak = parseInt(localStorage.getItem('snellees_streak') || '0', 10);

      // Context berekenen
      const laatste = sessies[sessies.length - 1];
      const week = sessies.slice(-15, -1);
      const gemWeek = week.length ? week.reduce((a, s) => a + s.wpm, 0) / week.length : 0;
      const delta = laatste && gemWeek ? Math.round(((laatste.wpm - gemWeek) / gemWeek) * 100) : 0;
      const begripRecent = begrip.slice(-2);
      const begripLaag = begripRecent.length >= 2 && begripRecent.every(b => b < 60);
      const laatsteTs = laatste && laatste.ts;
      const dagenWeg = laatsteTs ? (Date.now() - laatsteTs) / 86400000 : 0;

      // Categorie kiezen (belangrijkste eerst)
      let cat;
      if (sessies.length < 3) cat = 'eerste';
      else if (begripLaag) cat = 'begrip';
      else if (dagenWeg > 3) cat = 'comeback';
      else if (Coach.adaptief.isPlateau()) cat = 'plateau';
      else if (delta >= 5) cat = 'vooruitgang';
      else if (delta <= -10) cat = 'terugval';
      else if (streak >= 3 && Math.random() < 0.5) cat = 'streak';
      else cat = Math.random() < 0.3 ? 'doel' : 'algemeen';

      // Template kiezen met anti-herhaling
      const recent = st.laatsteTemplates || [];
      const baselineKlaar = !!localStorage.getItem('begintest_baseline');
      const passend = t => t.cat === cat && !(baselineKlaar && t.id === 'e1');
      let pool = this.TEMPLATES.filter(t => passend(t) && !recent.includes(t.id));
      if (!pool.length) pool = this.TEMPLATES.filter(passend);
      const tpl = pool[Math.floor(Math.random() * pool.length)];

      st.laatsteTemplates = [...recent, tpl.id].slice(-5);
      Coach.sla();

      // Slots vullen
      const aanb = Coach.planner.aanbeveling();
      const doelgroepMax = Coach.adaptief.MAX_WPM[Coach.doelgroep()] || 700;
      const doelWpm = laatste ? Math.min(doelgroepMax, Math.round((laatste.wpm * 1.08) / 10) * 10) : 250;
      const tekst = (Coach.isKids() ? tpl.kids : tpl.volw)
        .replace(/\{naam\}/g, Coach.naam() || (Coach.isKids() ? 'kanjer' : ''))
        .replace(/\{wpm\}/g, laatste ? laatste.wpm : '—')
        .replace(/\{delta\}/g, Math.abs(delta))
        .replace(/\{streak\}/g, streak)
        .replace(/\{oefening\}/g, aanb ? aanb.naam : 'oogtraining')
        .replace(/\{doel\}/g, doelWpm)
        .replace(/\s{2,}/g, ' ').trim();

      return { tekst, cat, id: tpl.id };
    },

    /** Render coach-bericht in het home-panel (altijd, geen key nodig). */
    toonHome() {
      const body = document.getElementById('ai-coach-body');
      const panel = document.getElementById('ai-coach-panel');
      if (!body || !panel) return;
      const f = this.genereer();
      body.textContent = f.tekst;
      panel.classList.add('active');
    },
  },

  // ── BEGRIPSVRAGEN (offline router) ─────────────────────────
  vragen: {
    /**
     * Vragen voor de huidige tekst, zonder AI-key als het een
     * bibliotheektekst is. Retourneert het formaat van de globale
     * `vragen`-array: [{vraag, correct, w1, w2}] — of null.
     */
    voorHuidigeTekst() {
      if (typeof huidigeBibTekst !== 'function') return null;
      const t = huidigeBibTekst();
      if (!t || !t.vragen || !t.vragen.length) return null;
      return t.vragen.map(v => {
        const fout = v.opties.filter((_, i) => i !== v.correct);
        return { vraag: v.v, correct: v.opties[v.correct], w1: fout[0], w2: fout[1] };
      });
    },
  },

  // ── PLANNER: volgende beste oefening ───────────────────────
  planner: {
    OEFENINGEN: {
      rsvp:     { naam: 'RSVP-lezen',       icon: '⚡' },
      chunk:    { naam: 'Chunk-lezen',      icon: '📖' },
      oog:      { naam: 'Oogtraining',      icon: '👁' },
      perifeer: { naam: 'Perifeer zien',    icon: '🔭' },
      fixatie:  { naam: 'Fixatie-training', icon: '🔲' },
      leestest: { naam: 'Leestest',         icon: '📏' },
      langetekst: { naam: 'Lange teksten',  icon: '📚' },
      subvocal: { naam: 'Leesritme',           icon: '🔕' },
      regressie:{ naam: 'Vooruit lezen',       icon: '⏩' },
      skim:     { naam: 'Skim & Scan',      icon: '🔍' },
    },

    /** {type, naam, icon, reden} — of null zolang er geen begintest is. */
    aanbeveling() {
      // Leerweg-dag van vandaag heeft altijd topprioriteit
      if (typeof leerWegVolgendeDag === 'function') {
        const lw = leerWegVolgendeDag();
        if (lw && lw.dag.screen && this.OEFENINGEN[lw.dag.screen] && (typeof lwGedaan === 'function' && lwGedaan().length > 0)) {
          return {
            type: lw.dag.screen,
            ...this.OEFENINGEN[lw.dag.screen],
            reden: Coach.isKids()
              ? `Jouw leerweg-missie van vandaag: ${lw.dag.naam}!`
              : `Leerweg week ${lw.w + 1}, dag ${lw.d + 1}: ${lw.dag.naam}`,
          };
        }
      }
      const st = Coach.laad();
      const begrip = Coach.begripScores();
      const gemBegrip = begrip.length >= 3
        ? begrip.slice(-5).reduce((a, b) => a + b, 0) / Math.min(5, begrip.length) : null;

      const scores = {};
      const redenen = {};
      const nu = Date.now();

      for (const type of Object.keys(this.OEFENINGEN)) {
        scores[type] = 1;
        const oef = st.perOefening[type];
        const laatste = oef && oef.sessies[oef.sessies.length - 1];
        // Recency: nooit gedaan of lang geleden → bonus
        if (!laatste) { scores[type] += 2; redenen[type] = 'nogNooit'; }
        else if (nu - laatste.ts > 5 * 86400000) { scores[type] += 1.5; redenen[type] = 'langGeleden'; }
      }

      // Zwaktes sturen de keuze
      if (gemBegrip != null && gemBegrip < 65) {
        scores.leestest += 3; scores.langetekst += 2.5;
        redenen.leestest = 'begrip'; redenen.langetekst = 'begrip';
      }
      if (Coach.adaptief.isPlateau()) {
        scores.oog += 2.5; scores.perifeer += 2.5; scores.fixatie += 2;
        redenen.oog = 'plateau'; redenen.perifeer = 'plateau'; redenen.fixatie = 'plateau';
      }

      // Beste kiezen (bij gelijke stand: willekeurig uit de top)
      const max = Math.max(...Object.values(scores));
      const top = Object.keys(scores).filter(t => scores[t] >= max - 0.01);
      const type = top[Math.floor(Math.random() * top.length)];

      const REDEN_TEKST = {
        nogNooit: Coach.isKids() ? 'Deze heb je nog nooit gedaan — nieuw avontuur!' : 'Nog niet geprobeerd — elke oefening traint iets anders.',
        langGeleden: Coach.isKids() ? 'Lang niet gedaan — tijd voor een opfrisser!' : 'Al even geleden — houd alle vaardigheden scherp.',
        begrip: Coach.isKids() ? 'Even oefenen met goed onthouden wat je leest!' : 'Je begrip kan een boost gebruiken — train met vragen.',
        plateau: Coach.isKids() ? 'Iets nieuws maakt je nóg sneller!' : 'Doorbreek je plateau door je blikveld te trainen.',
      };

      return {
        type,
        ...this.OEFENINGEN[type],
        reden: REDEN_TEKST[redenen[type]] || (Coach.isKids() ? 'Goede training voor vandaag!' : 'Aanbevolen voor een gebalanceerde training.'),
      };
    },

    /** Render de aanbevelingskaart op het home-scherm. */
    toonHome() {
      const el = document.getElementById('coach-aanbeveling');
      if (!el) return;
      const a = this.aanbeveling();
      if (!a) { el.innerHTML = ''; return; }
      el.innerHTML = `
        <button class="aanbevolen-kaart" onclick="sidebarNav('${a.type}')">
          <div style="flex:1;min-width:0">
            <div class="sectie-label">Aanbevolen voor jou</div>
            <div class="ab-titel">${a.naam}</div>
            <div class="ab-sub">${a.reden}</div>
          </div>
          <div class="ab-play">
            <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          </div>
        </button>`;
    },
  },

  // ── SESSIE-HOOK (aangeroepen vanuit index.html) ────────────
  naSessie(type, wpm, n) {
    this.adaptief.naSessie(type, wpm, null);
    // Home-panelen verversen zodra de gebruiker terugkomt
    if (document.getElementById('screen-home')?.classList.contains('active')) {
      this.feedback.toonHome();
      this.planner.toonHome();
    }
  },
};
