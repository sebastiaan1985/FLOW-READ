import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const productieUrl = 'https://snel-lees-app.vercel.app';
const loginHtml = readFileSync(resolve(root, 'login.html'), 'utf8');
const fouten = [];
const waarschuwingen = [];

function waarde(naam) {
  const match = loginHtml.match(new RegExp(`const ${naam}\\s*=\\s*'([^']+)'`));
  if (!match) throw new Error(`${naam} ontbreekt in login.html.`);
  return match[1];
}

function verwacht(voorwaarde, bericht) {
  if (!voorwaarde) fouten.push(bericht);
}

function waarschuw(voorwaarde, bericht) {
  if (!voorwaarde) waarschuwingen.push(bericht);
}

async function haal(url, opties = {}) {
  return fetch(url, {
    ...opties,
    cache: 'no-store',
    signal: AbortSignal.timeout(15000),
  });
}

async function tekst(url, opties) {
  const response = await haal(url, opties);
  verwacht(response.ok, `${url} antwoordt met HTTP ${response.status}.`);
  return response.text();
}

const supabaseUrl = waarde('SUPABASE_URL');
const supabaseAnon = waarde('SUPABASE_ANON');
const apiHeaders = { apikey: supabaseAnon };

try {
  const [app, login, privacy, verwijderen, serviceWorker] = await Promise.all([
    tekst(`${productieUrl}/index.html`),
    tekst(`${productieUrl}/login.html`),
    tekst(`${productieUrl}/privacy.html`),
    tekst(`${productieUrl}/account-verwijderen.html`),
    tekst(`${productieUrl}/service-worker.js`),
  ]);

  verwacht(app.includes('href="privacy.html"'), 'Productie-app mist de privacylink.');
  verwacht(login.includes('laadSocialProviders'), 'Productielogin controleert providerstatus niet.');
  verwacht(serviceWorker.includes("'privacy.html'"), 'Productie-service-worker cachet privacy.html niet.');
  verwacht(serviceWorker.includes("'account-verwijderen.html'"), 'Productie-service-worker cachet de accountverwijderpagina niet.');
  verwacht(serviceWorker.includes("const CACHE_NAAM = 'snellees-v43'"), 'Productie gebruikt niet de actuele v43-offlinecache.');
  verwacht(!/\[(BEDRIJFSNAAM|PRIVACYCONTACT|VESTIGINGSPLAATS|PRIVACY_URL|DATUM)\]/.test(privacy), 'Live privacyverklaring bevat placeholders.');
  verwacht(!privacy.includes('data-privacy-status="draft"'), 'Live privacyverklaring staat nog als concept gemarkeerd.');
  verwacht(!/\[(PRIVACYCONTACT)\]/.test(verwijderen), 'Live accountverwijderpagina bevat placeholders.');
  verwacht(!verwijderen.includes('data-deletion-status="draft"'), 'Live accountverwijderpagina staat nog als concept gemarkeerd.');

  const beveiligingsResponse = await haal(`${productieUrl}/index.html`, { method:'HEAD' });
  verwacht(beveiligingsResponse.headers.get('x-frame-options') === 'DENY', 'Productie mist X-Frame-Options DENY.');
  verwacht(beveiligingsResponse.headers.get('x-content-type-options') === 'nosniff', 'Productie mist X-Content-Type-Options nosniff.');
  verwacht((beveiligingsResponse.headers.get('content-security-policy') || '').includes("frame-ancestors 'none'"), 'Productie blokkeert framing niet via CSP.');

  const instellingenResponse = await haal(`${supabaseUrl}/auth/v1/settings`, { headers: apiHeaders });
  verwacht(instellingenResponse.ok, `Supabase auth-instellingen antwoorden met HTTP ${instellingenResponse.status}.`);
  if (instellingenResponse.ok) {
    const instellingen = await instellingenResponse.json();
    const external = instellingen.external || {};
    verwacht(external.email === true, 'E-mailaanmelding staat niet aan in Supabase.');
    verwacht(external.google === true || external.apple === true, 'Google en Apple staan allebei uit in Supabase.');
    waarschuw(external.google === true, 'Google-aanmelding staat nog uit.');
    waarschuw(external.apple === true, 'Apple-aanmelding staat nog uit.');
  }

  const kolommen = encodeURIComponent('av_actief,extra,daily_challenge,snellees_gebruiker');
  const schemaResponse = await haal(`${supabaseUrl}/rest/v1/user_data?select=${kolommen}&limit=0`, { headers: apiHeaders });
  if (!schemaResponse.ok) {
    const melding = await schemaResponse.text();
    fouten.push(`Supabase-migratie ontbreekt of is onvolledig: ${melding}`);
  }

  const rlsResponse = await haal(`${supabaseUrl}/rest/v1/user_data?select=id&limit=1`, {
    method: 'HEAD',
    headers: { ...apiHeaders, Prefer: 'count=exact' },
  });
  verwacht(rlsResponse.ok, `Anonieme RLS-controle antwoordt met HTTP ${rlsResponse.status}.`);
  if (rlsResponse.ok) {
    const bereik = rlsResponse.headers.get('content-range') || '';
    verwacht(/\/0$/.test(bereik), `Anonieme gebruiker ziet mogelijk user_data-rijen (${bereik || 'geen content-range'}).`);
  }

  const verwijderResponse = await haal(`${supabaseUrl}/functions/v1/delete-account`, {
    method: 'OPTIONS',
    headers: {
      Origin: productieUrl,
      'Access-Control-Request-Method': 'POST',
    },
  });
  verwacht(verwijderResponse.ok, `Supabase-functie delete-account is niet bereikbaar (HTTP ${verwijderResponse.status}).`);
  verwacht(verwijderResponse.headers.get('access-control-allow-origin') === productieUrl, 'Delete Function bevestigt de productieherkomst niet exact.');
  verwacht((verwijderResponse.headers.get('access-control-allow-methods') || '').includes('POST'), 'Delete Function staat POST niet toe in de CORS-preflight.');
  verwacht(verwijderResponse.headers.get('x-content-type-options') === 'nosniff', 'Delete Function mist nosniff op de preflight.');

  const vreemdeHerkomstResponse = await haal(`${supabaseUrl}/functions/v1/delete-account`, {
    method: 'OPTIONS',
    headers: {
      Origin: 'https://niet-vertrouwd.example',
      'Access-Control-Request-Method': 'POST',
    },
  });
  verwacht(vreemdeHerkomstResponse.status === 403, `Delete Function weigert een onbekende browserherkomst niet (HTTP ${vreemdeHerkomstResponse.status}).`);

  const zonderTokenResponse = await haal(`${supabaseUrl}/functions/v1/delete-account`, {
    method: 'POST',
    headers: { Origin: productieUrl, 'Content-Type':'application/json' },
    body: '{}',
  });
  verwacht(zonderTokenResponse.status === 401, `Delete Function weigert een verzoek zonder accounttoken niet correct (HTTP ${zonderTokenResponse.status}).`);
  verwacht(zonderTokenResponse.headers.get('cache-control') === 'no-store', 'Delete Function kan foutantwoorden nog laten cachen.');
} catch (error) {
  fouten.push(`Live controle kon niet worden afgerond: ${error.message}`);
}

for (const melding of waarschuwingen) console.warn(`WAARSCHUWING: ${melding}`);
for (const melding of fouten) console.error(`FOUT: ${melding}`);

if (fouten.length) process.exitCode = 1;
else console.log('Live releasecontrole geslaagd.');
