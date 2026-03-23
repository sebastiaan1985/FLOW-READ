/**
 * service-worker.js
 * SnelLees Trainer — PWA offline support
 *
 * Strategie:
 * - App shell (HTML, CSS, JS) → Cache First
 * - Externe CDN-scripts → Stale-While-Revalidate
 * - Supabase API-calls → Network First (gebruikersdata altijd vers)
 */

const CACHE_NAAM    = 'snellees-v1';
const CACHE_STATISCH = [
  '/',
  '/index.html',
  '/login.html',
  '/supabase-sync.js',
];

const CACHE_CDN = [
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Comic+Neue:wght@400;700&display=swap',
];

// ── INSTALL: cache app shell ─────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAAM).then(cache => {
      return cache.addAll(CACHE_STATISCH).catch(err => {
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

  // CDN-scripts: Stale-While-Revalidate
  if (CACHE_CDN.some(u => event.request.url.startsWith(u.split('/dist')[0]))) {
    event.respondWith(
      caches.open(CACHE_NAAM).then(cache =>
        cache.match(event.request).then(cached => {
          const netwerk = fetch(event.request).then(resp => {
            cache.put(event.request, resp.clone());
            return resp;
          }).catch(() => cached);
          return cached || netwerk;
        })
      )
    );
    return;
  }

  // App shell: Cache First met netwerk-fallback
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(resp => {
          // Cache HTML-pagina's
          if (resp.ok && (url.pathname.endsWith('.html') || url.pathname === '/')) {
            caches.open(CACHE_NAAM).then(cache => cache.put(event.request, resp.clone()));
          }
          return resp;
        }).catch(() => {
          // Offline fallback: geef index.html terug voor navigatie
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
    );
  }
});
