import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const bron = readFileSync(resolve(root, 'supabase-sync.js'), 'utf8');

class MemoryStorage {
  constructor() {
    this.data = new Map();
  }

  get length() {
    return this.data.size;
  }

  key(index) {
    return [...this.data.keys()][index] ?? null;
  }

  getItem(key) {
    return this.data.has(String(key)) ? this.data.get(String(key)) : null;
  }

  setItem(key, value) {
    this.data.set(String(key), String(value));
  }

  removeItem(key) {
    this.data.delete(String(key));
  }

  clear() {
    this.data.clear();
  }
}

const mock = {
  data: null,
  selectError: null,
  upsertError: null,
  upserts: [],
  consoleErrors: [],
};

const client = {
  auth: {
    getSession: async () => ({ data: { session:null } }),
    signOut: async () => ({ error:null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
  },
  functions: {
    invoke: async () => ({ data:null, error:null }),
  },
  from() {
    return {
      select() {
        return {
          eq() {
            return {
              maybeSingle: async () => ({ data:mock.data, error:mock.selectError }),
            };
          },
        };
      },
      upsert: async payload => {
        mock.upserts.push(structuredClone(payload));
        return { error:mock.upsertError };
      },
    };
  },
};

const localStorage = new MemoryStorage();
const sessionStorage = new MemoryStorage();
const navigator = {
  userAgent: 'release-check',
  platform: 'Node',
  maxTouchPoints: 0,
};
const window = {
  addEventListener() {},
  location: {
    pathname: '/',
    href: 'http://localhost/',
    replace() {},
  },
  matchMedia: () => ({ matches:false }),
  navigator,
};
const document = {
  addEventListener() {},
  removeEventListener() {},
  getElementById: () => null,
  querySelector: () => null,
  body: { appendChild() {} },
  visibilityState: 'visible',
};
const stilleConsole = {
  log() {},
  warn() {},
  error: (...args) => mock.consoleErrors.push(args.map(String).join(' ')),
};

const context = vm.createContext({
  AbortSignal,
  Date,
  JSON,
  Math,
  Object,
  Set,
  Map,
  String,
  Number,
  Boolean,
  Array,
  Promise,
  RegExp,
  URL,
  console: stilleConsole,
  document,
  localStorage,
  navigator,
  sessionStorage,
  setTimeout: () => 1,
  clearTimeout() {},
  structuredClone,
  supabase: { createClient: () => client },
  window,
});

vm.runInContext(bron, context, { filename:'supabase-sync.js' });

function inSyncContext(code) {
  return vm.runInContext(`(async () => { ${code} })()`, context);
}

function cloudRij(stats) {
  return {
    stats,
    bibliotheek: null,
    begintest_baseline: null,
    av_profielen: null,
    dyx_settings: null,
    kids_modus: false,
    bt_laatste_passage: null,
    tekst_actief: null,
    av_actief: null,
    snellees_gebruiker: null,
    snellees_niveau: null,
    snellees_achievements: null,
    snellees_traindagen: null,
    daily_challenge: null,
    extra: {},
    updated_at: '2026-07-30T10:00:00.000Z',
  };
}

const defaultsZijnVoortgang = await inSyncContext(`
  return _syncSnapshotHeeftVoortgang({
    snellees_stats: JSON.stringify({ sessies:[], totaalWoorden:0, bestWpm:0 }),
    snellees_niveau: JSON.stringify({ niveau:1, sessies:[] }),
    dyslexie_leerweg: JSON.stringify({ lessen:{}, herhaal:{} }),
  });
`);
assert.equal(defaultsZijnVoortgang, false, 'Lege standaarddata mag niet als gastvoortgang tellen.');

mock.data = cloudRij({
  sessies: [{ datum:'2026-07-29', type:'chunk', wpm:220, begrip:100 }],
  bestWpm: 220,
  totaalWoorden: 80,
});
const gastMerge = await inSyncContext(`
  _syncWisLokaleAccountdata();
  _storageSetOrig('snellees_stats', JSON.stringify({
    sessies:[{ datum:'2026-07-30', type:'rsvp', wpm:260, begrip:67 }],
    bestWpm:260,
    totaalWoorden:100,
  }));
  _huidigeGebruiker = { id:'account-a' };
  const syncNodig = await _laadVanCloud();
  const stats = JSON.parse(_storageGetOrig('snellees_stats'));
  return {
    syncNodig,
    stats,
    owner:_storageGetOrig(SYNC_OWNER_KEY),
    dirty:_storageGetOrig(SYNC_DIRTY_KEY),
  };
`);
assert.equal(gastMerge.syncNodig, true, 'Samengevoegde gastdata moet terug naar de cloud.');
assert.equal(gastMerge.stats.sessies.length, 2, 'Gast- en cloudsessies moeten beide behouden blijven.');
assert.equal(gastMerge.stats.bestWpm, 260, 'Het beste betrouwbare gastrecord mag niet worden verlaagd.');
assert.equal(gastMerge.owner, 'account-a', 'Samengevoegde data moet aan het actieve account worden gekoppeld.');
assert.equal(gastMerge.dirty, '1', 'Samengevoegde data moet als nog te synchroniseren worden gemarkeerd.');

mock.data = cloudRij({
  sessies: [{ datum:'2026-07-30', type:'rsvp', wpm:240, begrip:67 }],
  bestWpm: 240,
  totaalWoorden: 90,
});
const accountWissel = await inSyncContext(`
  _syncWisLokaleAccountdata();
  _storageSetOrig(SYNC_OWNER_KEY, 'account-a');
  _storageSetOrig('snellees_stats', JSON.stringify({
    sessies:[{ datum:'2026-07-28', type:'rsvp', wpm:999, begrip:100 }],
    bestWpm:999,
  }));
  _huidigeGebruiker = { id:'account-b' };
  const syncNodig = await _laadVanCloud();
  return {
    syncNodig,
    stats:JSON.parse(_storageGetOrig('snellees_stats')),
    owner:_storageGetOrig(SYNC_OWNER_KEY),
    dirty:_storageGetOrig(SYNC_DIRTY_KEY),
  };
`);
assert.equal(accountWissel.syncNodig, false, 'Data van een vorig account mag niet naar het nieuwe account worden gesynchroniseerd.');
assert.equal(accountWissel.stats.sessies.length, 1, 'Een nieuw account mag geen sessies van het vorige account zien.');
assert.equal(accountWissel.stats.bestWpm, 240, 'Alleen het cloudrecord van het nieuwe account mag zichtbaar zijn.');
assert.equal(accountWissel.owner, 'account-b', 'Lokale data moet na wisselen aan het nieuwe account gekoppeld zijn.');
assert.equal(accountWissel.dirty, '0', 'Zuiver ingeladen clouddata hoeft niet opnieuw opgeslagen te worden.');

mock.data = null;
const nieuwAccount = await inSyncContext(`
  _syncWisLokaleAccountdata();
  _storageSetOrig('leerweg_gedaan', JSON.stringify(['w0d0']));
  _huidigeGebruiker = { id:'account-nieuw' };
  const syncNodig = await _laadVanCloud();
  return {
    syncNodig,
    gedaan:JSON.parse(_storageGetOrig('leerweg_gedaan')),
    owner:_storageGetOrig(SYNC_OWNER_KEY),
  };
`);
assert.equal(nieuwAccount.syncNodig, true, 'Voortgang van een gast moet naar een nieuw leeg account worden geüpload.');
assert.deepEqual(nieuwAccount.gedaan, ['w0d0'], 'Gastvoortgang mag bij een nieuw account niet verdwijnen.');
assert.equal(nieuwAccount.owner, 'account-nieuw', 'Een nieuw account moet eigenaar van de overgenomen gastdata worden.');

mock.upsertError = null;
mock.upserts.length = 0;
const succesvolleSync = await inSyncContext(`
  _storageSetOrig(SYNC_DIRTY_KEY, '1');
  _storageSetOrig('snellees_profiel_modus', 'adult');
  _storageSetOrig('wpm_doel', '350');
  _huidigeGebruiker = { id:'account-nieuw' };
  const gelukt = await _syncNuNaarCloud();
  return {
    gelukt,
    dirty:_storageGetOrig(SYNC_DIRTY_KEY),
    owner:_storageGetOrig(SYNC_OWNER_KEY),
  };
`);
assert.equal(succesvolleSync.gelukt, true, 'Een foutloze upsert moet als geslaagd terugkomen.');
assert.equal(succesvolleSync.dirty, '0', 'Na een geslaagde upsert moet de lokale wijzigingsvlag worden gewist.');
assert.equal(succesvolleSync.owner, 'account-nieuw', 'Een geslaagde upsert moet de accounteigenaar bevestigen.');
assert.equal(mock.upserts.length, 1, 'Een normale synchronisatie hoort precies één upsert te doen.');
assert.equal(mock.upserts[0].extra.snellees_profiel_modus, 'adult', 'Een tekstuele profielmodus moet ongewijzigd synchroniseren.');
assert.equal(mock.upserts[0].extra.wpm_doel, '350', 'Het persoonlijke WPM-doel moet synchroniseren.');

mock.upsertError = { message:'tijdelijke netwerkfout' };
const mislukteSync = await inSyncContext(`
  _storageSetOrig(SYNC_DIRTY_KEY, '1');
  const gelukt = await _syncNuNaarCloud();
  return { gelukt, dirty:_storageGetOrig(SYNC_DIRTY_KEY) };
`);
assert.equal(mislukteSync.gelukt, false, 'Een mislukte upsert mag niet als geslaagd worden gemarkeerd.');
assert.equal(mislukteSync.dirty, '1', 'Na een mislukte upsert moet de lokale wijzigingsvlag blijven staan.');
assert.ok(mock.consoleErrors.some(melding => melding.includes('Opslaan in de cloud mislukt')), 'Een syncfout moet diagnostisch zichtbaar zijn.');

const gewist = await inSyncContext(`
  _storageSetOrig('av_profiel', JSON.stringify({ naam:'Oud profiel' }));
  _syncWisLokaleAccountdata();
  return SYNC_KEYS.every(key => _storageGetOrig(key) === null) &&
    _storageGetOrig('av_profiel') === null &&
    _storageGetOrig(SYNC_OWNER_KEY) === null &&
    _storageGetOrig(SYNC_DIRTY_KEY) === null;
`);
assert.equal(gewist, true, 'Uitloggen moet alle gesynchroniseerde lokale accountdata en metadata wissen.');

console.log('Cloudsync-regressiecheck geslaagd: gastmerge, accountisolatie, foutbehoud en uitlogwissen.');
