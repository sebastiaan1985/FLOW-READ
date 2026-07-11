import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = resolve(root, 'dist');
const bestanden = [
  'index.html',
  'login.html',
  'privacy.html',
  'reset-wachtwoord.html',
  'manifest.json',
  'service-worker.js',
  'supabase-sync.js',
  'teksten.js',
  'coach.js',
  'ronde.js',
];
const mappen = ['assets', 'icons', 'screenshots', 'vendor'];
const lock = `${dist}.lock`;

async function wachtOpBuildLock() {
  for (let poging = 0; poging < 100; poging++) {
    try {
      await mkdir(lock);
      return;
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
  throw new Error('Build lock bleef te lang bezet.');
}

await wachtOpBuildLock();
try {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  for (const bestand of bestanden) await cp(resolve(root, bestand), resolve(dist, bestand));
  for (const map of mappen) await cp(resolve(root, map), resolve(dist, map), { recursive: true });
  await writeFile(resolve(dist, '.nojekyll'), '');
} finally {
  await rm(lock, { recursive: true, force: true });
}

console.log(`Webbuild klaar: ${bestanden.length} bestanden en ${mappen.length} mappen naar dist/.`);
