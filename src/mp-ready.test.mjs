import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import pkg from '/usr/local/lib/pnpm/5/.pnpm/playwright-core@1.59.1/node_modules/playwright-core/index.js';
const { webkit, chromium } = pkg;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8797;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.glb': 'model/gltf-binary', '.hdr': 'application/octet-stream',
  '.wasm': 'application/wasm', '.task': 'application/octet-stream',
  '.mind': 'application/octet-stream', '.mp3': 'audio/mpeg', '.png': 'image/png',
};

function serve() {
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://127.0.0.1');
    let rel = decodeURIComponent(u.pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.normalize(path.join(ROOT, rel));
    if (!file.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end('not found'); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(data);
    });
  });
  return new Promise((r) => server.listen(PORT, '127.0.0.1', () => r(server)));
}

const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const IPAD_DESKTOP = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15';

let failed = 0;
const ok = (n, c, extra) => { if (c) console.log('  PASS', n); else { failed++; console.log('  FAIL', n, extra ?? ''); } };

const server = await serve();
const base = `http://127.0.0.1:${PORT}/`;

async function run(label, type, launchOpts, ua, ipadSpoof, grantCam) {
  const browser = await type.launch({ headless: true, ...launchOpts });
  const context = await browser.newContext({
    viewport: { width: ipadSpoof ? 820 : 390, height: ipadSpoof ? 1180 : 844 },
    deviceScaleFactor: ipadSpoof ? 2 : 3,
    isMobile: true,
    hasTouch: true,
    userAgent: ua,
  });
  if (grantCam) {
    try { await context.grantPermissions(['camera'], { origin: `http://127.0.0.1:${PORT}` }); } catch {}
  }
  if (ipadSpoof) {
    await context.addInitScript(() => {
      try { Object.defineProperty(navigator, 'maxTouchPoints', { get: () => 5 }); } catch {}
      try { Object.defineProperty(navigator, 'platform', { get: () => 'MacIntel' }); } catch {}
    });
  }
  const page = await context.newPage();
  const pageErr = [];
  page.on('pageerror', (e) => pageErr.push(String(e)));
  await page.goto(base + '?debug=1', { waitUntil: 'load', timeout: 60000 });
  await page.waitForFunction(() => window.__demo && (window.__demo.modelReady || document.querySelector('#startCam')), { timeout: 90000 });
  const before = await page.evaluate(() => ({
    wasm: __demo.wasmBase?.(),
    isiPad: !!__demo.isIPadOS,
    isIOS: !!__demo.isIOS,
    isTouch: !!__demo.isTouch,
  }));
  ok(`${label} wasmBase has no query string`, before.wasm && !before.wasm.includes('?') && /\/libs\/mediapipe\/wasm$/.test(before.wasm), before);
  if (ipadSpoof) ok(`${label} detected as iPad`, before.isiPad && before.isIOS && before.isTouch, before);
  else ok(`${label} detected as iPhone (not iPad)`, before.isIOS && !before.isiPad, before);

  // Start gestures from the 展示 intro button. Camera may fail in WebKit; MediaPipe must still become ready.
  const start = await page.$('#startCam');
  if (start) await start.click();
  else await page.evaluate(() => window.__demo.initLandmarker({ overlay: true }).catch((e) => e));
  const result = await page.waitForFunction(() => {
    const d = window.__demo;
    if (d.mpReady && d.delegate) return { ok: true, ready: true, del: d.delegate, err: d.mpError || '', toast: document.querySelector('#toast')?.textContent || '' };
    if (d.mpError) return { ok: false, ready: false, del: d.delegate || '', err: d.mpError, toast: document.querySelector('#toast')?.textContent || '' };
    return false;
  }, { timeout: 120000 }).then((h) => h.jsonValue()).catch(async () => page.evaluate(() => {
    const d = window.__demo;
    return { ok: false, ready: !!d.mpReady, del: d.delegate || '', err: d.mpError || 'timeout', toast: document.querySelector('#toast')?.textContent || '', skip: d.detSkip };
  }));
  console.log('====', label, '====');
  console.log(before, result, pageErr.slice(0, 3));
  ok(`${label} MediaPipe ready`, !!result.ready && !!result.del, result);
  ok(`${label} error text is not undefined`, !/undefined/i.test(result.err || '') && !/undefined/i.test(result.toast || ''), result);
  if (ipadSpoof && result.ready) ok(`${label} prefers CPU`, result.del === 'CPU', result);
  if (!ipadSpoof && result.ready) ok(`${label} tries GPU first (GPU or CPU fallback)`, result.del === 'GPU' || result.del === 'CPU', result);
  await browser.close();
  return result;
}

try {
  const wkOpts = {};
  await run('webkit-iphone', webkit, wkOpts, IPHONE, false, false);
  await run('webkit-ipad', webkit, wkOpts, IPAD_DESKTOP, true, false);
  try {
    await run('chromium-iphone', chromium, {
      executablePath: '/home/box/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',
      args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
    }, IPHONE, false, true);
    await run('chromium-ipad', chromium, {
      executablePath: '/home/box/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',
      args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
    }, IPAD_DESKTOP, true, true);
  } catch (e) {
    console.warn('chromium optional failed', e.message);
  }
} finally {
  server.close();
}
if (failed) { console.log('FAILED', failed); process.exit(1); }
console.log('MP READY TEST PASSED');
