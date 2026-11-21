const puppeteer = require('puppeteer-core');
const OUT = '/workspace/gesture-demo/';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new',
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
      '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
  const ext = [], errs = [];
  async function page(url, vp) {
    const p = await b.newPage(); await p.setViewport(vp);
    await p.setRequestInterception(true);
    p.on('request', r => { const u = r.url(); if (/^https?:\/\/(localhost|127)/.test(u) || u.startsWith('data:') || u.startsWith('blob:')) r.continue(); else { ext.push(u); r.abort(); } });
    p.on('console', m => { if (/error|warn/i.test(m.type())) { errs.push(m.type() + ': ' + m.text().slice(0, 300)); } });
    p.on('pageerror', e => errs.push('pageerror: ' + e.message));
    p.on('requestfailed', r => errs.push('reqfailed: ' + r.url()));
    p.on('response', r => { if (r.status() >= 400) errs.push(r.status() + ' ' + r.url()); });
    await p.goto(url, { waitUntil: 'load' }); return p;
  }
  const which = process.argv[2] || 'all';
  // 1) camera + MediaPipe on desktop
  if (which === 'all' || which === 'cam') {
    const p = await page('http://localhost:8765/?auto=cam', { width: 1280, height: 800 });
    await p.waitForFunction(() => window.__demo?.modelReady && window.__demo?.mpReady && window.__demo?.camOn, { timeout: 90000 });
    await sleep(2500);
    console.log('CAM', JSON.stringify(await p.evaluate(() => ({ d: __demo.delegate, g: __demo.gesture, cam: __demo.camOn, vw: document.querySelector('#video').videoWidth }))));
    await p.screenshot({ path: OUT + 'build/cam-test.png' }); await p.close();
  }
  // 2) desktop previews (touch/no-camera mode)
  if (which === 'all' || which === 'desk') {
    const p = await page('http://localhost:8765/?auto=touch', { width: 1280, height: 800 });
    await p.waitForFunction(() => window.__demo?.modelReady, { timeout: 60000 }); await sleep(1500);
    await p.screenshot({ path: OUT + 'preview-collapsed.png' });
    await p.click('#btnToggle'); await sleep(3500);
    await p.screenshot({ path: OUT + 'preview-exploded.png' });
    await p.keyboard.press('c'); await sleep(200); await p.close();
  }
  // 3) mobile, served under a sub-path
  if (which === 'all' || which === 'mobile') {
    const p = await page('http://localhost:8766/gesture-demo/?auto=touch', { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await p.waitForFunction(() => window.__demo?.modelReady, { timeout: 60000 }); await sleep(1000);
    await p.screenshot({ path: OUT + 'build/mobile-collapsed.png' });
    await p.tap('#btnToggle'); await sleep(3500);
    await p.screenshot({ path: OUT + 'preview-mobile.png' }); await p.close();
  }
  console.log('ERRORS', JSON.stringify(errs, null, 1)); console.log('EXTERNAL', JSON.stringify(ext));
  await b.close();
})();
