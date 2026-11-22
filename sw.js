/* 快取手勢模型與 Wasm，讓第二次開啟不必再下載 */
const CACHE = 'gesture-demo-mp-v1';
const HINT = /vision_wasm_internal\.(js|wasm)$|hand_landmarker\.task$/;

self.addEventListener('install', (e) => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('gesture-demo-mp-') && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch { return; }
  if (url.origin !== self.location.origin || !HINT.test(url.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true }) || await cache.match(url.href);
    if (hit) return hit;
    const res = await fetch(req);
    if (res && res.ok) {
      try { await cache.put(req, res.clone()); } catch {}
    }
    return res;
  })());
});
