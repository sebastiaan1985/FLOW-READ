/**
 * ronde.js — De Leesronde-motor
 *
 * Maakt van elke leesoefening een speelbare ronde:
 *  - CHECKPOINTS: elke ±60 woorden pauzeert de tekst en kiest de speler
 *    in één tik welk woord net voorbijkwam (aandacht + begrip in de loop)
 *  - COMBO: opeenvolgende goede antwoorden stapelen (×2, ×3, …)
 *  - STERREN: ⭐ uitgelezen · ⭐⭐ begrip ≥70% · ⭐⭐⭐ begrip ≥70% op doeltempo
 *  - XP: elke ronde betaalt uit in het avontuurprofiel (één economie)
 *  - PACING-RAMP: "Nog een keer, +10%?" — sluipend sneller trainen
 *
 * Gebruik vanuit een oefening (zie RSVP-hooks in index.html):
 *   Ronde.start(type, woordenArray)            — bij start van een verse ronde
 *   if (Ronde.bijIndex(idx, hervat)) return;    — in de tick-loop; pauzeert bij checkpoint
 *   Ronde.einde(wpm, aantalWoorden)             — bij het einde; toont resultaat-overlay
 *
 * Kids-modus krijgt automatisch de vos-toon via Coach.isKids().
 */

const Ronde = {
  actief: false,
  wachtOpAntwoord: false,
  type: null,

  _woorden: [],
  _checkpoints: [],
  _volgendeCp: 0,
  _goed: 0,
  _fout: 0,
  _combo: 0,
  _maxCombo: 0,
  _cpTimeout: null,
  _pauzeStart: 0,

  // Veelvoorkomende NL woorden als afleiders (per lengteklasse)
  _AFLEIDERS: [
    'water', 'huis', 'straat', 'stoel', 'appel', 'vogel', 'wolk', 'brood',
    'fiets', 'school', 'winter', 'zomer', 'avond', 'ochtend', 'venster',
    'bloem', 'paard', 'wagen', 'toren', 'rivier', 'eiland', 'wortel',
    'spiegel', 'sleutel', 'deken', 'ladder', 'muziek', 'verhaal', 'planeet',
    'machine', 'seconde', 'minuut', 'gebouw', 'keuken', 'tuinman', 'bakker',
    'schilder', 'koffer', 'trein', 'vliegtuig', 'schaduw', 'zolder', 'kelder',
  ],

  /** Start een verse ronde. Bij te korte teksten blijft de motor uit. */
  start(type, woorden) {
    this.type = type;
    this._woorden = woorden || [];
    this._goed = 0; this._fout = 0; this._combo = 0; this._maxCombo = 0;
    this._volgendeCp = 0;
    this.wachtOpAntwoord = false;

    if (this._woorden.length < 40) { this.actief = false; return; }
    this.actief = true;

    // Checkpoints elke ~55-70 woorden, niet vlak voor het einde
    this._checkpoints = [];
    let pos = 55 + Math.floor(Math.random() * 10);
    while (pos < this._woorden.length - 15) {
      this._checkpoints.push(pos);
      pos += 55 + Math.floor(Math.random() * 15);
    }
    // Korte tekst (40-70 woorden): één checkpoint halverwege
    if (!this._checkpoints.length) this._checkpoints.push(Math.floor(this._woorden.length / 2));
  },

  /**
   * Aanroepen in de tick-loop vóór het tonen van het volgende woord.
   * Retourneert true als er gepauzeerd wordt voor een checkpoint;
   * `hervat(pauzeMs)` wordt aangeroepen zodra de speler geantwoord heeft.
   */
  bijIndex(idx, hervat) {
    if (!this.actief || this.wachtOpAntwoord) return false;
    const cp = this._checkpoints[this._volgendeCp];
    if (cp === undefined || idx < cp) return false;
    this._volgendeCp++;
    this._toonCheckpoint(idx, hervat);
    return true;
  },

  // ── CHECKPOINT-VRAAG ───────────────────────────────────────
  _kiesDoelwoord(idx) {
    // Inhoudswoord uit het net gelezen stuk (5+ letters, alfabetisch)
    const van = Math.max(0, idx - 45);
    const kandidaten = [];
    for (let i = van; i < idx; i++) {
      const w = (this._woorden[i] || '').replace(/[^a-zA-Zà-üÀ-Ü]/g, '');
      if (w.length >= 5 && w.length <= 13) kandidaten.push(w.toLowerCase());
    }
    if (!kandidaten.length) return null;
    return kandidaten[Math.floor(Math.random() * kandidaten.length)];
  },

  _kiesAfleider(doel, idx) {
    // Afleider van vergelijkbare lengte die NIET in het gelezen stuk zat
    const van = Math.max(0, idx - 60);
    const gelezen = new Set(this._woorden.slice(van, idx).map(w => w.toLowerCase().replace(/[^a-zà-ü]/g, '')));
    const pool = this._AFLEIDERS.filter(a => Math.abs(a.length - doel.length) <= 3 && !gelezen.has(a) && a !== doel);
    return (pool.length ? pool : this._AFLEIDERS)[Math.floor(Math.random() * (pool.length || this._AFLEIDERS.length))];
  },

  _toonCheckpoint(idx, hervat) {
    const doel = this._kiesDoelwoord(idx);
    if (!doel) { hervat(0); return; }
    const afleider = this._kiesAfleider(doel, idx);

    this.wachtOpAntwoord = true;
    this._pauzeStart = Date.now();

    const kids = (typeof Coach !== 'undefined') && Coach.isKids();
    const vraag = kids ? '🦊 Welk woord vloog net voorbij?' : 'Welk woord las je net?';
    const opties = Math.random() < 0.5 ? [doel, afleider] : [afleider, doel];

    const overlay = document.createElement('div');
    overlay.className = 'ronde-cp';
    overlay.id = 'ronde-cp';
    overlay.innerHTML = `
      <div class="ronde-cp-kaart">
        <div class="ronde-cp-vraag">${vraag}</div>
        <div class="ronde-cp-opties">
          ${opties.map(o => `<button class="ronde-cp-optie" data-woord="${o}">${o}</button>`).join('')}
        </div>
        <div class="ronde-cp-timer"><div class="ronde-cp-timer-fill"></div></div>
      </div>`;
    document.body.appendChild(overlay);

    const klaar = (goed, gekozenEl) => {
      clearTimeout(this._cpTimeout);
      if (this.wachtOpAntwoord === false) return; // dubbel antwoord voorkomen
      this.wachtOpAntwoord = false;

      if (goed) {
        this._goed++; this._combo++;
        this._maxCombo = Math.max(this._maxCombo, this._combo);
        if (typeof _geluid !== 'undefined') _geluid.goed();
        if (typeof tril === 'function') tril(25);
      } else {
        this._fout++; this._combo = 0;
        if (typeof _geluid !== 'undefined') _geluid.fout();
      }

      // Feedback-flits: kleur + combo, dan door
      overlay.querySelectorAll('.ronde-cp-optie').forEach(b => {
        b.disabled = true;
        if (b.dataset.woord === doel) b.classList.add('goed');
        else if (b === gekozenEl) b.classList.add('fout');
      });
      const kaart = overlay.querySelector('.ronde-cp-kaart');
      if (goed && this._combo >= 2) {
        const c = document.createElement('div');
        c.className = 'ronde-cp-combo';
        c.textContent = `🔥 Combo ×${this._combo}`;
        kaart.appendChild(c);
      }

      setTimeout(() => {
        overlay.remove();
        hervat(Date.now() - this._pauzeStart);
      }, goed ? 550 : 900);
    };

    overlay.querySelectorAll('.ronde-cp-optie').forEach(b => {
      b.addEventListener('click', () => klaar(b.dataset.woord === doel, b));
    });

    // 6 seconden bedenktijd (balkje loopt af); te laat = fout
    const fill = overlay.querySelector('.ronde-cp-timer-fill');
    requestAnimationFrame(() => { fill.style.transition = 'width 6s linear'; fill.style.width = '0%'; });
    this._cpTimeout = setTimeout(() => klaar(false, null), 6000);
  },

  // ── RONDE-EINDE: sterren, XP, overlay ──────────────────────
  begripPct() {
    const n = this._goed + this._fout;
    return n ? Math.round((this._goed / n) * 100) : null;
  },

  /**
   * Directe ronde zonder checkpoints — voor oefeningen die hun eigen
   * begripsmeting hebben (leestest, langetekst): zelfde sterren, XP en
   * resultaat-overlay, begrip komt van buiten.
   */
  direct(type, wpm, aantalWoorden, begripPct) {
    this.type = type;
    this.actief = true;
    this._goed = 0; this._fout = 0; this._combo = 0; this._maxCombo = 0;
    return this.einde(wpm, aantalWoorden, begripPct);
  },

  einde(wpm, aantalWoorden, begripOverride) {
    if (!this.actief) return null;
    this.actief = false;

    const begrip = (begripOverride !== undefined) ? begripOverride : this.begripPct();
    const doelWpm = (typeof Coach !== 'undefined') ? Coach.adaptief.doelWpm(this.type) : 250;

    let sterren = 1;
    if (begrip !== null && begrip >= 70) sterren = 2;
    if (begrip !== null && begrip >= 70 && wpm >= doelWpm) sterren = 3;

    // XP: woorden × begrip-multiplier + combo-bonus (5..80)
    const basis = Math.round(aantalWoorden / 12);
    const mult = 0.4 + 0.6 * ((begrip ?? 50) / 100);
    const xp = Math.max(5, Math.min(80, Math.round(basis * mult) + this._maxCombo * 2));

    // Eén economie: XP naar het avontuurprofiel (level-balk in de header)
    try {
      if (typeof avProfiel !== 'undefined' && avProfiel) {
        avProfiel.xp = (avProfiel.xp || 0) + xp;
        avSla();
        updateSpelerIndicator();
      }
    } catch (e) { /* geen profiel: XP telt stil niet mee */ }

    // Begrip voedt de adaptieve coach (bij direct-modus registreert de
    // oefening het zelf al — niet dubbel tellen)
    try { if (begrip !== null && begripOverride === undefined) Coach.registreerBegrip(begrip, this.type); } catch (e) {}

    // Beste sterren per oefening bewaren
    try {
      const g = _gamLaad();
      g.rondes = g.rondes || {};
      const vorige = (g.rondes[this.type] || {}).beste || 0;
      g.rondes[this.type] = { beste: Math.max(vorige, sterren), laatste: sterren };
      _gamSla(g);
    } catch (e) {}

    const res = { sterren, wpm, begrip, xp, maxCombo: this._maxCombo, doelWpm, type: this.type };
    this._toonResultaat(res);
    return res;
  },

  _toonResultaat(r) {
    const kids = (typeof Coach !== 'undefined') && Coach.isKids();
    const sterHtml = [1, 2, 3].map(i =>
      `<span class="ronde-ster ${i <= r.sterren ? 'aan' : ''}" style="animation-delay:${i * .18}s">★</span>`).join('');

    const uitleg = r.sterren === 3
      ? (kids ? 'WAUW! Alle sterren — jij bent een supervos! 🦊' : 'Perfect: snel én alles begrepen.')
      : r.sterren === 2
        ? (kids ? 'Goed gelezen! Haal je ook het doeltempo? 🚀' : `Sterk begrip. Derde ster bij ${r.doelWpm} WPM.`)
        : (r.begrip !== null && r.begrip < 70
            ? (kids ? 'Net gemist! Lees iets rustiger, dan vang je alle woorden. 🎯' : 'Tempo iets terug — begrip ≥70% geeft de tweede ster.')
            : (kids ? 'Goed gedaan! Nog een keertje?' : 'Uitgelezen! Checkpoints goed beantwoorden geeft meer sterren.'));

    const overlay = document.createElement('div');
    overlay.className = 'ronde-res';
    overlay.id = 'ronde-res';
    overlay.innerHTML = `
      <div class="ronde-res-kaart" role="dialog" aria-modal="true" aria-label="Ronde-resultaat">
        <div class="ronde-sterren">${sterHtml}</div>
        <div class="ronde-res-uitleg">${uitleg}</div>
        <div class="ronde-res-grid">
          <div><div class="ronde-res-num">${r.wpm}</div><div class="ronde-res-lbl">WPM</div></div>
          <div><div class="ronde-res-num" style="color:${r.begrip === null ? 'var(--muted)' : r.begrip >= 70 ? 'var(--green)' : '#f59e0b'}">${r.begrip === null ? '—' : r.begrip + '%'}</div><div class="ronde-res-lbl">begrip</div></div>
          <div><div class="ronde-res-num" style="color:#f0b000">${r.maxCombo > 1 ? '×' + r.maxCombo : '—'}</div><div class="ronde-res-lbl">combo</div></div>
        </div>
        <div class="ronde-res-xp">+${r.xp} XP</div>
        <div class="ronde-res-knoppen">
          ${(r.type === 'rsvp' || r.type === 'chunk')
            ? `<button class="ronde-res-opnieuw" onclick="Ronde.opnieuw()">🚀 Nog een keer <span style="opacity:.8">(+10%)</span></button>`
            : ''}
          <button class="ronde-res-klaar" onclick="Ronde.sluit()">Klaar</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    if (r.sterren >= 3 && typeof showConfetti === 'function') showConfetti(50, 20, true);
    if (typeof _geluid !== 'undefined') (r.sterren >= 2 ? _geluid.fanfare() : _geluid.goed());
  },

  sluit() {
    document.getElementById('ronde-res')?.remove();
  },

  /** Pacing-ramp: zelfde tekst, 10% sneller. */
  opnieuw() {
    this.sluit();
    if (this.type === 'rsvp') {
      const slider = document.getElementById('wpm-slider');
      if (slider) {
        slider.value = Math.min(+slider.max, Math.round((+slider.value * 1.1) / 5) * 5);
        slider.dispatchEvent(new Event('input'));
      }
      if (typeof rsvpStart === 'function') { rsvpIdx = 0; rsvpElapsed = 0; rsvpStart_t = null; rsvpStart(); }
    } else if (this.type === 'chunk') {
      const slider = document.getElementById('chunk-wpm');
      if (slider) {
        slider.value = Math.min(+slider.max, Math.round((+slider.value * 1.1) / 5) * 5);
        slider.dispatchEvent(new Event('input'));
      }
      if (typeof chunkStart === 'function') chunkStart();
    }
  },
};
