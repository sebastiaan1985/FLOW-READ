import {dateKey} from '../state/model.ts';
import {effectiveWpm, MEASURED_EXERCISES, TEMPO} from '../state/rules.ts';
import type {SessionResult} from '../types';

/**
 * Een uitdaging is pas gehaald als de oefening af is én, waar dat kan, het begrip klopt.
 * `check` krijgt de sessie en het oefentempo van vóór die sessie.
 */
export type Challenge = {id: string; label: string; exerciseId: string; check?: (s: SessionResult) => boolean};
const understood = (s: SessionResult) => s.comprehension !== null && s.comprehension >= TEMPO.gate;

/** Daguitdagingen: snelheid en begrip samen, plus een paar korte oogtrainingen. */
export const CHALLENGES: Challenge[] = [
 {id: 'push70', label: 'Haal een Tempo Push met minstens 70% begrip', exerciseId: 'push', check: understood},
 {id: 'faster', label: 'Lees sneller dan je oefentempo, met minstens 70% begrip', exerciseId: 'chunks', check: s => understood(s) && !!s.tempoFrom && s.wpm > s.tempoFrom},
 {id: 'eye', label: 'Doe een oogtraining: puntvolgen of het liggend achtje', exerciseId: 'eye', check: s => ['eye', 'eight'].includes(s.exerciseId)},
 {id: 'focus', label: 'Haal 80% bij de focuswissel', exerciseId: 'focusswitch', check: s => (s.score ?? 0) >= 80},
 {id: 'paper', label: 'Lees een tekst met de leesgids, met minstens 70% begrip', exerciseId: 'paper', check: understood},
 {id: 'peripheral', label: 'Herken 7 van de 10 woordparen bij Perifeer zien', exerciseId: 'peripheral', check: s => (s.score ?? 0) >= 70},
 {id: 'measure', label: 'Lees een leestest met minstens 80% begrip', exerciseId: 'reading', check: s => (s.comprehension ?? 0) >= 80},
];

/** Elke dag een andere uitdaging, dezelfde voor de hele dag. */
export function challengeOfDay(date: Date = new Date()): Challenge {
  return CHALLENGES[date.getDate() % CHALLENGES.length];
}

/** Telt deze sessie voor de uitdaging? Spellen en de focuswissel geven hun score als `score` (0–100). */
export function meetsChallenge(challenge: Challenge, s: SessionResult): boolean {
  const sameExercise = s.exerciseId === challenge.exerciseId || (challenge.id === 'eye' && s.exerciseId === 'eight');
  return sameExercise && (!challenge.check || challenge.check(s));
}

/** Afgerond als een sessie van vandaag aan de uitdaging voldoet — geen aparte opslag nodig. */
export function challengeDone(sessions: SessionResult[], challenge: Challenge, date: Date = new Date()): boolean {
  return sessions.some(s => dateKey(s.date) === dateKey(date) && meetsChallenge(challenge, s));
}

/** Weekuitdagingen: regelmaat en begrip, niet alleen snelheid. */
export const WEEKLY = [
  {id: 'days5', label: 'Oefen op 5 dagen deze week', goal: 5, count: (week: SessionResult[]) => new Set(week.map(s => dateKey(s.date))).size},
  {id: 'understood3', label: 'Lees 3 keer met minstens 80% begrip', goal: 3, count: (week: SessionResult[]) => week.filter(s => (s.comprehension ?? 0) >= 80).length},
  {id: 'eye4', label: 'Doe 4 oogtrainingen', goal: 4, count: (week: SessionResult[]) => week.filter(s => ['eye', 'eight', 'focusswitch', 'peripheral'].includes(s.exerciseId)).length},
  {id: 'effective', label: 'Haal 2 keer je beste effectieve tempo van vorige week', goal: 2, count: (week: SessionResult[], before: SessionResult[]) => { const best = Math.max(0, ...before.filter(s => MEASURED_EXERCISES.includes(s.exerciseId)).map(s => effectiveWpm(s.wpm, s.comprehension))); return best ? week.filter(s => MEASURED_EXERCISES.includes(s.exerciseId) && effectiveWpm(s.wpm, s.comprehension) >= best).length : 0; }},
];
/** De uitdaging van deze week (maandag tot en met zondag) en hoe ver je bent. */
export function weeklyChallenge(sessions: readonly SessionResult[], now = new Date()) {
  const monday = new Date(now); monday.setHours(0, 0, 0, 0); monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const lastMonday = new Date(monday); lastMonday.setDate(lastMonday.getDate() - 7);
  const week = sessions.filter(s => new Date(s.date) >= monday);
  const before = sessions.filter(s => new Date(s.date) >= lastMonday && new Date(s.date) < monday);
  const weekNumber = Math.floor((monday.getTime() / 86400000 + 3) / 7);
  const c = WEEKLY[weekNumber % WEEKLY.length];
  const done = Math.min(c.goal, c.count(week, before));
  return {id: c.id, label: c.label, goal: c.goal, done, complete: done >= c.goal};
}
