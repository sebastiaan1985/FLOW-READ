import type {AppState, Passage, SessionResult} from '../types';
import type {Lesson} from '../data/lessons';
import {dateKey} from './model.ts';

/** Onder dit begrip telt een ronde als oefening, niet als prestatie. */
export const COMPREHENSION_GATE = 67;
/** Onder dit begrip is een begintest geen eerlijk vertrekpunt: wie te snel leest, lijkt op dag 28 vanzelf niet vooruit te gaan. */
export const BASELINE_MIN = 60;
/** Een begintest telt als vertrekpunt bij voldoende begrip, of bij de tweede poging (we vragen het maar één keer). */
export function baselineAccepted(comprehension: number, attempt: number) { return comprehension >= BASELINE_MIN || attempt >= 2; }
/** Oefeningen waarvan de snelheid echt gemeten is (je eigen tempo, geen ingesteld tempo). */
export const MEASURED_EXERCISES = ['baseline', 'retest', 'reading', 'long'];

/** Een meting die fysiek niet kan, wordt niet opgeslagen. */
export function readingRejection(words: number, seconds: number, kids = false): string | null {
  if (seconds < 3) return 'Neem rustig de tijd om de tekst te lezen.';
  const wpm = words / seconds * 60;
  if (wpm > (kids ? 500 : 1000)) return `Dat ging erg snel: ${Math.round(wpm)} woorden per minuut. Lees de tekst echt uit, dan meten we eerlijk.`;
  return null;
}

/** Dezelfde tekst op dezelfde dag opnieuw levert steeds minder XP op. */
export function repeatFactor(sessions: readonly SessionResult[], passageId: string | undefined, now = new Date()): number {
  if (!passageId) return 1;
  const today = dateKey(now);
  const earlier = sessions.filter(s => s.passageId === passageId && dateKey(s.date) === today).length;
  return [1, .5, .15][earlier] ?? 0;
}

export function xpFor({complete, comprehension, repeat = 1}: {complete: boolean; comprehension: number | null; repeat?: number}): number {
  if (!complete) return 5;
  if (comprehension !== null && comprehension < COMPREHENSION_GATE) return 2;
  const base = 20 + (comprehension === null ? 0 : Math.round(comprehension / 10));
  return Math.round(base * repeat);
}

/** Effectief leestempo: gemeten tempo maal begrip. Scheuren zonder begrijpen levert niets op. */
export function effectiveWpm(wpm: number, comprehension: number | null): number {
  return comprehension === null || wpm <= 0 ? 0 : Math.round(wpm * comprehension / 100);
}

/** Een les is gehaald als de oefening af is en, waar begrip gemeten wordt, de begripsgrens is gehaald. */
export function passed(complete: boolean, comprehension: number | null): boolean {
  return complete && (comprehension === null || comprehension >= COMPREHENSION_GATE);
}

/**
 * Het doeltempo beweegt twee kanten op:
 * onder 70% begrip een stap terug, na twee keer op rij minstens 80% een kleine stap vooruit.
 */
export type TempoReason = 'begrip-laag' | 'begrip-hoog' | 'afdwalen' | null;
/**
 * Past het oefentempo stil aan. Onder 70% begrip, of als je bij de aandachtchecks vaker afdwaalde dan meelas,
 * gaat het een stap omlaag. Na twee keer minstens 80% begrip een stap omhoog.
 */
export function adjustTempo(state: Pick<AppState, 'targetWpm' | 'tempoStreak' | 'kidsMode'>, comprehension: number | null, focus?: {asked: number; wandered: number}): {targetWpm: number; tempoStreak: number; reason: TempoReason} {
  const floor = state.kidsMode ? 60 : 80;
  const down = {targetWpm: Math.max(floor, Math.round(state.targetWpm * .9)), tempoStreak: 0};
  if (focus && focus.asked >= 2 && focus.wandered * 2 > focus.asked) return {...down, reason: 'afdwalen'};
  if (comprehension === null) return {targetWpm: state.targetWpm, tempoStreak: state.tempoStreak, reason: null};
  if (comprehension < 70) return {...down, reason: 'begrip-laag'};
  if (comprehension < 80) return {targetWpm: state.targetWpm, tempoStreak: 0, reason: null};
  const streak = state.tempoStreak + 1;
  if (streak >= 2) return {targetWpm: Math.min(state.kidsMode ? 300 : 800, Math.round(state.targetWpm * 1.05)), tempoStreak: 0, reason: 'begrip-hoog'};
  return {targetWpm: state.targetWpm, tempoStreak: streak, reason: null};
}
/** Eén zin over wat de app met je tempo deed, en waarom. */
export function tempoNote(reason: TempoReason, from: number, to: number): string | null {
  if (!reason || from === to) return null;
  if (reason === 'afdwalen') return `Je dwaalde vaker af dan je meelas. Je oefentempo gaat daarom van ${from} naar ${to} woorden per minuut, zodat je aandacht het beter bijhoudt.`;
  if (reason === 'begrip-laag') return `Je begreep minder dan 70% van de tekst. Je oefentempo gaat daarom van ${from} naar ${to} woorden per minuut, zodat er meer ruimte is voor de inhoud.`;
  return `Twee keer achter elkaar begreep je minstens 80%. Je oefentempo gaat daarom van ${from} naar ${to} woorden per minuut.`;
}

/** Kies de tekst die je het langst niet (of nog nooit) hebt gelezen. */
export function pickPassage<P extends Passage>(allPool: readonly P[], sessions: readonly SessionResult[], seed = 0, skip: readonly string[] = []): P {
  if (!allPool.length) throw new Error('Lege tekstpool');
  // Teksten die je net hebt overgeslagen komen pas terug als er niets anders meer is.
  const rest = allPool.filter(p => !skip.includes(p.id));
  const pool = rest.length ? rest : allPool;
  const last = new Map<string, number>();
  sessions.forEach((s, i) => { if (s.passageId) last.set(s.passageId, i); });
  const start = ((seed % pool.length) + pool.length) % pool.length;
  let best = pool[start], bestScore = Infinity;
  for (let k = 0; k < pool.length; k++) {
    const p = pool[(start + k) % pool.length];
    const score = last.has(p.id) ? last.get(p.id)! : -1;
    if (score < bestScore) { best = p; bestScore = score; if (score === -1) break; }
  }
  return best;
}

export type PathProgress = {day: number; doneToday: boolean; completed: number[]; finished: boolean};

/** Waar sta je in de 28 dagen? Eén les per kalenderdag; een gemiste dag is geen achterstand. */
export function pathProgress(sessions: readonly SessionResult[], now = new Date()): PathProgress {
  const today = dateKey(now);
  const done = new Set<number>();
  let todayDay: number | null = null;
  let baselineToday = false;
  for (const s of sessions) {
    // Een begintest telt als les 1, ook als je die bij de start deed in plaats van in de leerweg.
    if (s.exerciseId === 'baseline' && !s.lessonDay) { done.add(1); if (dateKey(s.date) === today) baselineToday = true; continue; }
    if (!s.lessonDay) continue;
    done.add(s.lessonDay);
    if (dateKey(s.date) === today && (todayDay === null || s.lessonDay > todayDay)) todayDay = s.lessonDay;
  }
  if (todayDay === null && baselineToday && Math.max(...done) === 1) todayDay = 1;
  const max = done.size ? Math.max(...done) : 0;
  const completed = [...done].sort((a, b) => a - b);
  if (todayDay !== null) return {day: todayDay, doneToday: true, completed, finished: max >= 28};
  return {day: Math.min(28, max + 1), doneToday: false, completed, finished: max >= 28};
}

/** De drie oefeningen van een lesdag: de techniek, een toepassing, en rust. */
export function lessonPlanIds(lesson: Lesson): string[] {
  const closing = lesson.support === 'relax' ? 'rhythm' : 'relax';
  return [...new Set([lesson.exerciseId, lesson.support, closing])];
}

/** Terugkoppeling die de uitslag aan de techniek van vandaag koppelt. */
export function lessonFeedback(lesson: Lesson, r: {wpm: number; comprehension: number | null; score?: number; baselineEffective?: number}): string {
  if (r.comprehension !== null && r.comprehension < COMPREHENSION_GATE)
    return `Je begrip kwam uit op ${r.comprehension}%. Een techniek werkt pas als je de inhoud meeneemt. Probeer het nog eens op een lager tempo.`;
  switch (lesson.measure) {
    case 'effectief': {
      const eff = effectiveWpm(r.wpm, r.comprehension);
      if (!eff) return `Je las ${r.wpm} woorden per minuut.`;
      if (lesson.day === 1 || !r.baselineEffective) return `Je effectieve leestempo is ${eff}: ${r.wpm} woorden per minuut met ${r.comprehension}% begrip. Dit is je vertrekpunt.`;
      const diff = Math.round((eff - r.baselineEffective) / r.baselineEffective * 100);
      return `Je effectieve leestempo is ${eff} (${r.wpm} wpm × ${r.comprehension}% begrip). Bij je nulmeting was dat ${r.baselineEffective}: ${diff >= 0 ? '+' : ''}${diff}%.`;
    }
    case 'begrip':
      return r.comprehension === null
        ? `Je oefende op ${r.wpm} woorden per minuut met de techniek van vandaag.`
        : !r.wpm ? `Je hield ${r.comprehension}% begrip vast, met de techniek van vandaag.`
        : `Op ${r.wpm} woorden per minuut hield je ${r.comprehension}% begrip vast, met de techniek van vandaag. Zo wordt het een gewoonte.`;
    case 'wpm':
      return r.wpm ? `Je las met ${r.wpm} woorden per minuut. Merk je verschil met gisteren?` : 'Je hebt de techniek van vandaag toegepast.';
    case 'herkenning':
      return r.score !== undefined ? `Je herkende ${r.score} van de 10. Het mag lastig voelen; zo groeit je blikveld.` : 'Je hebt de techniek van vandaag geoefend.';
    default:
      return 'Rust hoort bij de training. Ontspannen ogen maken grotere sprongen.';
  }
}

export const LONG_LEVELS = ['Starter', 'Gevorderd', 'Expert'];
/** Lange teksten groeien mee: minstens 80% begrip is een niveau omhoog, onder 67% een niveau terug. */
export function longLevel(sessions: readonly SessionResult[], levelOf: (passageId: string) => number | undefined): number {
  let level = 1;
  for (const s of sessions) {
    if (s.exerciseId !== 'long' || s.comprehension === null || !s.passageId || levelOf(s.passageId) !== level) continue;
    if (s.comprehension >= 80) level = Math.min(3, level + 1);
    else if (s.comprehension < COMPREHENSION_GATE) level = Math.max(1, level - 1);
  }
  return level;
}

/** Leesvormen waarin je een boek kunt lezen. Woord voor woord zit er bewust niet bij: bij lange tekst zakt het begrip, omdat je niet terug kunt kijken. */
export const BOOK_DAILY_MODES = ['chunks', 'forward', 'fixation', 'reading', 'paper', 'flow'];
/** De leesvorm waarin je de techniek van vandaag toepast op je eigen boek. */
export function bookModeFor(lesson: {exerciseId: string; support: string} | null): string {
  if (!lesson) return 'chunks';
  const pick = [lesson.exerciseId, lesson.support].find(id => BOOK_DAILY_MODES.includes(id));
  if (pick) return pick;
  // Woord voor woord past niet bij een boek; daar lees je een gewone bladzijde met een zacht ritme.
  return lesson.exerciseId === 'rsvp' || lesson.support === 'innerstem' ? 'flow' : 'chunks';
}

/**
 * Husselt de antwoorden van elke vraag, vast per tekst (dezelfde tekst toont dezelfde volgorde),
 * zodat de plek van het goede antwoord niets verraadt.
 */
export function shuffleQuestions(passage: Passage): Passage {
  let h = 2166136261;
  for (const c of passage.id) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const random = () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; };
  return {...passage, questions: passage.questions.map(q => {
    const order = q.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
    return {...q, options: order.map(i => q.options[i]), answer: order.indexOf(q.answer)};
  })};
}

/**
 * Wat je groei betekent, in gewone taal: tempo en begrip los bekeken, vergeleken met je begintest.
 * Geeft null zolang er nog niets te vergelijken is.
 */
export function growthSentence(baseline: {wpm: number; comprehension: number} | null, latest: {wpm: number; comprehension: number} | null): string | null {
  if (!baseline || !latest || baseline.wpm <= 0) return null;
  const tempo = Math.round((latest.wpm - baseline.wpm) / baseline.wpm * 100);
  const grip = latest.comprehension - baseline.comprehension;
  const gripText = Math.abs(grip) < 10 ? 'met ongeveer hetzelfde begrip' : grip > 0 ? `en je begrijpt ${grip} procentpunt meer` : `maar je begrijpt ${-grip} procentpunt minder`;
  if (tempo >= 5 && grip <= -20) return `Je leest ${tempo}% sneller dan bij je begintest, maar je begrip is flink gedaald. Een iets rustiger tempo levert je nu meer op.`;
  if (tempo >= 5) return `Je leest ${tempo}% sneller dan bij je begintest, ${gripText}.`;
  if (tempo <= -5) return grip >= 10 ? `Je leest wat rustiger dan bij je begintest en begrijpt ${grip} procentpunt meer. Dat is een goede ruil.` : `Je leest ${-tempo}% langzamer dan bij je begintest. Dat gebeurt vaker op een drukke dag; kijk wat de volgende meting doet.`;
  return grip >= 10 ? `Je tempo is gelijk gebleven en je begrijpt ${grip} procentpunt meer.` : `Je tempo en begrip zijn ongeveer gelijk aan je begintest. Groei komt meestal na een paar weken oefenen.`;
}
