import type {Question} from '../types';

/** Veelvoorkomende woorden die geen goede invulvraag opleveren. */
const STOP = new Set(['de', 'het', 'een', 'en', 'of', 'maar', 'want', 'dus', 'dat', 'die', 'dit', 'deze', 'zijn', 'was', 'waren', 'wordt', 'worden', 'werd', 'werden', 'heeft', 'hebben', 'had', 'hadden', 'kan', 'kunnen', 'kon', 'konden', 'zal', 'zullen', 'zou', 'zouden', 'moet', 'moeten', 'mag', 'mogen', 'door', 'voor', 'naar', 'over', 'onder', 'tussen', 'tegen', 'zonder', 'tijdens', 'omdat', 'terwijl', 'hoewel', 'zodat', 'wanneer', 'waarom', 'waardoor', 'waarbij', 'waarin', 'daarom', 'daarna', 'daarbij', 'daarin', 'echter', 'ook', 'nog', 'niet', 'geen', 'meer', 'minder', 'veel', 'weinig', 'heel', 'erg', 'zeer', 'altijd', 'nooit', 'vaak', 'soms', 'hier', 'daar', 'waar', 'jouw', 'onze', 'hun', 'haar', 'zich', 'zelf', 'eigen', 'andere', 'anderen', 'iemand', 'niemand', 'iedereen', 'alles', 'niets', 'iets', 'welke', 'welk', 'zoals', 'bijvoorbeeld', 'eigenlijk', 'gewoon', 'misschien', 'steeds', 'tegenwoordig', 'mensen', 'manier', 'dingen']);
const clean = (w: string) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
const key = (w: string) => clean(w).toLocaleLowerCase('nl');

/** Vaste, herhaalbare toevalsreeks: dezelfde tekst geeft altijd dezelfde vragen. */
function seeded(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 7) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; };
}

/**
 * Maakt invulvragen uit je eigen tekst: een zin uit het begin, het midden en het eind, met één inhoudswoord weggelaten.
 * De andere opties zijn woorden die óók in de tekst staan, zodat je de tekst echt moet hebben gelezen.
 * Dit is geen verzonnen score: je antwoordt op zinnen die letterlijk in je tekst stonden.
 */
export function autoQuestions(text: string, count = 3): Question[] {
  const sentences = (text.replace(/\s+/g, ' ').match(/[^.!?]+[.!?]+/g) || []).map(s => s.trim()).filter(s => s.split(' ').length >= 7 && s.split(' ').length <= 45);
  if (sentences.length < 2) return [];
  const words = text.split(/\s+/).map(clean).filter(w => w.length >= 5 && !STOP.has(w.toLocaleLowerCase('nl')) && !/\d/.test(w));
  const freq = new Map<string, number>();
  for (const w of words) freq.set(w.toLocaleLowerCase('nl'), (freq.get(w.toLocaleLowerCase('nl')) || 0) + 1);
  const pool = [...new Set(words.map(w => w.toLocaleLowerCase('nl')))];
  if (pool.length < 6) return [];
  const random = seeded(text);
  const picks = count >= 3 ? [0, Math.floor(sentences.length / 2), sentences.length - 1] : [0, sentences.length - 1];
  const used = new Set<string>();
  const out: Question[] = [];
  for (const index of [...new Set(picks)].slice(0, count)) {
    const sentence = sentences[index];
    const tokens = sentence.split(' ');
    // Het beste antwoord: een inhoudswoord dat niet overal in de tekst staat (dan is het te raden), liefst wat langer.
    const candidates = tokens.map((t, i) => ({i, w: clean(t), k: key(t)})).filter(c => c.i > 0 && c.w.length >= 5 && !STOP.has(c.k) && !/\d/.test(c.w) && !used.has(c.k) && (freq.get(c.k) || 0) <= 2);
    if (!candidates.length) continue;
    const answer = candidates.sort((a, b) => b.w.length - a.w.length)[Math.floor(random() * Math.min(2, candidates.length))];
    const others = pool.filter(w => w !== answer.k && !tokens.some(t => key(t) === w) && Math.abs(w.length - answer.k.length) <= 4);
    const options: string[] = [];
    while (options.length < 3 && others.length) options.push(others.splice(Math.floor(random() * others.length), 1)[0]);
    if (options.length < 2) continue;
    used.add(answer.k);
    const shape = (w: string) => answer.w[0] === answer.w[0].toLocaleUpperCase('nl') ? w[0].toLocaleUpperCase('nl') + w.slice(1) : w;
    const blanked = tokens.map((t, i) => i === answer.i ? t.replace(answer.w, '_____') : t).join(' ');
    const all = [answer.w, ...options.map(shape)];
    const order = all.map((_, i) => i).sort(() => random() - .5);
    out.push({question: `Welk woord hoort op de lege plek? “${blanked}”`, options: order.map(i => all[i]), answer: order.indexOf(0)});
  }
  return out;
}
