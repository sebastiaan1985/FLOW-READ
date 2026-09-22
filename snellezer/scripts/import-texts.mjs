// Zet de tekstbibliotheek van de vorige versie (teksten.js op main) om naar src/data/library.json.
// Gebruik: git show origin/main:teksten.js > /tmp/teksten.js && node scripts/import-texts.mjs /tmp/teksten.js
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const source = process.argv[2];
if (!source) { console.error('Geef het pad naar teksten.js mee.'); process.exit(1); }
const context = {};
vm.runInNewContext(fs.readFileSync(source, 'utf8') + '\nthis.TEKST_BIB = TEKST_BIB;', context);
const clean = s => String(s).replace(/\p{Extended_Pictographic}/gu, '').replace(/[ \t]+\n/g, '\n').trim();
const library = context.TEKST_BIB.map(t => {
  const questions = t.vragen.map(q => ({ question: clean(q.v), options: q.opties.map(clean), answer: q.correct }));
  for (const q of questions) {
    if (!(q.answer >= 0 && q.answer < q.options.length)) throw new Error(`Ongeldig antwoord in ${t.id}`);
    if (new Set(q.options).size !== q.options.length) throw new Error(`Dubbele opties in ${t.id}`);
  }
  return {
    id: `lib-${t.id}`,
    title: clean(t.titel),
    text: clean(t.tekst),
    questions,
    audience: t.doelgroep,
    level: t.niveau,
    collection: t.collectie,
    topic: t.onderwerp,
  };
});
const out = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'src', 'data', 'library.json');
fs.writeFileSync(out, JSON.stringify(library, null, 1) + '\n');
console.log(`${library.length} teksten geschreven naar ${out}`);
