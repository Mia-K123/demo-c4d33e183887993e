import { createHash } from 'crypto';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, readdirSync, unlinkSync, copyFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const srcDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(srcDir, '..');

function sha8(...bufs) {
  const h = createHash('sha256');
  for (const b of bufs) h.update(b);
  return h.digest('hex').slice(0, 8);
}

let index = readFileSync(resolve(root, 'index.html'), 'utf8');
const cssSrc = readFileSync(resolve(root, 'styles.css'));
// provisional ver from sources
const srcJs = readFileSync(resolve(srcDir, 'app.js'));
const menuJs = readFileSync(resolve(srcDir, 'ar-menu.mjs'));
let trackBuf = Buffer.alloc(0);
try { trackBuf = readFileSync(resolve(root, 'track/track-mode.bundle.js')); } catch {}
const ver = sha8(srcJs, cssSrc, menuJs, trackBuf, 'asset-ver-v2');

execSync(
  `npx esbuild app.js --bundle --format=esm --minify --define:__ASSET_VER__=${JSON.stringify(JSON.stringify(ver))} --outfile=${resolve(root, 'app.js')}`,
  { cwd: srcDir, stdio: 'inherit' },
);

const js = readFileSync(resolve(root, 'app.js'));
const appName = `app.${ver}.js`;
const cssName = `styles.${ver}.css`;
writeFileSync(resolve(root, appName), js);
writeFileSync(resolve(root, cssName), cssSrc);

index = index.replace(/href="\.\/styles(?:\.[a-f0-9]{8})?\.css"/, `href="./${cssName}"`);
index = index.replace(/src="\.\/app(?:\.[a-f0-9]{8})?\.js"/, `src="./${appName}"`);
if (!index.includes(`href="./${cssName}"`) || !index.includes(`src="./${appName}"`)) {
  throw new Error('failed to stamp index.html asset URLs');
}
writeFileSync(resolve(root, 'index.html'), index);

// drop stale versioned copies, keep unversioned app.js/styles.css
for (const f of readdirSync(root)) {
  if ((/^app\.[a-f0-9]{8}\.js$/.test(f) && f !== appName) || (/^styles\.[a-f0-9]{8}\.css$/.test(f) && f !== cssName)) {
    unlinkSync(resolve(root, f));
  }
}

writeFileSync(resolve(root, 'version.json'), JSON.stringify({ ver, app: appName, css: cssName }, null, 2) + '\n');
console.log('stamped', appName, cssName);
