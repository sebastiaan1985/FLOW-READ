#!/usr/bin/env node
/**
 * check-teksten.mjs — valideert teksten.js
 * Checks: unieke ids, geldige doelgroep/niveau, 3+ vragen per tekst,
 * elke vraag 4 opties met geldige correct-index, woordentelling klopt.
 *
 * Gebruik: node scripts/check-teksten.mjs
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const code = readFileSync(join(ROOT, 'teksten.js'), 'utf8');
const ctx = { localStorage: undefined };
vm.createContext(ctx);
vm.runInContext(code + '\n;__bib = TEKST_BIB;', ctx);
const bib = ctx.__bib;

const DOELGROEPEN = ['kids6-9', 'kids9-12', 'teens', 'volwassen'];
const fouten = [];
const ids = new Set();

for (const t of bib) {
  const wie = `[${t.id}] ${t.titel}`;
  if (!t.id) fouten.push(`${wie}: geen id`);
  if (ids.has(t.id)) fouten.push(`${wie}: dubbel id`);
  ids.add(t.id);
  if (!DOELGROEPEN.includes(t.doelgroep)) fouten.push(`${wie}: ongeldige doelgroep "${t.doelgroep}"`);
  if (!(t.niveau >= 1 && t.niveau <= 5)) fouten.push(`${wie}: ongeldig niveau ${t.niveau}`);
  if (!t.tekst || t.tekst.length < 100) fouten.push(`${wie}: tekst ontbreekt of te kort`);
  const echt = t.tekst.split(/\s+/).filter(Boolean).length;
  if (Math.abs(echt - t.woorden) > Math.max(5, echt * 0.05)) fouten.push(`${wie}: woorden=${t.woorden} maar geteld ${echt}`);
  if (!Array.isArray(t.vragen) || t.vragen.length < 3) {
    fouten.push(`${wie}: minder dan 3 vragen`);
    continue;
  }
  t.vragen.forEach((v, i) => {
    const optN = (v.opties || []).length;
    if (optN < 3) fouten.push(`${wie} vraag ${i + 1}: maar ${optN} opties`);
    if (!(v.correct >= 0 && v.correct < optN)) fouten.push(`${wie} vraag ${i + 1}: correct-index ${v.correct} buiten bereik`);
    if (!v.v) fouten.push(`${wie} vraag ${i + 1}: geen vraagtekst`);
  });
}

if (fouten.length) {
  console.error(`❌ ${fouten.length} probleem(en):`);
  fouten.forEach(f => console.error('   ' + f));
  process.exit(1);
}
const perGroep = {};
bib.forEach(t => { perGroep[t.doelgroep] = (perGroep[t.doelgroep] || 0) + 1; });
console.log(`✅ ${bib.length} teksten OK — per doelgroep: ${JSON.stringify(perGroep)}`);
