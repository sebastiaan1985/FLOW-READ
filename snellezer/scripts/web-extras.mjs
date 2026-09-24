// Maakt de statische webbestanden in public/: PWA-manifest, iconen, index-sjabloon, service worker en privacypagina.
// Gebruik: node --experimental-strip-types scripts/web-extras.mjs  (daarna gewoon `npm run build:web`)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import {PRIVACY_SECTIONS, PRIVACY_UPDATED, PRIVACY_CONTACT} from '../src/data/privacy.ts';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const pub = path.join(root, 'public');
const app = JSON.parse(fs.readFileSync(path.join(root, 'app.json'), 'utf8')).expo;
fs.mkdirSync(path.join(pub, 'icons'), {recursive: true});

const BG = '#FCFCF9', ACCENT = '#0B6E63', INK = '#17251F', MUTED = '#5E6B64';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Iconen uit het logo (zie scripts/brand-assets.mjs). Het app-icoon heeft een volle groene achtergrond;
// het maskable icoon houdt de S binnen de veilige zone, omdat Android het rond of druppelvormig bijsnijdt.
const LOGO_GREEN = '#086961';
for (const [name, size] of [['icon-192', 192], ['icon-512', 512], ['apple-touch-icon', 180]])
  await sharp(path.join(root, 'assets/icon.png')).resize(size, size).png().toFile(path.join(pub, 'icons', name + '.png'));
const mark = await sharp(path.join(root, 'assets/brand/s.png')).resize(384, 384).toBuffer();
await sharp({create: {width: 512, height: 512, channels: 4, background: LOGO_GREEN}}).composite([{input: mark, left: 64, top: 64}]).flatten({background: LOGO_GREEN}).png().toFile(path.join(pub, 'icons', 'maskable-512.png'));

fs.writeFileSync(path.join(pub, 'manifest.webmanifest'), JSON.stringify({
  name: app.web.name, short_name: app.web.shortName, description: 'Leer in 28 dagen sneller lezen, met behoud van begrip.',
  lang: 'nl', start_url: '/', scope: '/', display: 'standalone', orientation: 'any',
  background_color: BG, theme_color: ACCENT,
  share_target: {action: '/', method: 'GET', enctype: 'application/x-www-form-urlencoded', params: {title: 'share-title', text: 'share-text', url: 'share-url'}},
  shortcuts: [{name: 'Les van vandaag', short_name: 'Les', url: '/?actie=les', icons: [{src: '/icons/icon-192.png', sizes: '192x192'}]}],
  icons: [
    {src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png'},
    {src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png'},
    {src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable'},
  ],
}, null, 2) + '\n');

fs.writeFileSync(path.join(pub, 'index.html'), `<!DOCTYPE html>
<html lang="%LANG_ISO_CODE%">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>%WEB_TITLE%</title>
    <meta name="description" content="Leer in 28 dagen sneller lezen, met behoud van begrip. Zonder account; alles blijft op je apparaat." />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Snellezer" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <style id="expo-reset">
      html, body { height: 100%; background: ${BG}; }
      body { overflow: hidden; margin: 0; }
      #root { display: flex; height: 100%; flex: 1; }
    </style>
  </head>
  <body>
    <noscript>Snellezer heeft JavaScript nodig. Zet JavaScript aan om verder te gaan.</noscript>
    <div id="root"></div>
    <script src="/register-sw.js" defer></script>
  </body>
</html>
`);

fs.writeFileSync(path.join(pub, 'register-sw.js'), `if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => { navigator.serviceWorker.register('/service-worker.js').catch(() => {}); });
}
`);

// Service worker: pagina's eerst via het netwerk (zodat een nieuwe versie direct binnenkomt),
// gehashte bestanden uit de cache. Zo werkt de app offline nadat je hem één keer hebt geopend.
fs.writeFileSync(path.join(pub, 'service-worker.js'), `const CACHE = 'snellezer-${app.version}';
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['/', '/manifest.webmanifest', '/privacy.html'])).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put('/', copy)); return response; }).catch(() => caches.match(request).then(hit => hit || caches.match('/'))));
    return;
  }
  event.respondWith(caches.match(request).then(hit => hit || fetch(request).then(response => {
    if (response.ok) { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(request, copy)); }
    return response;
  })));
});
`);

fs.writeFileSync(path.join(pub, 'privacy.html'), `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Privacyverklaring · Snellezer</title>
<link rel="icon" href="/icons/icon-192.png" />
<style>
  body { margin: 0; background: ${BG}; color: ${INK}; font: 17px/1.65 system-ui, -apple-system, 'Segoe UI', sans-serif; }
  main { max-width: 720px; margin: 0 auto; padding: 48px 20px 64px; }
  a { color: ${ACCENT}; }
  .back { display: inline-block; margin-bottom: 28px; text-decoration: none; font-weight: 600; }
  h1 { font-size: 36px; line-height: 1.15; margin: 0 0 6px; letter-spacing: -.5px; }
  h2 { font-size: 21px; margin: 34px 0 6px; }
  p { color: ${MUTED}; margin: 8px 0; }
  .meta { color: ${MUTED}; font-size: 15px; }
</style>
</head>
<body>
<main>
<a class="back" href="/">← Naar Snellezer</a>
<h1>Privacyverklaring</h1>
<p class="meta">Laatst bijgewerkt: ${esc(PRIVACY_UPDATED)} · Contact: <a href="mailto:${PRIVACY_CONTACT}">${PRIVACY_CONTACT}</a></p>
${PRIVACY_SECTIONS.map(s => `<h2>${esc(s.title)}</h2>\n${s.body.map(p => `<p>${esc(p)}</p>`).join('\n')}`).join('\n')}
</main>
</body>
</html>
`);
console.log('public/ bijgewerkt.');
