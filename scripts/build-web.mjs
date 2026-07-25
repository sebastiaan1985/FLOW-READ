import { constants } from 'node:fs';
import { copyFile, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = resolve(root, 'dist');
const bestanden = [
  'index.html',
  'login.html',
  'privacy.html',
  'account-verwijderen.html',
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

async function kopieerMap(bron, doel) {
  await mkdir(doel, { recursive:true });
  const items = await readdir(bron, { withFileTypes:true });
  await Promise.all(items.map(async item => {
    const van = resolve(bron, item.name);
    const naar = resolve(doel, item.name);
    if (item.isDirectory()) return kopieerMap(van, naar);
    if (!item.isFile()) throw new Error(`Niet-ondersteund webasset: ${van}`);
    await copyFile(van, naar, constants.COPYFILE_FICLONE);
  }));
}

await wachtOpBuildLock();
try {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await Promise.all(bestanden.map(bestand =>
    copyFile(resolve(root, bestand), resolve(dist, bestand), constants.COPYFILE_FICLONE)
  ));
  await Promise.all(mappen.map(map => kopieerMap(resolve(root, map), resolve(dist, map))));
  await writeFile(resolve(dist, '.nojekyll'), '');
} finally {
  await rm(lock, { recursive: true, force: true });
}

console.log(`Webbuild klaar: ${bestanden.length} bestanden en ${mappen.length} mappen naar dist/.`);
