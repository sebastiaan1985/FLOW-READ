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
];

// Keys die in payload.extra terechtkomen (nooit meer losse kolommen nodig)
const EXTRA_KEYS = [
  'coach_state', 'snellees_begrip_scores', 'gamificatie', 'leerweg_gedaan', 'teksten_gelezen',
  'snellees_eerste_missie', 'snellees_startweek', 'snellees_streak', 'snellees_laatste_resultaat', 'snellees_events',
];

let _huidigeGebruiker = null;
let _syncTimer = null;

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
    await _laadVanCloud();
    _toonGebruikerHeader();

    if (sessionStorage.getItem('snellees_account_nieuw') === '1') {
      sessionStorage.removeItem('snellees_account_nieuw');
      if (typeof gtmTrack === 'function') gtmTrack('account_aangemaakt');
    }

    if (typeof _herlaadAppState === 'function') _herlaadAppState();

    // Een gast die net een account heeft gemaakt, neemt zijn startweek en
    // beta-events direct mee naar de cloud na het inladen van bestaande data.
    _syncNaarCloud();

    _toonApp();
  } catch (e) {
    console.error('Auth check mislukt:', e);
    _toonApp(); // Bij fout: toon de app toch (beter dan zwart scherm)
  }
}

// ── DATA LADEN VAN SUPABASE ────────────────────────────────────────────────────
async function _laadVanCloud() {
  if (!_huidigeGebruiker) return;

  const { data, error } = await _sb
    .from('user_data')
    .select('*')
    .eq('id', _huidigeGebruiker.id)
    .single();

  if (error || !data) return; // Geen data gevonden (nieuwe gebruiker): localStorage blijft leeg

  // Zet cloud-data in localStorage zodat de app er normaal bij kan
  if (data.stats)               localStorage.setItem('snellees_stats',       JSON.stringify(data.stats));
  if (data.bibliotheek)         localStorage.setItem('tekst_bibliotheek',    JSON.stringify(data.bibliotheek));
  if (data.begintest_baseline)  localStorage.setItem('begintest_baseline',   JSON.stringify(data.begintest_baseline));
  if (data.av_profielen)        localStorage.setItem('av_profielen',         JSON.stringify(data.av_profielen));
  if (data.dyx_settings)        localStorage.setItem('dyx_settings',         JSON.stringify(data.dyx_settings));

  if (data.kids_modus   !== null) localStorage.setItem('kids_modus',         data.kids_modus ? '1' : '0');
  if (data.bt_laatste_passage !== null) localStorage.setItem('bt_laatste_passage', String(data.bt_laatste_passage));
  if (data.tekst_actief !== null) localStorage.setItem('tekst_actief',       String(data.tekst_actief));

  // av_actief: herstel vanuit cloud als beschikbaar
  if (data.av_actief !== undefined && data.av_actief !== null) {
    localStorage.setItem('av_actief', String(data.av_actief));
  } else if (localStorage.getItem('av_actief') === null && data.av_profielen) {
    localStorage.setItem('av_actief', '-1');
  }

  // ── Fase 1–4 velden ────────────────────────────────────────
  if (data.snellees_gebruiker)    localStorage.setItem('snellees_gebruiker',    JSON.stringify(data.snellees_gebruiker));
  if (data.snellees_niveau)       localStorage.setItem('snellees_niveau',       JSON.stringify(data.snellees_niveau));
  if (data.snellees_achievements) localStorage.setItem('snellees_achievements', JSON.stringify(data.snellees_achievements));
  if (data.snellees_traindagen)   localStorage.setItem('snellees_traindagen',   JSON.stringify(data.snellees_traindagen));
  if (data.daily_challenge)       localStorage.setItem('daily_challenge',       JSON.stringify(data.daily_challenge));

  // ── Extra (jsonb): nieuwe keys zonder schema-wijzigingen ──
  if (data.extra && typeof data.extra === 'object') {
    for (const key of EXTRA_KEYS) {
      if (data.extra[key] !== undefined && data.extra[key] !== null) {
        localStorage.setItem(key, JSON.stringify(data.extra[key]));
      }
    }
    // tekst_actief als string (kan 'b:<id>' zijn — de int-kolom kan dat niet aan)
    if (typeof data.extra.tekst_actief_raw === 'string') {
      localStorage.setItem('tekst_actief', data.extra.tekst_actief_raw);
    }
  }
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
  for (const key of EXTRA_KEYS) extra[key] = lsJson(key, null);
  payload.extra = extra;

  const { error } = await _sb.from('user_data').upsert(payload, { onConflict: 'id' });
  if (error && /extra/.test(error.message || '')) {
    // Kolom `extra` bestaat nog niet — sync de rest zodat er niets verloren gaat.
    if (!_extraKolomWaarschuwing) {
      console.warn('[Sync] Kolom `extra` ontbreekt in Supabase. Voer eenmalig uit in de SQL editor:\n' +
        '  alter table user_data add column if not exists extra jsonb;');
      _extraKolomWaarschuwing = true;
    }
    delete payload.extra;
    await _sb.from('user_data').upsert(payload, { onConflict: 'id' });
  }
}
let _extraKolomWaarschuwing = false;

// ── UITLOGGEN ────────────────────────────────────────────────────────────────
async function uitloggen() {
  await _syncNuNaarCloud(); // Sla laatste staat op vóór uitloggen
  await _sb.auth.signOut();
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
        <p>Je lokale voortgang blijft op dit apparaat beschikbaar.</p>
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
      window.location.replace('/?account=verwijderd');
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
  const naam  = meta.full_name || meta.name || meta.display_name || '';
  const kort  = (naam || email.split('@')[0]).substring(0, 16);

  // Voeg user-knop toe aan de header (rechts van bestaande knoppen)
  const header = document.querySelector('header');
  if (!header) return;

  // Voorkom dubbel aanmaken
  if (document.getElementById('sb-user-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'sb-user-btn';
  btn.title = email;
  btn.innerHTML = `<span style="font-size:13px">👤</span> ${kort}`;
  btn.onclick = openAccountBeheer;
  Object.assign(btn.style, {
    padding: '7px 13px',
    border: '1px solid rgba(124,111,247,.35)',
    borderRadius: '8px',
    background: 'rgba(124,111,247,.1)',
    color: '#a090f7',
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
  const origSet    = localStorage.setItem.bind(localStorage);
  const origRemove = localStorage.removeItem.bind(localStorage);

  localStorage.setItem = function(key, value) {
    origSet(key, value);
    if (SYNC_KEYS.includes(key)) _syncNaarCloud();
  };

  localStorage.removeItem = function(key) {
    origRemove(key);
    if (SYNC_KEYS.includes(key)) _syncNaarCloud();
  };
})();

// ── START ────────────────────────────────────────────────────────────────────
// Wacht tot de DOM klaar is, controleer dan auth
document.addEventListener('DOMContentLoaded', _checkAuth);

// Sync bij sluiten van het tabblad (als debounce nog loopt)
window.addEventListener('beforeunload', () => {
  clearTimeout(_syncTimer);
  if (_huidigeGebruiker) _syncNuNaarCloud();
});

// Luister naar auth-wijzigingen (bv. token vernieuwd of sessie verlopen)
_sb.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    _huidigeGebruiker = null;
    sessionStorage.setItem('gast_modus', '1');
    if (!window.location.pathname.includes('login')) _toonApp();
  } else if (session) {
    _huidigeGebruiker = session.user;
    sessionStorage.removeItem('gast_modus');
  }
});
