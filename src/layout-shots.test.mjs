import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import pkg from '/usr/local/lib/pnpm/5/.pnpm/playwright-core@1.59.1/node_modules/playwright-core/index.js';
const { webkit } = pkg;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8798;
const OUT = path.join(ROOT, 'debug-shots', 'layout');
fs.mkdirSync(OUT, { recursive: true });

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

const VIEWS = [
  { name: 'iphone', w: 390, h: 844, mobile: true, ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' },
  { name: 'ipad-portrait', w: 820, h: 1180, mobile: true, ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15' },
  { name: 'ipad-landscape', w: 1180, h: 820, mobile: true, ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15' },
];

const server = await serve();
const base = `http://127.0.0.1:${PORT}/`;
let failed = 0;
const ok = (n, c, extra) => { if (c) console.log('  PASS', n); else { failed++; console.log('  FAIL', n, extra ?? ''); } };

async function audit(page, tag) {
  return page.evaluate((tag) => {
    const vw = innerWidth, vh = innerHeight;
    const issues = [];
    const heights = {};
    const btns = [...document.querySelectorAll('button, a.btn, a.iconbtn, .btn, .iconbtn, #trackActions a, #trackActions button, #trackPrev, #trackNext, #trackRetry, #trackStart, #trackSimIntro')];
    for (const el of btns) {
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) continue;
      if (el.closest('#stepList, #intro.hide, #help:not(.show), [hidden]')) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      const id = el.id || el.className || el.textContent.slice(0, 12);
      heights[id] = Math.round(r.height);
      if (r.right > vw + 1 || r.bottom > vh + 1 || r.left < -1 || r.top < -1) issues.push('clipped:' + id);
      if (el.scrollWidth > el.clientWidth + 2) issues.push('wrap/overflow:' + id);
      const h = Math.round(r.height);
      const isIcon = el.classList.contains('iconbtn') || el.id === 'trackPrev' || el.id === 'trackNext' || el.id === 'btnHelp';
      if (!isIcon && el.classList.contains('btn') && !(h === 36 || h === 44)) issues.push('odd-height:' + id + '=' + h);
    }
    return { tag, vw, vh, mode: document.body.className, issues, heights, isiPad: !!__demo?.isIPadOS, isTouch: !!__demo?.isTouch, isIOS: !!__demo?.isIOS };
  }, tag);
}

try {
  for (const v of VIEWS) {
    const browser = await webkit.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: v.w, height: v.h },
      deviceScaleFactor: v.name === 'iphone' ? 3 : 2,
      isMobile: v.mobile,
      hasTouch: true,
      userAgent: v.ua,
    });
    const page = await context.newPage();
    // spoof iPad touch points for desktop-UA iPad views
    if (v.name.startsWith('ipad')) {
      await page.addInitScript(() => {
        try { Object.defineProperty(navigator, 'maxTouchPoints', { get: () => 5 }); } catch {}
        try { Object.defineProperty(navigator, 'platform', { get: () => 'MacIntel' }); } catch {}
      });
    }
    await page.goto(base + '?auto=touch', { waitUntil: 'load', timeout: 60000 });
    await page.waitForFunction(() => window.__demo?.modelReady, { timeout: 90000 });
    await page.evaluate(() => document.querySelector('#intro')?.classList.add('hide'));
    await page.waitForTimeout(400);

    for (const mode of ['demo', 'assembly', 'track']) {
      await page.evaluate((m) => window.__demo.setAppMode(m), mode);
      await page.waitForFunction((m) => window.__demo.appMode === m, mode, { timeout: 20000 });
      await page.waitForTimeout(mode === 'track' ? 800 : 400);
      const shot = path.join(OUT, `${v.name}-${mode}.png`);
      await page.screenshot({ path: shot, fullPage: false });
      const info = await audit(page, `${v.name}/${mode}`);
      console.log('SHOT', shot);
      console.log(info);
      ok(`${v.name} ${mode} no clip/wrap`, info.issues.filter((x) => x.startsWith('clipped:') || x.startsWith('wrap/')).length === 0, info);
      if (v.name.startsWith('ipad') && mode === 'demo') {
        ok(`${v.name} uses iPad/touch path`, info.isiPad && info.isTouch && info.isIOS, info);
      }
    }
    await browser.close();
  }
} finally {
  server.close();
}
if (failed) { console.log('FAILED', failed); process.exit(1); }
console.log('LAYOUT SHOTS PASSED');
