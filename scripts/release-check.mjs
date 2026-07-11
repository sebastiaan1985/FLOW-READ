import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const production = process.argv.includes('--production');
const errors = [];
const warnings = [];

function lees(bestand) {
  return readFileSync(resolve(root, bestand), 'utf8');
}

function verwacht(voorwaarde, bericht) {
  if (!voorwaarde) errors.push(bericht);
}

function waarschuw(voorwaarde, bericht) {
  if (!voorwaarde) warnings.push(bericht);
}

function checkJavaScript(bestand) {
  try {
    execFileSync(process.execPath, ['--check', resolve(root, bestand)], { stdio: 'pipe' });
  } catch (error) {
    errors.push(`${bestand} bevat een syntaxfout: ${error.stderr.toString().trim()}`);
  }
}

function checkInlineScripts(bestand) {
  try {
    const html = lees(bestand);
    const scripts = [...html.matchAll(/<script(?:[^>]*)>([\s\S]*?)<\/script>/g)]
      .map(match => match[1])
      .filter(script => script.trim());
    scripts.forEach(script => new Function(script));
  } catch (error) {
    errors.push(`${bestand} bevat een inline script met een syntaxfout: ${error.message}`);
  }
}

const manifest = JSON.parse(lees('manifest.json'));
const manifestScreenshots = manifest.screenshots || [];
verwacht(manifest.name && manifest.short_name, 'Manifest mist name of short_name.');
verwacht(manifest.name === 'Snellezer' && manifest.short_name === 'Snellezer', 'Manifest gebruikt niet overal de naam Snellezer.');
verwacht(manifest.display === 'standalone', 'Manifest moet standalone starten.');
verwacht(manifest.theme_color === '#08081a', 'Manifest moet de donkere PWA-statuskleur gebruiken.');
verwacht(manifest.icons?.some(icon => icon.purpose?.includes('maskable')), 'Manifest mist een maskable icoon.');
verwacht(manifest.shortcuts?.length >= 2, 'Manifest mist de twee app-shortcuts.');
verwacht(manifestScreenshots.length >= 1, 'Manifest mist een mobiele app-screenshot.');
for (const screenshot of manifestScreenshots) {
  verwacht(screenshot.src && existsSync(resolve(root, screenshot.src.replace(/^\//, ''))), `Manifest-screenshot ontbreekt: ${screenshot.src || 'onbekend'}`);
}
for (const icon of manifest.icons || []) {
  verwacht(!icon.src.startsWith('/'), `Manifest-icoon mag niet root-absoluut zijn: ${icon.src}`);
}
for (const screenshot of manifestScreenshots) {
  verwacht(!screenshot.src.startsWith('/'), `Manifest-screenshot mag niet root-absoluut zijn: ${screenshot.src}`);
}
verwacht(!manifest.start_url.startsWith('/'), 'Manifest start_url moet ook onder een projectsubmap werken.');
verwacht(!manifest.scope.startsWith('/'), 'Manifest scope moet ook onder een projectsubmap werken.');

const serviceWorker = lees('service-worker.js');
verwacht(/const CACHE_NAAM = 'snellees-v\d+'/.test(serviceWorker), 'Service worker mist een versiecache.');
const cacheBlok = serviceWorker.match(/const CACHE_STATISCH = \[([\s\S]*?)\];/);
verwacht(!!cacheBlok, 'Service worker mist CACHE_STATISCH.');
if (cacheBlok) {
  const assets = [...cacheBlok[1].matchAll(/'([^']+)'/g)].map(match => match[1]);
  for (const asset of assets) {
    const bestand = asset === '/' || asset === './' ? 'index.html' : asset.replace(/^\//, '');
    verwacht(existsSync(resolve(root, bestand)), `Offline asset ontbreekt: ${asset}`);
  }
  for (const screenshot of manifestScreenshots) {
    verwacht(assets.includes(screenshot.src), `Offline cache mist manifest-screenshot: ${screenshot.src}`);
  }
}

checkJavaScript('service-worker.js');
checkJavaScript('supabase-sync.js');
checkJavaScript('ronde.js');
checkJavaScript('coach.js');
checkInlineScripts('index.html');
checkInlineScripts('login.html');

for (const pagina of ['index.html', 'login.html', 'privacy.html', 'reset-wachtwoord.html']) {
  const html = lees(pagina);
  verwacht(html.includes('Content-Security-Policy'), `${pagina} mist een Content Security Policy.`);
  verwacht(html.includes('strict-origin-when-cross-origin'), `${pagina} mist een referrerbeleid.`);
}

const appHtml = lees('index.html');
verwacht(appHtml.includes('<title>Snellezer</title>'), 'Apppagina gebruikt niet de naam Snellezer.');
verwacht(appHtml.includes('function startInhoudsQuiz('), 'RSVP en chunks missen de quizfinale met drie inhoudsvragen.');
verwacht(appHtml.includes("Coach.registreerBegrip(begripPct, type)"), 'Quizresultaat voedt de begripsscore niet.');
verwacht(appHtml.includes("startInhoudsQuiz('rsvp'"), 'RSVP opent na het lezen geen inhoudsvragen.');
verwacht(appHtml.includes("startInhoudsQuiz('chunk'"), 'Chunks opent na het lezen geen inhoudsvragen.');
verwacht(!appHtml.includes('onclick="aiLangeTekstNieuwe()"'), 'Lange teksten toont nog een AI-tekstknop.');
verwacht(!appHtml.includes("aiLaadTekstBronOpties();"), 'AI-tekstgenerator wordt nog aan de tekstkiezer gekoppeld.');
verwacht(appHtml.includes("accept=\".txt,.md,text/plain,text/markdown\""), 'Eigen tekst ondersteunt geen duidelijke txt/md-upload.');
verwacht(appHtml.includes("avatar-adult") && appHtml.includes("avatar-kid"), 'Volwassen- en kinderavatars ontbreken.');
verwacht(existsSync(resolve(root, 'assets/avatars/adults-grid.jpg')), 'Volwassen avatarset ontbreekt.');
verwacht(existsSync(resolve(root, 'assets/avatars/kids-grid.jpg')), 'Kinderavatarset ontbreekt.');
verwacht(appHtml.includes('apple-mobile-web-app-status-bar-style" content="black"'), 'iOS PWA gebruikt geen niet-overlappende zwarte statusbalk.');
verwacht(appHtml.includes('ios-standalone'), 'iOS standalone-layoutdetectie ontbreekt.');
verwacht(appHtml.includes('href="privacy.html"'), 'Appmenu linkt niet naar de privacyverklaring.');
verwacht(appHtml.includes("const LW_ACTIEF_KEY = 'snellees_actieve_missie'"), 'Leerweg mist een persistente actieve missie.');
verwacht(appHtml.includes('lwMissieBeloning'), 'Leerweg mist missie- en weekbaasbeloningen.');
verwacht(appHtml.includes('Rond eerst de vorige missie af.'), 'Leerweg laat vergrendelde missies mogelijk overslaan.');
verwacht(!appHtml.includes('onclick="leerWegDagMarkeer()"'), 'Leerweg bevat nog een handmatige voltooi-knop.');
verwacht(appHtml.includes('const sessie = startweek?.sessies?.[d - 1]'), 'Startweek en eerste spelwereld zijn niet gekoppeld.');
verwacht(appHtml.includes('kaartMissieVoltooid && typeof _markeerStartweekVoltooid'), 'Startweek kan buiten een echte kaartmissie voortgang krijgen.');
verwacht(appHtml.includes("const kwaliteitNodig = type === 'rsvp' || type === 'chunk'"), 'Tempo-levels missen de begripspoort.');
verwacht(!appHtml.includes("slaaSessieOp(wpm, rsvpWoorden.length); voltooiDaguitdaging('rsvp')"), 'RSVP kan een missie voltooien vóór de begripsmeting.');
verwacht(!lees('ronde.js').includes("_markeerStartweekVoltooid(r.type)"), 'Ronde-resultaat kan onbedoeld een extra startweeksessie overslaan.');
verwacht(lees('ronde.js').includes("begrip !== null && begrip >= begripDoel"), 'Leesronde voltooit de persoonlijke missie zonder begripspoort.');
verwacht(lees('coach.js').includes("baselineKlaar && t.id === 'e1'"), 'Coach kan na de begintest nog vragen om de begintest te doen.');
verwacht(appHtml.includes("const veiligWoord = String(woord ?? '');"), 'Leesweergave ontsmet eigen woorden niet.');
verwacht(appHtml.includes('htmlEscape(d.titel)'), 'Skimweergave ontsmet eigen titels niet.');
for (const eventNaam of ['onboarding_voltooid', 'begintest_voltooid', 'eerste_missie_voltooid', 'startweek_sessie_voltooid', 'startweek_voltooid', 'hermeting_voltooid', 'install_voltooid']) {
  verwacht(appHtml.includes(`gtmTrack('${eventNaam}'`), `Beta-event ontbreekt: ${eventNaam}.`);
}
const loginHtml = lees('login.html');
verwacht(loginHtml.includes('<title>Inloggen — Snellezer</title>'), 'Loginpagina gebruikt niet de naam Snellezer.');
verwacht(loginHtml.includes('href="privacy.html"'), 'Loginpagina linkt niet naar de privacyverklaring.');
for (const provider of ['google', 'apple']) {
  verwacht(loginHtml.includes(`socialLogin('${provider}')`), `Login mist ${provider}-OAuth.`);
}
verwacht(loginHtml.includes('signInWithOAuth'), 'Login mist de OAuth-aanroep.');
verwacht(loginHtml.includes('/auth/v1/settings'), 'Login controleert niet welke OAuth-providers werkelijk aanstaan.');
verwacht(loginHtml.includes('external[provider] === true'), 'Login toont uitgeschakelde OAuth-providers mogelijk toch.');

const sync = lees('supabase-sync.js');
for (const sleutel of ['snellees_startweek', 'snellees_events', 'snellees_streak']) {
  verwacht(sync.includes(`'${sleutel}'`), `Sync mist ${sleutel}.`);
}
verwacht(sync.includes("functions.invoke('delete-account')"), 'Client mist de accountverwijder-call.');

const migratie = lees('supabase/migrations/20260710_user_data_contract.sql');
for (const kolom of ['av_actief', 'extra', 'daily_challenge', 'snellees_gebruiker']) {
  verwacht(migratie.includes(`add column if not exists ${kolom}`), `Migratie mist kolom ${kolom}.`);
}
verwacht(migratie.includes('enable row level security'), 'Migratie zet RLS niet aan.');

const betaMetrics = lees('supabase/queries/beta_metrics.sql');
verwacht(betaMetrics.includes("extra -> 'snellees_events'"), 'Beta-metrics leest de gesynchroniseerde events niet.');
verwacht(betaMetrics.includes('count(distinct account_id)'), 'Beta-metrics mist unieke accounttellingen.');

const deleteFunction = lees('supabase/functions/delete-account/index.ts');
verwacht(deleteFunction.includes('auth.getUser()'), 'Delete Function verifieert de gebruiker niet.');
verwacht(deleteFunction.includes('auth.admin.deleteUser(user.id)'), 'Delete Function verwijdert geen Auth-account.');

const packageJson = JSON.parse(lees('package.json'));
verwacht(packageJson.scripts?.build === 'node scripts/build-web.mjs', 'Buildscript voor native packaging ontbreekt.');
verwacht(packageJson.scripts?.['release:check:live'] === 'node scripts/check-live-config.mjs', 'Live releasecheck ontbreekt.');
verwacht(existsSync(resolve(root, 'scripts/check-live-config.mjs')), 'Script voor live releasecontrole ontbreekt.');
verwacht(existsSync(resolve(root, 'vercel.json')), 'Vercel-config ontbreekt.');
if (existsSync(resolve(root, 'vercel.json'))) {
  const vercelConfig = JSON.parse(lees('vercel.json'));
  verwacht(vercelConfig.buildCommand === 'npm run build', 'Vercel moet de webbuild uitvoeren.');
  verwacht(vercelConfig.outputDirectory === 'dist', 'Vercel moet dist/ publiceren.');
}
verwacht(existsSync(resolve(root, 'capacitor.config.json')), 'Capacitor-config ontbreekt.');
verwacht(JSON.parse(lees('capacitor.config.json')).webDir === 'dist', 'Capacitor moet dist als webDir gebruiken.');
verwacht(existsSync(resolve(root, 'resources/icon.png')), 'Native bronicoon ontbreekt.');
verwacht(existsSync(resolve(root, 'ios/App/App/public/index.html')), 'iOS bevat geen gesynchroniseerde webbuild.');
verwacht(existsSync(resolve(root, 'ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png')), 'iOS appicoon ontbreekt.');
verwacht(existsSync(resolve(root, 'android/app/src/main/assets/public/index.html')), 'Android bevat geen gesynchroniseerde webbuild.');
verwacht(existsSync(resolve(root, 'android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png')), 'Android appicoon ontbreekt.');
for (const nativeLogin of ['ios/App/App/public/login.html', 'android/app/src/main/assets/public/login.html']) {
  const html = lees(nativeLogin);
  verwacht(html.includes("socialLogin('google')"), `${nativeLogin} mist Google-aanmelden.`);
  verwacht(html.includes("socialLogin('apple')"), `${nativeLogin} mist Apple-aanmelden.`);
}
for (const screenshot of manifestScreenshots) {
  const bron = screenshot.src.replace(/^\//, '');
  verwacht(existsSync(resolve(root, 'ios/App/App/public', bron)), `iOS mist manifest-screenshot: ${screenshot.src}`);
  verwacht(existsSync(resolve(root, 'android/app/src/main/assets/public', bron)), `Android mist manifest-screenshot: ${screenshot.src}`);
}

const privacy = lees('PRIVACY_POLICY_TEMPLATE.md');
const privacyHtml = lees('privacy.html');
const privacyPlaceholders = /\[(BEDRIJFSNAAM|PRIVACYCONTACT|PRIVACY_URL|VESTIGINGSPLAATS|DATUM)\]/;
const privacyKlaar = !privacyPlaceholders.test(privacy) &&
  !privacyPlaceholders.test(privacyHtml) &&
  !privacyHtml.includes('data-privacy-status="draft"');
verwacht(serviceWorker.includes("'privacy.html'"), 'Offline cache mist privacy.html.');
verwacht(packageJson.scripts?.build && lees('scripts/build-web.mjs').includes("'privacy.html'"), 'Webbuild neemt privacy.html niet mee.');
verwacht(existsSync(resolve(root, 'ios/App/App/public/privacy.html')), 'iOS bevat geen privacyverklaring.');
verwacht(existsSync(resolve(root, 'android/app/src/main/assets/public/privacy.html')), 'Android bevat geen privacyverklaring.');
const privacyBericht = 'Privacybeleid bevat nog publicatie-placeholders.';
if (production) verwacht(privacyKlaar, privacyBericht);
else waarschuw(privacyKlaar, privacyBericht);

for (const melding of warnings) console.warn(`WAARSCHUWING: ${melding}`);
for (const melding of errors) console.error(`FOUT: ${melding}`);

if (errors.length) process.exitCode = 1;
else console.log(`Release preflight geslaagd${production ? ' (productie)' : ''}.`);
