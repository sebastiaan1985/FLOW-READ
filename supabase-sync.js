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
];

let _huidigeGebruiker = null;
let _syncTimer = null;

// ── VOORKOM FLASH VAN ONBEVEILIGDE CONTENT ──────────────────────────────────
// Verberg de body kort totdat auth is gecontroleerd
(function() {
  // Alleen verbergen op app-pagina's, NIET op login.html
  if (window.location.pathname.includes('login')) return;
  const s = document.createElement('style');
  s.id = 'auth-hide';
  s.textContent = 'body{opacity:0!important;transition:opacity .3s ease}';
  document.head.appendChild(s);
  // Veiligheids-fallback: na 3 seconden ALTIJD tonen (voorkomt zwart scherm)
  setTimeout(_toonApp, 3000);
})();

function _toonApp() {
  const s = document.getElementById('auth-hide');
  if (s) s.remove();
}

// ── AUTH BEWAKER ──────────────────────────────────────────────────────────────
// Als de gebruiker niet ingelogd is én geen gast: stuur naar login
async function _checkAuth() {
  try {
    if (sessionStorage.getItem('gast_modus') === '1') { _toonApp(); return; }

    const { data: { session } } = await _sb.auth.getSession();
    if (!session) {
      window.location.href = 'login.html';
      return;
    }
    _huidigeGebruiker = session.user;
    await _laadVanCloud();
    _toonGebruikerHeader();

    if (typeof _herlaadAppState === 'function') _herlaadAppState();

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
    stats:                lsJson('snellees_stats',      { sessies: [], totaalWoorden: 0, bestWpm: 0 }),
    bibliotheek:          lsJson('tekst_bibliotheek',   []),
    begintest_baseline:   lsJson('begintest_baseline',  null),
    av_profielen:         lsJson('av_profielen',        []),
    dyx_settings:         lsJson('dyx_settings',        {}),
    kids_modus:           localStorage.getItem('kids_modus') === '1',
    bt_laatste_passage:   parseInt(localStorage.getItem('bt_laatste_passage') ?? '-1'),
    tekst_actief:         parseInt(localStorage.getItem('tekst_actief') ?? '0'),
    av_actief:            parseInt(localStorage.getItem('av_actief') ?? '-1'),
    updated_at:           new Date().toISOString(),
  };

  await _sb.from('user_data').upsert(payload, { onConflict: 'id' });
}

// ── UITLOGGEN ────────────────────────────────────────────────────────────────
async function uitloggen() {
  await _syncNuNaarCloud(); // Sla laatste staat op vóór uitloggen
  await _sb.auth.signOut();
  window.location.href = 'login.html';
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
  btn.onclick = () => {
    if (confirm(`Uitloggen als ${email}?`)) uitloggen();
  };
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
    window.location.href = 'login.html';
  } else if (session) {
    _huidigeGebruiker = session.user;
  }
});
