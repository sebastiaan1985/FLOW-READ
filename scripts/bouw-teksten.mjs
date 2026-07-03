#!/usr/bin/env node
/**
 * bouw-teksten.mjs — genereert teksten.js (de centrale tekstbibliotheek)
 *
 * Bronnen:
 *  1. scripts/bron/chunk-teksten.js    (CHUNK_TEKSTEN)   → metadata+vragen uit teksten-meta.mjs
 *  2. scripts/bron/rsvp-teksten.js     (RSVP_TEKSTEN)    → metadata+vragen uit teksten-meta.mjs
 *  3. scripts/bron/lange-teksten.js    (LANGE_TEKSTEN — hebben al vragen)
 *     scripts/bron/leestest-teksten.js (LEESTEST_TEKSTEN — hebben al vragen)
 *  4. teksten-nieuw.mjs                (nieuw geschreven teksten, complete entries)
 *
 * Gebruik:  node scripts/bouw-teksten.mjs
 * Output:   teksten.js
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const { TEKST_META } = await import('./teksten-meta.mjs');
const { NIEUWE_TEKSTEN } = await import('./teksten-nieuw.mjs');

// ── Hulpfuncties ─────────────────────────────────────────────
function evalConst(code, naam) {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(code + `\n;__result = ${naam};`, ctx);
  return ctx.__result;
}

function telWoorden(tekst) {
  return tekst.split(/\s+/).filter(Boolean).length;
}

// ── 1+2: chunk & rsvp teksten laden ──────────────────────────
const BRON = join(ROOT, 'scripts', 'bron');
const chunkBron = evalConst(readFileSync(join(BRON, 'chunk-teksten.js'), 'utf8'), 'CHUNK_TEKSTEN');
const rsvpBron  = evalConst(readFileSync(join(BRON, 'rsvp-teksten.js'), 'utf8'), 'RSVP_TEKSTEN');

// ── 3: gemigreerde bibliotheken (snapshot uit index.html) ────
const langeBron    = evalConst(readFileSync(join(BRON, 'lange-teksten.js'), 'utf8'), 'LANGE_TEKSTEN');
const leestestBron = evalConst(readFileSync(join(BRON, 'leestest-teksten.js'), 'utf8'), 'LEESTEST_TEKSTEN');

// ── Samenvoegen ──────────────────────────────────────────────
const bib = [];
const gezien = new Set();
let zonderMeta = [];

for (const bron of [...chunkBron, ...rsvpBron]) {
  const titel = bron.naam.trim();
  if (gezien.has(titel.toLowerCase())) continue; // dubbele titels overslaan
  gezien.add(titel.toLowerCase());

  const meta = TEKST_META[titel];
  if (!meta) { zonderMeta.push(titel); continue; }

  bib.push({
    id: meta.id,
    titel,
    doelgroep: meta.doelgroep,
    niveau: meta.niveau,
    onderwerp: meta.onderwerp,
    collectie: 'kort',
    woorden: telWoorden(bron.tekst),
    tekst: bron.tekst,
    vragen: meta.vragen,
  });
}

for (const t of langeBron) {
  bib.push({
    id: 'lang-' + t.id,
    titel: t.titel,
    doelgroep: 'volwassen',
    niveau: t.niveau,
    onderwerp: TEKST_META[t.titel]?.onderwerp || 'wetenschap',
    collectie: 'lang',
    woorden: telWoorden(t.tekst),
    tekst: t.tekst,
    vragen: t.vragen,
  });
}

leestestBron.forEach((t, i) => {
  bib.push({
    id: 'lt-' + (i + 1),
    titel: t.titel,
    doelgroep: 'volwassen',
    niveau: 3,
    onderwerp: TEKST_META[t.titel]?.onderwerp || 'wetenschap',
    collectie: 'leestest',
    woorden: telWoorden(t.tekst),
    tekst: t.tekst,
    vragen: t.vragen,
  });
});

for (const t of NIEUWE_TEKSTEN) {
  bib.push({ ...t, collectie: t.collectie || 'kort', woorden: telWoorden(t.tekst) });
}

if (zonderMeta.length) {
  console.warn('⚠️  Teksten zonder metadata (overgeslagen):');
  zonderMeta.forEach(t => console.warn('   - ' + t));
}

// ── teksten.js schrijven ─────────────────────────────────────
const uit = `/**
 * teksten.js — SnelLees Trainer tekstbibliotheek
 *
 * GEGENEREERD door scripts/bouw-teksten.mjs — niet handmatig bewerken.
 * Nieuwe teksten toevoegen? → scripts/teksten-nieuw.mjs, daarna:
 *   node scripts/bouw-teksten.mjs
 *
 * Elke tekst: { id, titel, doelgroep, niveau, onderwerp, collectie,
 *               woorden, tekst, vragen: [{v, opties[4], correct}] }
 * doelgroep: kids6-9 | kids9-12 | teens | volwassen
 * niveau: 1 (makkelijk) t/m 5 (complex)
 * collectie: kort (RSVP/chunk/leesoefeningen) | lang (1000+ woorden) | leestest
 */

const TEKST_BIB = ${JSON.stringify(bib, null, 2)};

/** Gefilterde selectie uit de bibliotheek. Alle filters optioneel. */
function tekstenKies({ doelgroep, maxNiveau, minNiveau, onderwerp, collectie, minWoorden, maxWoorden, exclusief = [] } = {}) {
  return TEKST_BIB.filter(t =>
    (!doelgroep   || t.doelgroep === doelgroep || (Array.isArray(doelgroep) && doelgroep.includes(t.doelgroep))) &&
    (!maxNiveau   || t.niveau <= maxNiveau) &&
    (!minNiveau   || t.niveau >= minNiveau) &&
    (!onderwerp   || t.onderwerp === onderwerp) &&
    (!collectie   || t.collectie === collectie) &&
    (!minWoorden  || t.woorden >= minWoorden) &&
    (!maxWoorden  || t.woorden <= maxWoorden) &&
    !exclusief.includes(t.id)
  );
}

/** Willekeurige tekst die aan de filters voldoet (of null). */
function tekstWillekeurig(filters) {
  const opties = tekstenKies(filters);
  return opties.length ? opties[Math.floor(Math.random() * opties.length)] : null;
}

function tekstBijId(id) {
  return TEKST_BIB.find(t => t.id === id) || null;
}

/** Doelgroepen passend bij de huidige gebruiker (kids-modus of leeftijd). */
function tekstDoelgroepen() {
  try {
    const gebruiker = JSON.parse(localStorage.getItem('snellees_gebruiker') || '{}');
    if (gebruiker.doelgroep) {
      return { 'kids6-9': ['kids6-9'], 'kids9-12': ['kids6-9', 'kids9-12'],
               'teens': ['kids9-12', 'teens'], 'volwassen': ['teens', 'volwassen'] }[gebruiker.doelgroep]
             || ['teens', 'volwassen'];
    }
    if (localStorage.getItem('kids_modus') === '1') return ['kids6-9', 'kids9-12'];
  } catch (e) { /* localStorage niet beschikbaar */ }
  return ['teens', 'volwassen'];
}

// ── Compatibiliteit met bestaande schermen ───────────────────
const LANGE_TEKSTEN = TEKST_BIB.filter(t => t.collectie === 'lang')
  .map(t => ({ id: t.id.replace(/^lang-/, ''), niveau: t.niveau, titel: t.titel, tekst: t.tekst, vragen: t.vragen }));

const LEESTEST_TEKSTEN = TEKST_BIB.filter(t => t.collectie === 'leestest')
  .map(t => ({ titel: t.titel, tekst: t.tekst, vragen: t.vragen }));
`;

writeFileSync(join(ROOT, 'teksten.js'), uit);

const perGroep = {};
bib.forEach(t => { perGroep[t.doelgroep] = (perGroep[t.doelgroep] || 0) + 1; });
console.log(`✓ teksten.js geschreven: ${bib.length} teksten (${(uit.length / 1024).toFixed(0)} kB)`);
console.log('  Per doelgroep:', JSON.stringify(perGroep));
if (zonderMeta.length) process.exitCode = 1;
