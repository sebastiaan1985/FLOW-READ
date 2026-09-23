// Voegt de zelfgeschreven teksten uit scripts/extra/*.json toe aan src/data/library-extra.json.
// Formaat per tekst: {t: titel, a: doelgroep, l: niveau, o: onderwerp, c?: collectie (standaard 'kort'), x: tekst, q: [[vraag, [opties], juisteIndex], ...]}
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dir = path.join(root, 'scripts', 'extra');
const existing = new Set(JSON.parse(fs.readFileSync(path.join(root, 'src/data/library.json'), 'utf8')).map(t => t.title.toLowerCase()));
for (const f of ['passages.json', 'children.json']) JSON.parse(fs.readFileSync(path.join(root, 'src/data', f), 'utf8')).forEach(t => existing.add(t.title.toLowerCase()));
const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const out = [], seen = new Set(), problems = [];
for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
  for (const t of JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'))) {
    const where = `${file}: ${t.t}`;
    if (existing.has(t.t.toLowerCase()) || seen.has(t.t.toLowerCase())) problems.push(`${where}: titel bestaat al`);
    seen.add(t.t.toLowerCase());
    if (!['kids6-9', 'kids9-12', 'teens', 'volwassen'].includes(t.a)) problems.push(`${where}: onbekende doelgroep`);
    const words = t.x.split(/\s+/).filter(Boolean).length;
    const min = t.a.startsWith('kids') ? 30 : 120;
    if (words < min) problems.push(`${where}: te kort (${words} woorden)`);
    if (/["“”]/.test(t.x)) problems.push(`${where}: gebruik geen aanhalingstekens`);
    if (!Array.isArray(t.q) || t.q.length < 2) problems.push(`${where}: minder dan 2 vragen`);
    for (const [v, opts, i] of t.q) {
      if (!(i >= 0 && i < opts.length)) problems.push(`${where}: ongeldig antwoord bij ${v}`);
      if (new Set(opts.map(o => o.toLowerCase())).size !== opts.length) problems.push(`${where}: dubbele opties bij ${v}`);
    }
    out.push({id: `x-${slug(t.t)}`, title: t.t, text: t.x.trim(), questions: t.q.map(([question, options, answer]) => ({question, options, answer})), audience: t.a, level: t.l, collection: t.c || 'kort', topic: t.o});
  }
}
if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
fs.writeFileSync(path.join(root, 'src/data/library-extra.json'), JSON.stringify(out, null, 1) + '\n');
const count = {}; out.forEach(t => { const k = `${t.collection}/${t.audience}`; count[k] = (count[k] || 0) + 1; });
console.log(`${out.length} nieuwe teksten`, count);
