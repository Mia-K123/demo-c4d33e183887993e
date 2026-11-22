/* 快取手勢模型與圖像追蹤資源，讓第二次開啟不必再下載 */
const MP_CACHE = 'gesture-demo-mp-v2';
const TRACK_CACHE = 'gesture-demo-track-v2';
const MP_HINT = /vision_wasm_internal\.(js|wasm)$|hand_landmarker\.task$/;
const TRACK_HINT = /\/track\/(track-mode\.bundle\.js|targets\.mind|card\.png|card\.html)$|\/models\/(server\.glb|parts\.json)$/;

self.addEventListener('install', (e) => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) =>
      (k.startsWith('gesture-demo-mp-') && k !== MP_CACHE) ||
      (k.startsWith('gesture-demo-track-') && k !== TRACK_CACHE)
    ).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch { return; }
  if (url.origin !== self.location.origin) return;
  if (url.pathname.includes('/assembly/')) return; // 舊組裝子路徑自行載入
  let cacheName = null;
  if (MP_HINT.test(url.pathname)) cacheName = MP_CACHE;
  else if (TRACK_HINT.test(url.pathname)) cacheName = TRACK_CACHE;
  if (!cacheName) return;
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const hit = await cache.match(req, { ignoreSearch: true }) || await cache.match(url.href);
    if (hit) return hit;
    const res = await fetch(req);
    if (res && res.ok) {
      try { await cache.put(req, res.clone()); } catch {}
    }
    return res;
  })());
});
