import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const fouten = [];

function verwacht(voorwaarde, bericht) {
  if (!voorwaarde) fouten.push(bericht);
}

const curriculumBron = html.match(/const LEERWEG_WEKEN = (\[[\s\S]*?\n\]);/)?.[1];
verwacht(curriculumBron, 'LEERWEG_WEKEN kon niet uit index.html worden gelezen.');

let curriculum = [];
if (curriculumBron) {
  try {
    curriculum = new Function(`return (${curriculumBron});`)();
  } catch (error) {
    fouten.push(`LEERWEG_WEKEN is geen geldige statische datastructuur: ${error.message}`);
  }
}

const verwachtCurriculum = [
  { sleutel:'w1d1', naam:'Begintest — meet je startsnelheid', duur:'10 min', screen:'begintest' },
  { sleutel:'w1d2', naam:'Persoonlijke startmissie', duur:'5 min', screen:null },
  { sleutel:'w1d3', naam:'Tempo en begrip in balans', duur:'5 min', screen:null },
  { sleutel:'w1d4', naam:'Ogen in beweging', duur:'5 min', screen:'oog' },
  { sleutel:'w1d5', naam:'Breder kijken', duur:'5 min', screen:'fixatie' },
  { sleutel:'w1d6', naam:'Vooruit blijven lezen', duur:'5 min', screen:'regressie' },
  { sleutel:'w1d7', naam:'Langere tekst met begrip', duur:'10 min', screen:'langetekst' },
  { sleutel:'w1d8', naam:'Hermeting — vergelijk met je start', duur:'10 min', screen:'leestest' },

  { sleutel:'w2d1', naam:'Fixatie-training (2 woorden per fixatie)', duur:'10 min', screen:'fixatie', fixatieBreedte:2 },
  { sleutel:'w2d2', naam:'Vooruit lezen — vast tempo met begrip', duur:'10 min', screen:'regressie' },
  { sleutel:'w2d3', naam:'RSVP op jouw WPM + 50', duur:'10 min', screen:'rsvp', wpmOffset:50 },
  { sleutel:'w2d4', naam:'Chunk lezen — groepen van 3 woorden', duur:'10 min', screen:'chunk', chunkGrootte:3 },
  { sleutel:'w2d5', naam:'Woordgroepen + vooruit-lezen-combinatie', duur:'15 min', screen:'fixatie', fixatieBreedte:3 },
  { sleutel:'w2d6', naam:'Leestest: bewust geen oog terug', duur:'15 min', screen:'leestest' },
  { sleutel:'w2d7', naam:'Weektest: vergelijk met week 1', duur:'10 min', screen:'leestest' },

  { sleutel:'w3d1', naam:'Innerlijke stem + eerste ritmevergelijking', duur:'10 min', screen:'subvocal', variant:'tel' },
  { sleutel:'w3d2', naam:'Metronoom lezen op 280 WPM', duur:'10 min', screen:'subvocal', variant:'metro', bpm:280 },
  { sleutel:'w3d3', naam:'S-beweging papier lezen', duur:'10 min', screen:'papier', variant:'s' },
  { sleutel:'w3d4', naam:'RSVP boven jouw starttempo', duur:'10 min', screen:'rsvp', wpmMultiplier:1.25 },
  { sleutel:'w3d5', naam:'Perifeer — bouw op tot niveau 4', duur:'10 min', screen:'perifeer', variant:'levels', minLevel:4 },
  { sleutel:'w3d6', naam:'Humming — ervaar één minuut contrast', duur:'5 min', screen:'subvocal', variant:'hum' },
  { sleutel:'w3d7', naam:'Weektest', duur:'10 min', screen:'leestest' },

  { sleutel:'w4d1', naam:'Previewing-techniek — structuur eerst lezen', duur:'10 min', screen:'skim', variant:'preview' },
  { sleutel:'w4d2', naam:'Skimmen — snel hoofdidee begrijpen', duur:'10 min', screen:'skim', variant:'skim' },
  { sleutel:'w4d3', naam:'Scannen — doelgericht zoeken in tekst', duur:'10 min', screen:'skim', variant:'scan' },
  { sleutel:'w4d4', naam:'Lange leestekst + alle begripsvragen', duur:'20 min', screen:'leestest' },
  { sleutel:'w4d5', naam:'Maak jouw persoonlijke top-3 technieken', duur:'5 min', screen:'technieken' },
  { sleutel:'w4d6', naam:'Palming — 30 seconden oogpauze', duur:'2 min', screen:'oogrust' },
  { sleutel:'w4d7', naam:'🏆 EINDTEST: vergelijk begin vs. nu!', duur:'15 min', screen:'leestest' },
];

const contractSleutels = [
  'naam', 'duur', 'screen', 'variant', 'minLevel', 'fixatieBreedte',
  'wpmOffset', 'wpmMultiplier', 'chunkGrootte', 'bpm',
];
const normaal = (missie, sleutel) => Object.fromEntries(
  contractSleutels
    .filter(veld => Object.hasOwn(missie, veld))
    .map(veld => [veld, missie[veld]])
    .concat([['sleutel', sleutel]])
    .sort(([a], [b]) => a.localeCompare(b))
);

const werkelijkCurriculum = curriculum.flatMap((week, weekIndex) =>
  (week.dagen || []).map((missie, dagIndex) =>
    normaal(missie, `w${weekIndex + 1}d${dagIndex + 1}`)
  )
);
const genormaliseerdVerwacht = verwachtCurriculum.map(missie => normaal(missie, missie.sleutel));

verwacht(curriculum.length === 4, `Leerweg bevat ${curriculum.length} weken in plaats van 4.`);
verwacht(
  curriculum.map(week => week.dagen?.length || 0).join(',') === '8,7,7,7',
  `Missieverdeling is ${curriculum.map(week => week.dagen?.length || 0).join(',')} in plaats van 8,7,7,7.`
);
verwacht(werkelijkCurriculum.length === 29, `Leerweg bevat ${werkelijkCurriculum.length} missies in plaats van 29.`);

for (let index = 0; index < Math.max(werkelijkCurriculum.length, genormaliseerdVerwacht.length); index++) {
  const werkelijk = werkelijkCurriculum[index];
  const verwachtMissie = genormaliseerdVerwacht[index];
  if (JSON.stringify(werkelijk) !== JSON.stringify(verwachtMissie)) {
    fouten.push(
      `${verwachtMissie?.sleutel || werkelijk?.sleutel || `missie ${index + 1}`} wijkt af.\n`
      + `  verwacht: ${JSON.stringify(verwachtMissie)}\n`
      + `  werkelijk: ${JSON.stringify(werkelijk)}`
    );
  }
}

const vereisteCode = new Map([
  ['w3d1', ["voltooiDaguitdaging('subvocal', { variant:'tel' })"]],
  ['w3d2', ["voltooiDaguitdaging('subvocal', { variant:'metro' })", 'dag?.bpm', 'svMetroBpmVal']],
  ['w3d3', ["voltooiDaguitdaging('papier', { variant:papierTechModus })", "screen: 'papier', variant: 's'", 'papierEinde()']],
  ['w3d4', ['dag?.wpmMultiplier', 'leerWegMissieTempo(dag)']],
  ['w3d5', ["variant: 'levels'", 'level: periSpelLevel + 1', 'minimumLevel']],
  ['w3d6', ["voltooiDaguitdaging('subvocal', { variant:'hum' })"]],
  ['w4d1', ["voltooiDaguitdaging('skim', { variant:'preview' })"]],
  ['w4d2', ["voltooiDaguitdaging('skim', { variant:'skim' })"]],
  ['w4d3', ["voltooiDaguitdaging('skim', { variant:'scan' })"]],
  ['w4d5', ["voltooiDaguitdaging('technieken'"]],
  ['w4d6', ["voltooiDaguitdaging('oogrust'"]],
]);
for (const [sleutel, tokens] of vereisteCode) {
  for (const token of tokens) {
    verwacht(html.includes(token), `${sleutel} mist runtimecontract: ${token}`);
  }
}

for (const token of [
  'const vereisteVariant = missie.variant || missieDag?.variant || null;',
  'if (vereisteVariant && resultaat?.variant !== vereisteVariant) return false;',
  'const minimumLevel = missie.minLevel || missieDag?.minLevel || null;',
  'if (minimumLevel && (resultaat?.level || 0) < minimumLevel) return false;',
  'if (!volgende || !missie || missie.w !== volgende.w || missie.d !== volgende.d || missie.screen !== scherm) return false;',
  "toonFout('Rond eerst de vorige missie af.');",
]) {
  verwacht(html.includes(token), `Leerwegvoortgang mist beveiliging: ${token}`);
}

if (fouten.length) {
  fouten.forEach(fout => console.error(`FOUT: ${fout}`));
  process.exitCode = 1;
} else {
  console.log('Curriculumregressie geslaagd: 29/29 missiecontracten en alle variant-/levelpoorten kloppen.');
}
