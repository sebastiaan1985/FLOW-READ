/**
 * service-worker.js
 * SnelLees Trainer — PWA offline support (v4)
 *
 * Alle assets zijn nu lokaal gehost (geen CDN meer):
 * - HTML-pagina's → Network First (altijd vers, cache als offline-fallback)
 * - JS/CSS/fonts/iconen app shell → Cache First (snel laden, volledig offline)
 * - Supabase API-calls → Network Only (gebruikersdata altijd vers)
 */

const CACHE_NAAM = 'snellees-v5';

const CACHE_STATISCH = [
  '/',
  '/index.html',
  '/login.html',
  '/reset-wachtwoord.html',
  '/supabase-sync.js',
  '/teksten.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-32.png',
  '/vendor/chart.umd.min.js',
  '/vendor/supabase.min.js',
  '/vendor/fonts.css',
  '/vendor/fonts/4UaErEJDsxBrF37olUeD_xHM8pxULilENlY.woff2',
  '/vendor/fonts/4UaHrEJDsxBrF37olUeD96rp57F2IwM.woff2',
  '/vendor/fonts/OpenDyslexic-Bold.otf',
  '/vendor/fonts/OpenDyslexic-Regular.otf',
  '/vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7W0Q5n-wU.woff2',
  '/vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2',
  '/vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7W0Q5n-wU.woff2',
  '/vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7W0Q5n-wU.woff2',
  '/vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7W0Q5n-wU.woff2',
  '/vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7W0Q5n-wU.woff2',
  '/vendor/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7W0Q5n-wU.woff2',
  '/vendor/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx3cwgknk-6nFg.woff2',
  '/vendor/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwgknk-6nFg.woff2',
  '/vendor/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwgknk-4.woff2',
  '/vendor/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxPcwgknk-6nFg.woff2',
  '/vendor/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxTcwgknk-6nFg.woff2',
  '/vendor/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx_cwgknk-6nFg.woff2',
];

// ── INSTALL: pre-cache app shell ─────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAAM).then(cache => {
      // cache:'reload' zorgt dat altijd de nieuwste versie van de server wordt opgehaald
      const verzoeken = CACHE_STATISCH.map(url => new Request(url, { cache: 'reload' }));
      return cache.addAll(verzoeken).catch(err => {
        console.warn('[SW] Niet alle bestanden gecached:', err);
      });
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE: verwijder oude caches ─────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAAM).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── FETCH: request interceptie ──────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Supabase API-calls: altijd netwerk, geen cache
  if (url.hostname.includes('supabase.co')) {
    event.respondWith(fetch(event.request).catch(() =>
      new Response(JSON.stringify({ error: 'offline' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    ));
    return;
  }

  // HTML-pagina's: Network First → altijd vers, cache als offline-fallback
  if (event.request.mode === 'navigate' ||
      (url.pathname.endsWith('.html') || url.pathname === '/')) {
    event.respondWith(
      fetch(event.request).then(resp => {
        if (resp.ok) {
          caches.open(CACHE_NAAM).then(cache => cache.put(event.request, resp.clone()));
        }
        return resp;
      }).catch(() => caches.match(event.request).then(cached => cached || caches.match('/index.html')))
    );
    return;
  }

  // Overige GET-bestanden (JS, CSS, fonts, iconen): Cache First met netwerk-fallback
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(resp => {
          if (resp.ok) {
            caches.open(CACHE_NAAM).then(cache => cache.put(event.request, resp.clone()));
          }
          return resp;
        });
      })
    );
  }
});
