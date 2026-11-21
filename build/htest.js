const puppeteer = require('puppeteer-core');
(async () => {
  const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader',
    '--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream','--use-file-for-fake-video-capture=/workspace/gesture-demo/build/hands/seq.y4m'] });
  const p = await b.newPage(); await p.setViewport({ width: 1280, height: 800 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://localhost:8765/?auto=cam');
  await p.waitForFunction(() => window.__demo?.mpReady && window.__demo?.camOn, { timeout: 90000 });
  const log = []; let shot = { open: false, fist: false };
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 300));
    const s = await p.evaluate(() => ({ g: __demo.gesture, t: __demo.target, e: +__demo.explode.toFixed(2) }));
    log.push(`${s.g}/${s.t}/${s.e}`);
    if (s.g === 'open' && s.e > 0.8 && !shot.open) { shot.open = true; await p.screenshot({ path: '/workspace/gesture-demo/build/hand-open.png' }); }
    if (s.g === 'fist' && !shot.fist) { shot.fist = true; await p.screenshot({ path: '/workspace/gesture-demo/build/hand-fist.png' }); }
  }
  console.log(log.join(' ')); console.log('errs', errs); await b.close();
})();
