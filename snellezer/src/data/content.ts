import {colors} from '../theme';
import type { Exercise, Passage, SkillId } from '../types';
import passages from './passages.json';
import children from './children.json';
import words from './words.json';
import library from './library.json';
import libraryExtra from './library-extra.json';
/** De bibliotheek van de vorige versie plus de nieuwe teksten uit scripts/extra (zie scripts/add-texts.mjs). */
const LIBRARY = [...(library as Passage[]), ...(libraryExtra as Passage[])];
/** Korte oefenteksten voor tieners en volwassenen: de eigen teksten plus de bibliotheek van de vorige versie. */
export const PASSAGES: Passage[] = [...(passages as Passage[]), ...LIBRARY.filter(p=>(p.collection==='kort'||p.collection==='leestest')&&(p.audience==='volwassen'||p.audience==='teens'))];
/** Lange teksten (4 vragen) voor de oefening Lange teksten. */
export const LONG_PASSAGES: Passage[] = LIBRARY.filter(p=>p.collection==='lang');
/** Meetteksten voor begintest en hermetingen: 400 tot 500 woorden, vergelijkbare zinslengte en woordlengte, 5 vragen. De oude, kortere meetteksten zijn nu oefenteksten. */
export const TEST_PASSAGES: Passage[] = LIBRARY.filter(p=>p.collection==='meting');
export const CHILD_PASSAGES: Passage[] = [...(children as Passage[]), ...LIBRARY.filter(p=>p.audience==='kids6-9'||p.audience==='kids9-12')];
export const WORD_GAME_ITEMS = words;

/* ── De centrale tekstbibliotheek ─────────────────────────────────────────────
 * Eén plek die bepaalt welke teksten bij welke oefening horen. Elke oefening en elke lesdag haalt hier zijn tekst,
 * en de tekstkiezer laat uit dezelfde bron kiezen. Meetteksten blijven apart, zodat metingen eerlijk vergelijkbaar zijn.
 */
const MEASURE = ['baseline', 'retest'];
/** Oefeningen zonder tekst (ontspanning, oogtraining, woordspellen). */
export const TEXTLESS_MODES = ['rhythm', 'relax', 'eye', 'peripheral', 'groups', 'wordflash', 'catcher'];
export const wordCount = (p: {text: string}) => p.text.trim().split(/\s+/).filter(Boolean).length;
/** De tekst die de app automatisch kiest komt uit deze pool. */
export function textPool(exerciseId: string, {kids, level}: {kids: boolean; level?: number}): Passage[] {
  if (MEASURE.includes(exerciseId)) return TEST_PASSAGES;
  if (kids || exerciseId === 'sprint') return CHILD_PASSAGES;
  if (exerciseId === 'long') return LONG_PASSAGES.filter(p => level === undefined || p.level === level);
  return PASSAGES;
}
/** Waar je zelf uit mag kiezen: korte én lange teksten, tenzij het een meting is. */
export function libraryFor(exerciseId: string, kids: boolean): Passage[] {
  if (MEASURE.includes(exerciseId)) return [];
  if (kids || exerciseId === 'sprint') return CHILD_PASSAGES;
  if (exerciseId === 'long') return LONG_PASSAGES;
  return [...PASSAGES, ...LONG_PASSAGES];
}
/** Kun je bij deze oefening zelf een tekst kiezen of je eigen tekst gebruiken? */
export const choosesText = (exerciseId: string, mode: string) => !MEASURE.includes(exerciseId) && !TEXTLESS_MODES.includes(mode);
export const TOPIC_LABELS: Record<string, string> = {wetenschap: 'Wetenschap', dieren: 'Dieren', natuur: 'Natuur', techniek: 'Techniek', geschiedenis: 'Geschiedenis', verhaal: 'Verhalen', psychologie: 'Psychologie', lichaam: 'Lichaam', eten: 'Eten', cultuur: 'Cultuur', economie: 'Economie', leren: 'Leren', ruimte: 'Ruimte', ruimtevaart: 'Ruimte', sport: 'Sport', gezondheid: 'Gezondheid', media: 'Media', maatschappij: 'Maatschappij', milieu: 'Milieu', communicatie: 'Taal', taal: 'Taal', werk: 'Werk', reizen: 'Reizen', kunst: 'Kunst', muziek: 'Muziek', geld: 'Geld', wonen: 'Wonen', filosofie: 'Filosofie'};
/** Leesplezier: elke dag een andere tekst om gewoon voor je plezier te lezen, liefst een verhaal. */
export function storyOfDay(kids: boolean, date = new Date()): Passage {
  const pool = kids ? CHILD_PASSAGES : [...PASSAGES, ...LONG_PASSAGES].filter(p => p.topic === 'verhaal' || p.topic === 'cultuur' || p.topic === 'geschiedenis' || p.topic === 'dieren');
  const list = pool.length ? pool : PASSAGES;
  const day = Math.floor(new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() / 86400000);
  return list[((day * 7) % list.length + list.length) % list.length];
}
export const LEVEL_LABELS = ['', 'Heel makkelijk', 'Makkelijk', 'Gemiddeld', 'Pittig', 'Uitdagend'];
export const SKILLS: {id:SkillId;title:string;subtitle:string;illustration:string;tint:string}[] = [
 {id:'snelheid',title:'Snelheid',subtitle:'Vind jouw leestempo',illustration:'snelheid',get tint(){return colors.tintSun;}},
 {id:'begrip',title:'Begrip',subtitle:'Neem meer mee uit je tekst',illustration:'begrip',get tint(){return colors.tintSage;}},
 {id:'blikveld',title:'Blikveld',subtitle:'Ontdek het grotere geheel',illustration:'blikveld',get tint(){return colors.tintSky;}},
 {id:'focus',title:'Focus & rust',subtitle:'Lees met volle aandacht',illustration:'focus',get tint(){return colors.tintLilac;}},
];
export const EXERCISES: Exercise[] = [
 {id:'rsvp',title:'Woord voor woord',subtitle:'Eén woord. Alle aandacht.',description:'Woorden verschijnen één voor één op dezelfde plek. Kies een comfortabel tempo. Na de tekst kijken we wat je hebt onthouden.',skill:'snelheid',mode:'rsvp',minutes:2,icon:'zap'},
 {id:'push',title:'Tempo Push',subtitle:'Even sneller, dan terug',description:'Een korte sprint boven je oefentempo, daarna zakt het tempo terug naar wat je aankunt. Na een snelle ronde voelt je eigen tempo ruimer. Begrip blijft meetellen: daarom volgen er vragen.',skill:'snelheid',mode:'push',minutes:3,icon:'zap'},
 {id:'chunks',title:'Lezen in chunks',subtitle:'Geef woorden de ruimte',description:'Lees meerdere woorden tegelijk. Je stelt zelf in hoeveel. Houd je blik rond het midden — begrip is belangrijker dan een hoog tempo.',skill:'snelheid',mode:'chunks',minutes:3,icon:'text'},
 {id:'flow',title:'Rustig ritme',subtitle:'Gewoon lezen, met een zacht ritme',description:'Je leest een gewone bladzijde. Een zachte markering loopt per zinsdeel mee op jouw tempo, als een rustige hand onder de regel. Wat je gelezen hebt blijft staan.',skill:'snelheid',mode:'flow',minutes:3,icon:'leaf'},
 {id:'forward',title:'Vooruit lezen',subtitle:'Blijf rustig in beweging',description:'Lees mee met de gemarkeerde woordgroep. Eerdere groepen verdwijnen. Pas je tempo aan als je de draad kwijtraakt.',skill:'snelheid',mode:'forward',minutes:2,icon:'arrow'},
 {id:'fixation',title:'Fixatie-training',subtitle:'Een rustig anker voor je blik',description:'Richt je blik op het midden. Er verschijnt steeds een korte woordgroep rond je fixatiepunt.',skill:'snelheid',mode:'fixation',minutes:2,icon:'target'},
 {id:'reading',title:'Leestest',subtitle:'Jouw tempo, jouw begrip',description:'Lees de tekst op je eigen tempo. Tik op klaar wanneer je alles hebt gelezen. Daarna beantwoord je een paar vragen.',skill:'begrip',mode:'reading',minutes:3,icon:'book'},
 {id:'long',title:'Lange teksten',subtitle:'Aandacht van begin tot eind',description:'Neem de tijd voor een langer verhaal. Lees op je eigen tempo en beantwoord daarna vier vragen.',skill:'begrip',mode:'reading',minutes:5,icon:'text'},
 {id:'skim',title:'Skimmen & previewing',subtitle:'Eerst het overzicht',description:'Bij skimmen zijn de kernzinnen gemarkeerd en heb je 30 seconden voor de hoofdgedachte. Bij previewing verken je eerst 30 seconden de opbouw en lees je daarna de hele tekst.',skill:'begrip',mode:'skim',minutes:2,icon:'eye'},
 {id:'sq3r',title:'Slim lezen en onthouden',subtitle:'Vijf stappen voor studietekst',description:'Verkennen, vragen stellen, lezen, navertellen en herhalen. Zo lees je gericht en onthoud je meer. Deze oefening draait niet om topsnelheid, maar om snel lezen mét begrip.',skill:'begrip',mode:'skim',minutes:5,icon:'book'},
 {id:'innerstem',title:'Innerlijke stem',subtitle:'Ontdek je leesritme',description:'Bijna iedereen hoort woorden in gedachten, en dat helpt je begrijpen. Hier oefen je met een lichtere binnenstem: op een metronoom, of met de nadruk alleen op de kernwoorden.',skill:'focus',mode:'innerstem',minutes:2,icon:'volume'},
 {id:'scan',title:'Scannen',subtitle:'Vind wat ertoe doet',description:'Zoek het aangegeven woord in de tekst en tik erop. Je oefent gericht zoeken, niet het begrijpen van de hele tekst.',skill:'begrip',mode:'scan',minutes:2,icon:'search'},
 {id:'retest',title:'Hermeting',subtitle:'Hoe ver ben je nu?',description:'Lees een nieuwe meettekst op een tempo waarop je de inhoud goed meeneemt. Daarna volgen vijf vragen. We vergelijken met je begintest.',skill:'begrip',mode:'reading',minutes:3,icon:'chart'},
 {id:'baseline',title:'Begintest',subtitle:'Ontdek jouw vertrekpunt',description:'Lees op je normale tempo. Er is geen goed of fout tempo. Met een paar vragen bepalen we een passend begin.',skill:'begrip',mode:'reading',minutes:3,icon:'flag'},
 {id:'peripheral',title:'Perifeer zien',subtitle:'Kijk verder dan het midden',description:'Houd je blik op het stipje in het midden. Links en rechts flitst kort een woord. Hoe beter je ze ziet, hoe verder ze uit elkaar komen te staan.',skill:'blikveld',mode:'peripheral',minutes:2,icon:'eye'},
 {id:'eye',title:'Puntvolgen',subtitle:'Snelle, nauwkeurige oogsprongen',description:'Volg het puntje met je ogen terwijl je hoofd stil blijft: links-rechts, op-neer, zigzag of verspringend. Het puntje versnelt geleidelijk. Stop zodra het onprettig voelt.',skill:'blikveld',mode:'eye',minutes:1,icon:'eye'},
 {id:'eight',title:'Liggend achtje',subtitle:'Een vloeiende, doorlopende baan',description:'Volg het puntje over een liggend achtje. Je ogen bewegen soepel van links naar rechts en van boven naar beneden. Houd je hoofd stil.',skill:'blikveld',mode:'eye',minutes:1,icon:'Infinity'},
 {id:'focusswitch',title:'Focuswissel',subtitle:'Spring snel van vlak naar vlak',description:'Het doel springt naar steeds een ander vlak van het scherm. Volg het met je ogen. Is het een ster? Tik dan zo snel mogelijk op Ster. Je score telt goede tikken en vergissingen.',skill:'blikveld',mode:'eye',minutes:1,icon:'Crosshair'},
 {id:'groups',title:'Woordgroepen',subtitle:'Zie woorden als een geheel',description:'Bekijk een korte woordgroep en herken daarna de juiste volgorde. Doe tien rustige rondes.',skill:'blikveld',mode:'groups',minutes:2,icon:'grid'},
 {id:'rhythm',title:'Leesritme',subtitle:'Een kalme start',description:'Volg een minuut lang het ritme van de cirkel. Adem zoals prettig voelt. Je hoeft niets te forceren.',skill:'focus',mode:'rhythm',minutes:1,icon:'heart'},
 {id:'relax',title:'Oogontspanning',subtitle:'Ver, dichtbij, ver',description:'Twintig seconden in de verte kijken, twintig seconden dichtbij en weer twintig seconden in de verte. Bij elke wissel trilt je telefoon kort.',skill:'focus',mode:'relax',minutes:1,icon:'leaf'},
 {id:'palming',title:'Palming',subtitle:'Ogen dicht onder warme handen',description:'Een rustig moment voor je ogen: handen warm wrijven, ogen sluiten en je handpalmen er zacht overheen leggen. Een stem vertelt je wanneer je mag stoppen. Dit is ontspanning, geen behandeling.',skill:'focus',mode:'relax',minutes:1,icon:'Hand'},
 {id:'paper',title:'Papier & leesgids',subtitle:'Een zachte gids door je tekst',description:'Volg de gemarkeerde regel, zoals met je vinger op papier. De gids loopt vanzelf regel voor regel mee op een tempo dat jij kiest, en de tekst schuift met je mee.',skill:'focus',mode:'paper',minutes:3,icon:'book'},
 {id:'wordflash',title:'Woordflits',subtitle:'Kijken, onthouden, herkennen',description:'Bekijk het woord en kies daarna de juiste spelling. Tien rondes, op jouw niveau.',skill:'blikveld',mode:'wordflash',minutes:2,icon:'sparkles'},
 {id:'catcher',title:'Woordenvanger',subtitle:'Vind het juiste woord',description:'Onthoud het zoekwoord en kies het uit de woordenwolk. Na tien rondes zie je jouw score.',skill:'focus',mode:'catcher',minutes:2,icon:'target'},
 {id:'sprint',title:'Verhalentocht',subtitle:'Een klein leesavontuur',description:'Lees een kort verhaal, woord voor woord. Daarna ontdek je hoeveel je hebt onthouden.',skill:'begrip',mode:'sprint',minutes:2,icon:'book'},
];
export function getExercise(id:string) { return EXERCISES.find(e=>e.id===id) || EXERCISES[0]; }
export const WEEKS = [
 {title:'Een rustig begin',subtitle:'Leer jouw tempo kennen',description:'Vind je vertrekpunt en maak ruimte voor een leesmoment.'},
 {title:'Meer in één blik',subtitle:'Van woorden naar woordgroepen',description:'Verken chunks en geef je blik wat meer ruimte.'},
 {title:'Lezen met aandacht',subtitle:'Snelheid en begrip in balans',description:'Wissel tempo af met aandacht voor de inhoud.'},
 {title:'Jouw eigen ritme',subtitle:'Maak lezen een gewoonte',description:'Breng alles samen, met teksten die jij graag leest.'},
];
/** Woordflits-niveaus, zoals in de vorige versie: langer woord, kortere flits. */
export const WORD_LEVELS: {level:number;title:string;flashMs:number;test:(w:string)=>boolean}[] = [
 {level:1,title:'3 letters',flashMs:2000,test:w=>w.length<=3},
 {level:2,title:'4–5 letters',flashMs:1600,test:w=>w.length>=4&&w.length<=5},
 {level:3,title:'6–7 letters',flashMs:1200,test:w=>w.length>=6&&w.length<=7},
 {level:4,title:'Lange woorden',flashMs:900,test:w=>w.length>=8},
];
export function wordLevelSpec(level:number){ return WORD_LEVELS.find(l=>l.level===level) || WORD_LEVELS[1]; }
/** Woorden op dat niveau; valt terug op de hele lijst als een niveau te weinig woorden heeft. */
export function wordsForLevel(level:number){ const pool=WORD_GAME_ITEMS.filter(w=>wordLevelSpec(level).test(w.word)); return pool.length>=4?pool:WORD_GAME_ITEMS; }
