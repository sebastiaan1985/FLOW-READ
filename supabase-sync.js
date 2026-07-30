/**
 * supabase-sync.js
 * Gedeelde auth + data sync module voor SnelLees Trainer
 * Inladen in index.html EN snellezen.html vóór het eigen <script> blok
 *
 * Vereisten (al aanwezig in de HTML, of voeg toe aan <head>):
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 */

// ── CONFIG ───────────────────────────────────────────────────────────────────
// Vervang deze twee waarden met jouw Supabase project-URL en anon key
// Te vinden in: Supabase Dashboard → Settings → API
const SUPABASE_URL  = 'https://hmxrwvxfmhsfgfubcpwb.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhteHJ3dnhmbWhzZmdmdWJjcHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwOTMxMTQsImV4cCI6MjA4OTY2OTExNH0.2Xc-4R_MsBkLAK0q-ZW95tnxcNKorDgxzt77YrboNtM';

// ── INIT ─────────────────────────────────────────────────────────────────────
const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// Alle localStorage-sleutels die we synchen naar Supabase
const SYNC_KEYS = [
  'snellees_stats',
  'tekst_bibliotheek',
  'tekst_actief',
  'begintest_baseline',
  'bt_laatste_passage',
  'av_profielen',
  'av_actief',
  'dyx_settings',
  'kids_modus',
  'daily_challenge',
  // ── Fase 1–4 toevoegingen ──
  'snellees_gebruiker',     // Onboarding: naam, avatar, leesdoel
  'snellees_niveau',        // Adaptief leesniveau (Starter/Gevorderd/Expert)
  'snellees_achievements',  // Behaalde achievements (array van IDs)
  'snellees_traindagen',    // Streakdatums (array van ISO-datumstrings)
  // ── Nieuwe keys: gaan als sub-velden in de jsonb-kolom `extra` ──
  // (eenmalig in Supabase: alter table user_data add column if not exists extra jsonb;)
  'coach_state',            // Slimme Coach: doel-WPM per oefening, feedback-state
  'snellees_begrip_scores', // Begripscores (array, laatste 50)
  'gamificatie',            // Streak-bevriezingen, dagdoel, recap, geluid
  'leerweg_gedaan',         // Afgevinkte leerweg-dagen
  'teksten_gelezen',        // Gelezen-collectie: per tekst keren/beste prestatie
  'snellees_eerste_missie', // Persoonlijke sessie direct na de begintest
  'snellees_startweek',     // De 7 sessies die van startmeting naar hermeting leiden
  'snellees_streak',        // Globale trainingsstreak voor de Home-weergave
  'snellees_laatste_resultaat', // Laatste meetbare winst op Home
  'snellees_events',        // Privacybewuste beta-events, maximaal 250 per gebruiker
  'bt_passage_history',     // Rotatiegeschiedenis van begintestteksten
  'snellees_actieve_missie',// Hervatbare actuele leerwegmissie
  'snellees_onboarding_done',// Onboardingstatus voor een consistente start op elk apparaat
  'snellees_profiel_modus', // Gekozen volwassen-/kindprofielmodus
  'snellees_waarde_moment', // Eenmalige waardemomentstatus
  'snellees_xp_dag',        // Dagelijkse XP-begrenzing tegen onbeperkt herhalen
  'wpm_doel',               // Persoonlijk snelheidsdoel
  'oog_hoogste_vrij',       // Hoogste vrijgespeelde oogtraining
  'oog_hoogste_voltooid',   // Hoogste voltooide oogtraining
  'peri_hoogste_level',     // Hoogste vrijgespeelde perifere level
  'peri_hoogste_voltooid',  // Hoogste voltooide perifere level
  'snellees_top_technieken',// Persoonlijke top-3 uit week 4 van de leerweg
  'dyslexie_leerweg',       // Beheersing en herhaalset per dyslexieles
  'dyslexie_highscores',
  'dyslexie_badges',
  'dyslexie_stats',
];

// Keys die in payload.extra terechtkomen (nooit meer losse kolommen nodig)
const EXTRA_KEYS = [
  'coach_state', 'snellees_begrip_scores', 'gamificatie', 'leerweg_gedaan', 'teksten_gelezen',
  'snellees_eerste_missie', 'snellees_startweek', 'snellees_streak', 'snellees_laatste_resultaat', 'snellees_events',
  'bt_passage_history', 'snellees_actieve_missie', 'snellees_onboarding_done', 'snellees_profiel_modus',
  'snellees_waarde_moment', 'snellees_xp_dag', 'wpm_doel',
  'oog_hoogste_vrij', 'oog_hoogste_voltooid', 'peri_hoogste_level', 'peri_hoogste_voltooid',
  'snellees_top_technieken',
  'dyslexie_leerweg', 'dyslexie_highscores', 'dyslexie_badges', 'dyslexie_stats',
];

let _huidigeGebruiker = null;
let _syncTimer = null;
const SYNC_OWNER_KEY = 'snellees_sync_owner';
const SYNC_DIRTY_KEY = 'snellees_sync_lokaal_gewijzigd';
const SYNC_LAST_KEY = 'snellees_sync_laatst';
const _storageSetOrig = localStorage.setItem.bind(localStorage);
const _storageRemoveOrig = localStorage.removeItem.bind(localStorage);
const _storageGetOrig = localStorage.getItem.bind(localStorage);

const SYNC_SCALAR_KEYS = new Set([
  'kids_modus',
  'bt_laatste_passage',
  'tekst_actief',
  'av_actief',
  'snellees_onboarding_done',
  'snellees_profiel_modus',
  'snellees_waarde_moment',
  'wpm_doel',
]);
const LOCAL_ACCOUNT_KEYS = [...SYNC_KEYS, 'av_profiel'];

function _syncSchrijfZonderTrigger(key, value) {
  if (value === undefined || value === null) _storageRemoveOrig(key);
  else _storageSetOrig(key, String(value));
}

function _syncWisLokaleAccountdata() {
  clearTimeout(_syncTimer);
  _syncTimer = null;
  for (const key of LOCAL_ACCOUNT_KEYS) _storageRemoveOrig(key);
  _storageRemoveOrig(SYNC_OWNER_KEY);
  _storageRemoveOrig(SYNC_DIRTY_KEY);
  _storageRemoveOrig(SYNC_LAST_KEY);
}

function _syncLokaleSnapshot() {
  return Object.fromEntries(
    SYNC_KEYS
      .map(key => [key, _storageGetOrig(key)])
      .filter(([, value]) => value !== null),
  );
}

function _syncParse(key, raw) {
  if (raw === null || raw === undefined) return null;
  if (SYNC_SCALAR_KEYS.has(key)) return String(raw);
  try { return JSON.parse(raw); } catch (e) { return null; }
}

function _syncStringify(key, value) {
  if (value === undefined || value === null) return null;
  if (SYNC_SCALAR_KEYS.has(key)) return String(value);
  return JSON.stringify(value);
}

function _syncItemId(item) {
  if (item === null || typeof item !== 'object') return `waarde:${JSON.stringify(item)}`;
  if (item.uid != null) return `uid:${item.uid}`;
  if (item.id != null) return `id:${item.id}`;
  if (item.naam && item.avatar) return `profiel:${item.naam}:${item.avatar}`;
  if (item.datum && item.type) return `sessie:${item.datum}:${item.type}:${item.wpm ?? ''}:${item.begrip ?? ''}`;
  if (item.ts && item.event) return `event:${item.ts}:${item.event}`;
  return `json:${JSON.stringify(item)}`;
}

function _syncVoegWaardenSamen(cloud, lokaal, veld = '') {
  if (lokaal === undefined || lokaal === null) return cloud;
  if (cloud === undefined || cloud === null) return lokaal;
  if (Array.isArray(cloud) && Array.isArray(lokaal)) {
    const resultaat = [...cloud];
    const posities = new Map(resultaat.map((item, index) => [_syncItemId(item), index]));
    for (const item of lokaal) {
      const id = _syncItemId(item);
      if (!posities.has(id)) {
        posities.set(id, resultaat.length);
        resultaat.push(item);
      } else {
        const index = posities.get(id);
        resultaat[index] = _syncVoegWaardenSamen(resultaat[index], item);
      }
    }
    return resultaat;
  }
  if (
    typeof cloud === 'object' && !Array.isArray(cloud) &&
    typeof lokaal === 'object' && !Array.isArray(lokaal)
  ) {
    const resultaat = { ...cloud };
    for (const [key, value] of Object.entries(lokaal)) {
      resultaat[key] = _syncVoegWaardenSamen(cloud[key], value, key);
    }
    return resultaat;
  }
  if (typeof cloud === 'number' && typeof lokaal === 'number' &&
      /^(best|beste|xp|keren|niveau|score|streak|totaal|hoogste)/i.test(veld)) {
    return Math.max(cloud, lokaal);
  }
  if (typeof cloud === 'boolean' && typeof lokaal === 'boolean' && /^(beheerst|voltooid|klaar)/i.test(veld)) {
    return cloud || lokaal;
  }
  return lokaal;
}

function _syncVoegRuwSamen(key, cloudRaw, lokaalRaw) {
  const cloud = _syncParse(key, cloudRaw);
  const lokaal = _syncParse(key, lokaalRaw);
  return _syncStringify(key, _syncVoegWaardenSamen(cloud, lokaal));
}

function _syncHeeftInhoud(waarde) {
  if (waarde === null || waarde === undefined || waarde === false) return false;
  if (typeof waarde === 'number') return waarde !== 0;
  if (typeof waarde === 'string') return waarde.trim() !== '' && waarde !== '0' && waarde !== '-1';
  if (Array.isArray(waarde)) return waarde.some(_syncHeeftInhoud);
  if (typeof waarde === 'object') return Object.values(waarde).some(_syncHeeftInhoud);
  return true;
}

function _syncSnapshotHeeftVoortgang(snapshot) {
  const json = key => _syncParse(key, snapshot[key]);
  const statsData = json('snellees_stats');
  const niveauData = json('snellees_niveau');
  if (statsData?.sessies?.length || Number(statsData?.totaalWoorden) > 0) return true;
  if (niveauData?.sessies?.length || Number(niveauData?.niveau) > 1) return true;
  for (const key of [
    'tekst_bibliotheek', 'begintest_baseline', 'av_profielen', 'daily_challenge',
    'snellees_gebruiker', 'snellees_achievements', 'snellees_traindagen',
    'coach_state', 'snellees_begrip_scores', 'gamificatie', 'leerweg_gedaan',
    'teksten_gelezen', 'snellees_eerste_missie', 'snellees_startweek',
    'snellees_streak', 'snellees_laatste_resultaat', 'snellees_events',
    'snellees_actieve_missie', 'snellees_profiel_modus', 'snellees_xp_dag', 'wpm_doel',
    'dyslexie_leerweg', 'dyslexie_highscores', 'dyslexie_badges', 'dyslexie_stats',
  ]) {
    const waarde = json(key);
    if (_syncHeeftInhoud(waarde)) return true;
  }
  return Number(snapshot.oog_hoogste_voltooid) >= 0 ||
    Number(snapshot.peri_hoogste_voltooid) >= 0;
}

// ── VALUE-FIRST START ───────────────────────────────────────────────────────
// De training blijft meteen zichtbaar. Auth en cloud-sync verrijken daarna de
// lokale staat, maar mogen nooit een offline of nieuwe gebruiker blokkeren.

function _toonApp() {
  const s = document.getElementById('auth-hide');
  if (s) s.remove();
}

// ── AUTH BEWAKER ──────────────────────────────────────────────────────────────
// Waarde-first: nieuwe gebruikers mogen eerst trainen. Een account is pas nodig
// wanneer ze hun voortgang willen bewaren of op meerdere apparaten willen syncen.
async function _checkAuth() {
  try {
    if (sessionStorage.getItem('gast_modus') === '1') { _toonApp(); return; }

    const { data: { session } } = await _sb.auth.getSession();
    if (!session) {
      sessionStorage.setItem('gast_modus', '1');
      _toonApp();
      return;
    }
    _huidigeGebruiker = session.user;
    const bevoegdBevestigd = sessionStorage.getItem('snellees_account_bevoegd') === '1';
    if (bevoegdBevestigd) {
      const { data: bevestigingData, error: bevestigingError } = await _sb.auth.updateUser({
        data: {
          account_bevoegd_bevestigd: true,
          account_bevoegd_versie: '2026-07-30',
        },
      });
      if (bevestigingError) {
        console.warn('[Auth] Registratiebevestiging kon niet worden opgeslagen.', bevestigingError);
      } else {
        _huidigeGebruiker = bevestigingData.user || _huidigeGebruiker;
        sessionStorage.removeItem('snellees_account_bevoegd');
      }
    }
    const syncNodig = await _laadVanCloud();
    _toonGebruikerHeader();

    const nieuwAccount = sessionStorage.getItem('snellees_account_nieuw') === '1';
    if (nieuwAccount) {
      sessionStorage.removeItem('snellees_account_nieuw');
      if (typeof gtmTrack === 'function') gtmTrack('account_aangemaakt');
    }

    if (typeof _herlaadAppState === 'function') _herlaadAppState();

    // Een gast die net een account heeft gemaakt, neemt zijn startweek en
    // beta-events direct mee naar de cloud na het inladen van bestaande data.
    if (syncNodig || nieuwAccount) _syncNaarCloud();

    _toonApp();
  } catch (e) {
    console.error('Auth check mislukt:', e);
    _toonApp(); // Bij fout: toon de app toch (beter dan zwart scherm)
  }
}

function _pasIosStandaloneLayoutToe() {
  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  document.documentElement.classList.toggle('ios-standalone', isIos && standalone);
}

// ── DATA LADEN VAN SUPABASE ────────────────────────────────────────────────────
async function _laadVanCloud() {
  if (!_huidigeGebruiker) return false;

  const eigenaar = _storageGetOrig(SYNC_OWNER_KEY);
  const andereEigenaar = !!eigenaar && eigenaar !== _huidigeGebruiker.id;
  if (andereEigenaar) _syncWisLokaleAccountdata();
  const lokaleSnapshot = andereEigenaar ? {} : _syncLokaleSnapshot();
  const gastVoortgang = !eigenaar && _syncSnapshotHeeftVoortgang(lokaleSnapshot);
  const lokaalGewijzigd = eigenaar === _huidigeGebruiker.id &&
    _storageGetOrig(SYNC_DIRTY_KEY) === '1';
  const samenvoegen = gastVoortgang || lokaalGewijzigd;

  const { data, error } = await _sb
    .from('user_data')
    .select('*')
    .eq('id', _huidigeGebruiker.id)
    .maybeSingle();

  if (error) throw error;

  const cloud = {};
  if (data) {
    const jsonVelden = {
      snellees_stats: data.stats,
      tekst_bibliotheek: data.bibliotheek,
      begintest_baseline: data.begintest_baseline,
      av_profielen: data.av_profielen,
      dyx_settings: data.dyx_settings,
      snellees_gebruiker: data.snellees_gebruiker,
      snellees_niveau: data.snellees_niveau,
      snellees_achievements: data.snellees_achievements,
      snellees_traindagen: data.snellees_traindagen,
      daily_challenge: data.daily_challenge,
    };
    for (const [key, value] of Object.entries(jsonVelden)) {
      if (value !== undefined && value !== null) cloud[key] = JSON.stringify(value);
    }

    if (data.kids_modus !== undefined && data.kids_modus !== null) cloud.kids_modus = data.kids_modus ? '1' : '0';
    if (data.bt_laatste_passage !== undefined && data.bt_laatste_passage !== null) cloud.bt_laatste_passage = String(data.bt_laatste_passage);
    if (data.tekst_actief !== undefined && data.tekst_actief !== null) cloud.tekst_actief = String(data.tekst_actief);
    if (data.av_actief !== undefined && data.av_actief !== null) cloud.av_actief = String(data.av_actief);

    if (data.extra && typeof data.extra === 'object') {
      for (const key of EXTRA_KEYS) {
        if (data.extra[key] !== undefined && data.extra[key] !== null) {
          cloud[key] = _syncStringify(key, data.extra[key]);
        }
      }
      if (typeof data.extra.tekst_actief_raw === 'string') {
        cloud.tekst_actief = data.extra.tekst_actief_raw;
      }
    }
  }

  for (const key of SYNC_KEYS) {
    const cloudRaw = Object.hasOwn(cloud, key) ? cloud[key] : null;
    const lokaalRaw = lokaleSnapshot[key] ?? null;
    if (samenvoegen && lokaalRaw !== null) {
      _syncSchrijfZonderTrigger(key, cloudRaw === null ? lokaalRaw : _syncVoegRuwSamen(key, cloudRaw, lokaalRaw));
    } else if (cloudRaw !== null) {
      _syncSchrijfZonderTrigger(key, cloudRaw);
    } else {
      _syncSchrijfZonderTrigger(key, null);
    }
  }

  if (_storageGetOrig('av_actief') === null && _storageGetOrig('av_profielen')) {
    _syncSchrijfZonderTrigger('av_actief', '-1');
  }
  _storageSetOrig(SYNC_OWNER_KEY, _huidigeGebruiker.id);
  _storageSetOrig(SYNC_DIRTY_KEY, samenvoegen ? '1' : '0');
  if (data?.updated_at) _storageSetOrig(SYNC_LAST_KEY, data.updated_at);
  return samenvoegen || (!data && _syncSnapshotHeeftVoortgang(lokaleSnapshot));
}

// ── DATA OPSLAAN NAAR SUPABASE ────────────────────────────────────────────────
// Debounced: wacht 2 seconden na de laatste wijziging
function _syncNaarCloud() {
  if (!_huidigeGebruiker) return;
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(_syncNuNaarCloud, 2000);
}

async function _syncNuNaarCloud() {
  if (!_huidigeGebruiker) return;

  function lsJson(key, fallback = null) {
    try { return JSON.parse(localStorage.getItem(key)); } catch(e) { return fallback; }
  }

  const payload = {
    id:                   _huidigeGebruiker.id,
    // ── Bestaande velden ──────────────────────────────────────
    stats:                lsJson('snellees_stats',      { sessies: [], totaalWoorden: 0, bestWpm: 0 }),
    bibliotheek:          lsJson('tekst_bibliotheek',   []),
    begintest_baseline:   lsJson('begintest_baseline',  null),
    av_profielen:         lsJson('av_profielen',        []),
    dyx_settings:         lsJson('dyx_settings',        {}),
    kids_modus:           localStorage.getItem('kids_modus') === '1',
    bt_laatste_passage:   parseInt(localStorage.getItem('bt_laatste_passage') ?? '-1'),
    tekst_actief:         parseInt(localStorage.getItem('tekst_actief') ?? '0') || 0, // 'b:<id>' → 0; echte waarde zit in extra.tekst_actief_raw
    av_actief:            parseInt(localStorage.getItem('av_actief') ?? '-1'),
    // ── Fase 1–4 velden ──────────────────────────────────────
    snellees_gebruiker:   lsJson('snellees_gebruiker',    null),
    snellees_niveau:      lsJson('snellees_niveau',       { niveau: 1, sessies: [] }),
    snellees_achievements:lsJson('snellees_achievements', []),
    snellees_traindagen:  lsJson('snellees_traindagen',   []),
    daily_challenge:      lsJson('daily_challenge',       null),
    updated_at:           new Date().toISOString(),
  };

  // ── Extra (jsonb): alle nieuwe keys in één kolom ──
  const extra = { tekst_actief_raw: localStorage.getItem('tekst_actief') || '0' };
  for (const key of EXTRA_KEYS) {
    const raw = localStorage.getItem(key);
    extra[key] = SYNC_SCALAR_KEYS.has(key) ? raw : lsJson(key, null);
  }
  payload.extra = extra;

  let { error } = await _sb.from('user_data').upsert(payload, { onConflict: 'id' });
  if (error && /extra/.test(error.message || '')) {
    // Kolom `extra` bestaat nog niet — sync de rest zodat er niets verloren gaat.
    if (!_extraKolomWaarschuwing) {
      console.warn('[Sync] Kolom `extra` ontbreekt in Supabase. Voer eenmalig uit in de SQL editor:\n' +
        '  alter table user_data add column if not exists extra jsonb;');
      _extraKolomWaarschuwing = true;
    }
    delete payload.extra;
    ({ error } = await _sb.from('user_data').upsert(payload, { onConflict: 'id' }));
  }
  if (error) {
    console.error('[Sync] Opslaan in de cloud mislukt:', error.message || error);
    return false;
  }
  _storageSetOrig(SYNC_OWNER_KEY, _huidigeGebruiker.id);
  _storageSetOrig(SYNC_DIRTY_KEY, '0');
  _storageSetOrig(SYNC_LAST_KEY, payload.updated_at);
  return true;
}
let _extraKolomWaarschuwing = false;

// ── UITLOGGEN ────────────────────────────────────────────────────────────────
async function uitloggen() {
  await _syncNuNaarCloud(); // Sla laatste staat op vóór uitloggen
  try { await _sb.auth.signOut(); }
  finally {
    _huidigeGebruiker = null;
    _syncWisLokaleAccountdata();
  }
  window.location.href = 'login.html';
}

function openAccountBeheer() {
  if (!_huidigeGebruiker || document.getElementById('account-beheer-overlay')) return;
  const email = _huidigeGebruiker.email || '';
  const veiligEmail = email.replace(/[&<>'"]/g, teken => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[teken]);
  const overlay = document.createElement('div');
  overlay.id = 'account-beheer-overlay';
  overlay.className = 'account-beheer-overlay';
  overlay.innerHTML = `
    <section class="account-beheer-dialog" role="dialog" aria-modal="true" aria-labelledby="account-beheer-titel">
      <div class="account-beheer-kop">
        <div><h2 id="account-beheer-titel">Account</h2><p>${veiligEmail}</p></div>
        <button class="account-beheer-sluit" type="button" aria-label="Sluiten" data-account-sluit>×</button>
      </div>
      <div class="account-beheer-blok">
        <b>Uitloggen</b>
        <p>Je voortgang blijft veilig in je account en wordt bij uitloggen van dit apparaat verwijderd.</p>
        <div class="account-beheer-acties"><button class="btn btn-ghost" type="button" data-account-uitloggen>Uitloggen</button></div>
      </div>
      <div class="account-beheer-blok">
        <b>Account verwijderen</b>
        <p>Dit verwijdert je account en de opgeslagen trainingsgegevens definitief. Dit kan niet ongedaan worden gemaakt.</p>
        <div class="account-beheer-acties"><button class="btn btn-ghost account-beheer-verwijder" type="button" data-account-verwijder>Account verwijderen</button></div>
        <div class="account-beheer-status" aria-live="polite" data-account-status></div>
      </div>
    </section>`;

  let esc;
  const sluit = () => {
    overlay.remove();
    if (esc) document.removeEventListener('keydown', esc);
  };
  const verwijderKnop = overlay.querySelector('[data-account-verwijder]');
  const status = overlay.querySelector('[data-account-status]');
  let bevestigd = false;
  overlay.addEventListener('click', e => { if (e.target === overlay) sluit(); });
  overlay.querySelector('[data-account-sluit]').addEventListener('click', sluit);
  overlay.querySelector('[data-account-uitloggen]').addEventListener('click', () => { sluit(); uitloggen(); });
  verwijderKnop.addEventListener('click', async () => {
    if (!bevestigd) {
      bevestigd = true;
      verwijderKnop.textContent = 'Ja, verwijder definitief';
      status.textContent = 'Tik nogmaals om definitief te verwijderen.';
      return;
    }
    verwijderKnop.disabled = true;
    status.classList.remove('fout');
    status.textContent = 'Account wordt verwijderd…';
    try {
      const { error } = await _sb.functions.invoke('delete-account');
      if (error) throw error;
      sessionStorage.clear();
      localStorage.clear();
      _huidigeGebruiker = null;
      try { await _sb.auth.signOut(); } catch(e) {}
      window.location.replace(new URL('./?account=verwijderd', window.location.href).toString());
    } catch (e) {
      verwijderKnop.disabled = false;
      status.classList.add('fout');
      status.textContent = 'Verwijderen lukte niet. Probeer het opnieuw.';
    }
  });
  esc = e => {
    if (e.key !== 'Escape') return;
    sluit();
  };
  document.addEventListener('keydown', esc);
  document.body.appendChild(overlay);
  setTimeout(() => overlay.querySelector('[data-account-sluit]')?.focus(), 0);
}

// ── GEBRUIKER TONEN IN HEADER ────────────────────────────────────────────────
function _toonGebruikerHeader() {
  const email = _huidigeGebruiker?.email || '';
  const meta  = _huidigeGebruiker?.user_metadata || {};
  const naam  = [meta.full_name, meta.name, meta.display_name]
    .find(waarde => typeof waarde === 'string' && waarde.trim()) || '';
  const kort  = (naam || email.split('@')[0]).trim().substring(0, 16);

  // Voeg user-knop toe aan de header (rechts van bestaande knoppen)
  const header = document.querySelector('header');
  if (!header) return;

  // Voorkom dubbel aanmaken
  if (document.getElementById('sb-user-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'sb-user-btn';
  btn.title = email;
  btn.setAttribute('aria-label', kort ? `Account van ${kort}` : 'Account');
  const icoon = document.createElement('span');
  icoon.style.fontSize = '13px';
  icoon.setAttribute('aria-hidden', 'true');
  icoon.textContent = '👤';
  btn.append(icoon, document.createTextNode(kort));
  btn.onclick = openAccountBeheer;
  Object.assign(btn.style, {
    padding: '7px 13px',
    border: '1px solid rgba(32,201,195,.35)',
    borderRadius: '8px',
    background: 'rgba(32,201,195,.1)',
    color: '#effaf8',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    whiteSpace: 'nowrap',
    flexShrink: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  });
  header.appendChild(btn);

  // Verberg "Maak profiel" knop wanneer ingelogd via Supabase
  const noProfielBtn = document.getElementById('no-profiel-btn');
  if (noProfielBtn) noProfielBtn.style.display = 'none';
}

// ── PATCH localStorage ───────────────────────────────────────────────────────
// Onderschep localStorage.setItem zodat elke schrijfactie een sync triggert
// De app-code hoeft niets te veranderen — dit werkt automatisch
(function() {
  localStorage.setItem = function(key, value) {
    _storageSetOrig(key, value);
    if (SYNC_KEYS.includes(key)) {
      _storageSetOrig(SYNC_DIRTY_KEY, '1');
      _syncNaarCloud();
    }
  };

  localStorage.removeItem = function(key) {
    _storageRemoveOrig(key);
    if (SYNC_KEYS.includes(key)) {
      _storageSetOrig(SYNC_DIRTY_KEY, '1');
      _syncNaarCloud();
    }
  };
})();

// ── START ────────────────────────────────────────────────────────────────────
// Wacht tot de DOM klaar is, controleer dan auth
document.addEventListener('DOMContentLoaded', () => {
  _pasIosStandaloneLayoutToe();
  _checkAuth();
});

// Start de laatste sync zodra de app naar de achtergrond gaat. Dit gebeurt op
// mobiel eerder en betrouwbaarder dan wachten tot het tabblad al wordt gesloten.
let _achtergrondSyncGestart = false;
function _syncBijAchtergrond() {
  if (_achtergrondSyncGestart) return;
  _achtergrondSyncGestart = true;
  clearTimeout(_syncTimer);
  if (_huidigeGebruiker) void _syncNuNaarCloud();
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') _syncBijAchtergrond();
  else _achtergrondSyncGestart = false;
});
window.addEventListener('pagehide', _syncBijAchtergrond);

// Luister naar auth-wijzigingen (bv. token vernieuwd of sessie verlopen)
_sb.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    _huidigeGebruiker = null;
    _syncWisLokaleAccountdata();
    sessionStorage.setItem('gast_modus', '1');
    if (!window.location.pathname.includes('login')) _toonApp();
  } else if (session) {
    _huidigeGebruiker = session.user;
    sessionStorage.removeItem('gast_modus');
  }
});
