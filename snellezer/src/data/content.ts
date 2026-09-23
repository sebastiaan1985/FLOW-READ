import type { Exercise, Passage, SkillId } from '../types';
import passages from './passages.json';
import children from './children.json';
import words from './words.json';
import library from './library.json';
import libraryExtra from './library-extra.json';
/** De bibliotheek van de vorige versie plus de nieuwe teksten uit scripts/extra (zie scripts/add-texts.mjs). */
const LIBRARY = [...(library as Passage[]), ...(libraryExtra as Passage[])];
/** Korte oefenteksten voor tieners en volwassenen: de eigen teksten plus de bibliotheek van de vorige versie. */
export const PASSAGES: Passage[] = [...(passages as Passage[]), ...LIBRARY.filter(p=>p.collection==='kort'&&(p.audience==='volwassen'||p.audience==='teens'))];
/** Lange teksten (4 vragen) voor de oefening Lange teksten. */
export const LONG_PASSAGES: Passage[] = LIBRARY.filter(p=>p.collection==='lang');
/** Vaste meetteksten van vergelijkbare lengte voor begintest en hermetingen. */
export const TEST_PASSAGES: Passage[] = LIBRARY.filter(p=>p.collection==='leestest');
export const CHILD_PASSAGES: Passage[] = [...(children as Passage[]), ...LIBRARY.filter(p=>p.audience==='kids6-9'||p.audience==='kids9-12')];
export const WORD_GAME_ITEMS = words;
export const SKILLS: {id:SkillId;title:string;subtitle:string;illustration:string;tint:string}[] = [
 {id:'snelheid',title:'Snelheid',subtitle:'Vind jouw leestempo',illustration:'snelheid',tint:'#FFF4DF'},
 {id:'begrip',title:'Begrip',subtitle:'Neem meer mee uit je tekst',illustration:'begrip',tint:'#E9F6EF'},
 {id:'blikveld',title:'Blikveld',subtitle:'Ontdek het grotere geheel',illustration:'blikveld',tint:'#E8F2FD'},
 {id:'focus',title:'Focus & rust',subtitle:'Lees met volle aandacht',illustration:'focus',tint:'#F1EDFD'},
];
export const EXERCISES: Exercise[] = [
 {id:'rsvp',title:'Woord voor woord',subtitle:'Eén woord. Alle aandacht.',description:'Woorden verschijnen één voor één op dezelfde plek. Kies een comfortabel tempo. Na de tekst kijken we wat je hebt onthouden.',skill:'snelheid',mode:'rsvp',minutes:2,icon:'zap'},
 {id:'chunks',title:'Lezen in chunks',subtitle:'Geef woorden de ruimte',description:'Lees meerdere woorden tegelijk. Je stelt zelf in hoeveel. Houd je blik rond het midden — begrip is belangrijker dan een hoog tempo.',skill:'snelheid',mode:'chunks',minutes:3,icon:'text'},
 {id:'forward',title:'Vooruit lezen',subtitle:'Blijf rustig in beweging',description:'Lees mee met de gemarkeerde woordgroep. Eerdere groepen verdwijnen. Pas je tempo aan als je de draad kwijtraakt.',skill:'snelheid',mode:'forward',minutes:2,icon:'arrow'},
 {id:'fixation',title:'Fixatie-training',subtitle:'Een rustig anker voor je blik',description:'Richt je blik op het midden. Er verschijnt steeds een korte woordgroep rond je fixatiepunt.',skill:'snelheid',mode:'fixation',minutes:2,icon:'target'},
 {id:'reading',title:'Leestest',subtitle:'Jouw tempo, jouw begrip',description:'Lees de tekst op je eigen tempo. Tik op klaar wanneer je alles hebt gelezen. Daarna beantwoord je een paar vragen.',skill:'begrip',mode:'reading',minutes:3,icon:'book'},
 {id:'long',title:'Lange teksten',subtitle:'Aandacht van begin tot eind',description:'Neem de tijd voor een langer verhaal. Lees op je eigen tempo en beantwoord daarna vier vragen.',skill:'begrip',mode:'reading',minutes:5,icon:'text'},
 {id:'skim',title:'Skimmen & previewing',subtitle:'Eerst het overzicht',description:'Bij skimmen zijn de kernzinnen gemarkeerd en heb je 30 seconden voor de hoofdgedachte. Bij previewing verken je eerst 30 seconden de opbouw en lees je daarna de hele tekst.',skill:'begrip',mode:'skim',minutes:2,icon:'eye'},
 {id:'innerstem',title:'Innerlijke stem',subtitle:'Ontdek je leesritme',description:'Veel lezers horen woorden in gedachten. Lees op een metronoom, terwijl je zacht telt, of terwijl je neuriet, en vergelijk wat er met je begrip gebeurt.',skill:'focus',mode:'innerstem',minutes:2,icon:'volume'},
 {id:'scan',title:'Scannen',subtitle:'Vind wat ertoe doet',description:'Zoek het aangegeven woord in de tekst en tik erop. Je oefent gericht zoeken, niet het begrijpen van de hele tekst.',skill:'begrip',mode:'scan',minutes:2,icon:'search'},
 {id:'retest',title:'Hermeting',subtitle:'Hoe ver ben je nu?',description:'Lees een nieuwe meettekst op een tempo waarop je de inhoud goed meeneemt. Daarna volgen drie vragen. We vergelijken met je begintest.',skill:'begrip',mode:'reading',minutes:3,icon:'chart'},
 {id:'baseline',title:'Begintest',subtitle:'Ontdek jouw vertrekpunt',description:'Lees op je normale tempo. Er is geen goed of fout tempo. Met een paar vragen bepalen we een passend begin.',skill:'begrip',mode:'reading',minutes:3,icon:'flag'},
 {id:'peripheral',title:'Perifeer zien',subtitle:'Kijk verder dan het midden',description:'Houd je blik op het stipje in het midden. Links en rechts flitst kort een woord. Hoe beter je ze ziet, hoe verder ze uit elkaar komen te staan.',skill:'blikveld',mode:'peripheral',minutes:2,icon:'eye'},
 {id:'eye',title:'Oogbeweging',subtitle:'Volg een rustig ritme',description:'Volg het puntje met je ogen terwijl je hoofd stil blijft. Kies een patroon en een tempo, en stop zodra het onprettig voelt.',skill:'blikveld',mode:'eye',minutes:1,icon:'eye'},
 {id:'groups',title:'Woordgroepen',subtitle:'Zie woorden als een geheel',description:'Bekijk een korte woordgroep en herken daarna de juiste volgorde. Doe tien rustige rondes.',skill:'blikveld',mode:'groups',minutes:2,icon:'grid'},
 {id:'rhythm',title:'Leesritme',subtitle:'Een kalme start',description:'Volg een minuut lang het ritme van de cirkel. Adem zoals prettig voelt. Je hoeft niets te forceren.',skill:'focus',mode:'rhythm',minutes:1,icon:'heart'},
 {id:'relax',title:'Oogontspanning',subtitle:'Even niets hoeven',description:'Kijk weg van je scherm naar iets in de verte. Ontspan je schouders. Na een minuut is dit rustmoment afgerond.',skill:'focus',mode:'relax',minutes:1,icon:'leaf'},
 {id:'paper',title:'Papier & leesgids',subtitle:'Een zachte gids door je tekst',description:'Volg de gemarkeerde regel, zoals met je vinger op papier. Je gaat zelf verder, of je laat de gids meelopen op een tempo dat jij kiest.',skill:'focus',mode:'paper',minutes:3,icon:'book'},
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
