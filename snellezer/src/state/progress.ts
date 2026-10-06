import type {AppState, SessionResult} from '../types';
import {dateKey, shiftDay} from './model.ts';
import {effectiveWpm, median, MEASURED_EXERCISES, TEMPO} from './rules.ts';

/* ── Voortgang, records en beloningen ──────────────────────────────────────────
 * Eén plek voor alles wat vooruitgang meet of beloont. Snelheid telt nooit los van begrip.
 */

const measured = (sessions: readonly SessionResult[]) => sessions.filter(s => MEASURED_EXERCISES.includes(s.exerciseId) && s.wpm > 0 && s.comprehension !== null);
const eff = (s: SessionResult) => effectiveWpm(s.wpm, s.comprehension);

/**
 * Constantheid: hoe dicht je metingen bij elkaar liggen, van 0 tot 100.
 * 100 betekent elke keer precies even snel; één uitschieter drukt de score. Minder dan twee metingen: nog niet te zeggen.
 */
export function consistency(values: readonly number[]): number | null {
  if (values.length < 2) return null;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  if (!mean) return null;
  const sd = Math.sqrt(values.reduce((a, v) => a + (v - mean) ** 2, 0) / values.length);
  return Math.max(0, Math.min(100, Math.round(100 - sd / mean * 200)));
}

/** De langste reeks dagen achter elkaar waarop je oefende. */
export function longestStreak(sessions: readonly SessionResult[]): number {
  const days = [...new Set(sessions.map(s => dateKey(s.date)))].sort();
  let best = 0, run = 0, prev = '';
  for (const d of days) { run = prev && shiftDay(1, new Date(prev + 'T12:00:00')) === d ? run + 1 : 1; best = Math.max(best, run); prev = d; }
  return best;
}

export type Snapshot = {wpm: number; comprehension: number; effective: number; date: string};
const snap = (s: SessionResult): Snapshot => ({wpm: s.wpm, comprehension: s.comprehension ?? 0, effective: eff(s), date: s.date});

/**
 * Dag 1 tegenover dag 28. De nulmeting is je begintest; de eindmeting is de meting van dag 28 (of je laatste hermeting).
 * Daarnaast een duurzame snelheid: de mediaan van je drie eerste en drie laatste metingen, zodat één toevalstreffer
 * geen vooruitgang lijkt.
 */
export function pathReport(state: Pick<AppState, 'sessions' | 'baseline'>) {
  const all = measured(state.sessions);
  const baselineSession = state.sessions.find(s => s.exerciseId === 'baseline' && s.comprehension !== null);
  const start: Snapshot | null = baselineSession ? snap(baselineSession) : state.baseline ? {wpm: state.baseline.wpm, comprehension: state.baseline.comprehension, effective: effectiveWpm(state.baseline.wpm, state.baseline.comprehension), date: ''} : null;
  const retests = state.sessions.filter(s => s.exerciseId === 'retest' && s.comprehension !== null);
  const finalSession = retests.find(s => s.lessonDay === 28) ?? retests[retests.length - 1];
  const end: Snapshot | null = finalSession ? snap(finalSession) : null;
  const first = all.slice(0, 3), last = all.slice(-3);
  const sustainedStart = first.length ? median(first.map(eff)) : 0, sustainedEnd = all.length >= 4 ? median(last.map(eff)) : 0;
  const wpmGain = start && end ? end.wpm - start.wpm : 0;
  return {
    start, end,
    wpmGain, wpmGainPct: start && end && start.wpm ? Math.round(wpmGain / start.wpm * 100) : 0,
    effectiveGainPct: start && end && start.effective ? Math.round((end.effective - start.effective) / start.effective * 100) : 0,
    comprehensionChange: start && end ? end.comprehension - start.comprehension : 0,
    averageComprehension: all.length ? Math.round(all.reduce((a, s) => a + (s.comprehension ?? 0), 0) / all.length) : null,
    sustainedStart, sustainedEnd,
    consistencyStart: consistency(first.map(eff)), consistencyEnd: all.length >= 4 ? consistency(last.map(eff)) : null,
    daysTrained: new Set(state.sessions.map(s => dateKey(s.date))).size,
    longestStreak: longestStreak(state.sessions),
    records: records(state.sessions),
    measurements: all.length,
  };
}

/** Persoonlijke records, altijd met het begrip erbij. Snelheid zonder begrip telt niet als record. */
export function records(sessions: readonly SessionResult[]) {
  const ok = measured(sessions).filter(s => (s.comprehension ?? 0) >= TEMPO.gate);
  const bestEff = ok.reduce<SessionResult | null>((b, s) => !b || eff(s) > eff(b) ? s : b, null);
  const bestWpm = ok.reduce<SessionResult | null>((b, s) => !b || s.wpm > b.wpm ? s : b, null);
  const focus = sessions.filter(s => s.score !== undefined && s.exerciseId === 'focusswitch').reduce((b, s) => Math.max(b, s.score ?? 0), 0);
  return {
    effective: bestEff ? {value: eff(bestEff), wpm: bestEff.wpm, comprehension: bestEff.comprehension ?? 0, date: bestEff.date} : null,
    speed: bestWpm ? {value: bestWpm.wpm, comprehension: bestWpm.comprehension ?? 0, date: bestWpm.date} : null,
    focus: focus || null,
    streak: longestStreak(sessions),
  };
}
/** Is deze sessie een nieuw snelheidsrecord, met voldoende begrip? */
export function isRecord(sessions: readonly SessionResult[], s: Pick<SessionResult, 'exerciseId' | 'wpm' | 'comprehension'>): boolean {
  if (!MEASURED_EXERCISES.includes(s.exerciseId) || s.comprehension === null || s.comprehension < TEMPO.gate) return false;
  const best = records(sessions).effective?.value ?? 0;
  return best > 0 && effectiveWpm(s.wpm, s.comprehension) > best;
}

/* ── Levels ──────────────────────────────────────────────────────────────── */
export const LEVELS = [
  {xp: 0, title: 'Starter'}, {xp: 100, title: 'Lezer'}, {xp: 250, title: 'Vlotte lezer'}, {xp: 500, title: 'Doorlezer'},
  {xp: 850, title: 'Snelle lezer'}, {xp: 1300, title: 'Kenner'}, {xp: 1900, title: 'Expert'}, {xp: 2650, title: 'Meesterlezer'},
  {xp: 3600, title: 'Virtuoos'}, {xp: 4800, title: 'Snellezer'},
];
export function levelFor(xp: number) {
  let i = 0;
  while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].xp) i++;
  const next = LEVELS[i + 1];
  return {level: i + 1, title: LEVELS[i].title, xp, from: LEVELS[i].xp, to: next?.xp ?? null, share: next ? (xp - LEVELS[i].xp) / (next.xp - LEVELS[i].xp) : 1, nextTitle: next?.title ?? null};
}

/* ── Reeksniveaus: hoe langer, hoe exclusiever ───────────────────────────── */
export const STREAK_TIERS = [
  {days: 0, title: 'Begin', icon: 'flame', color: '#9AA8A1'},
  {days: 3, title: 'Brons', icon: 'Flame', color: '#C08457'},
  {days: 7, title: 'Zilver', icon: 'Medal', color: '#8E9BA6'},
  {days: 14, title: 'Goud', icon: 'Award', color: '#D9A520'},
  {days: 21, title: 'Platina', icon: 'Crown', color: '#5FA8A0'},
  {days: 28, title: 'Diamant', icon: 'Gem', color: '#4E7FD9'},
  {days: 50, title: 'Legende', icon: 'Sparkles', color: '#9B5DE5'},
];
export function streakTier(days: number) {
  let i = 0;
  while (i + 1 < STREAK_TIERS.length && days >= STREAK_TIERS[i + 1].days) i++;
  const next = STREAK_TIERS[i + 1];
  return {...STREAK_TIERS[i], rank: i, next: next ?? null, toNext: next ? next.days - days : 0, share: next ? (days - STREAK_TIERS[i].days) / (next.days - STREAK_TIERS[i].days) : 1};
}

/* ── Extra XP voor zinvol gedrag ─────────────────────────────────────────── */
export const BONUS = {lesson: 10, record: 15, challenge: 10, streak: 5} as const;
/** Bonus-XP met een reden erbij. Nooit voor snelheid alleen: een record telt pas met begrip, en een te snelle ronde levert niets extra op. */
export function bonusXp({lessonPassed, record, challenge, firstToday}: {lessonPassed: boolean; record: boolean; challenge: boolean; firstToday: boolean}): {xp: number; reasons: string[]} {
  const reasons: string[] = []; let xp = 0;
  if (lessonPassed) { xp += BONUS.lesson; reasons.push(`+${BONUS.lesson} les gehaald`); }
  if (record) { xp += BONUS.record; reasons.push(`+${BONUS.record} record met begrip`); }
  if (challenge) { xp += BONUS.challenge; reasons.push(`+${BONUS.challenge} uitdaging`); }
  if (firstToday) { xp += BONUS.streak; reasons.push(`+${BONUS.streak} vandaag geoefend`); }
  return {xp, reasons};
}

/* ── Doelen en voortgangsbalken ──────────────────────────────────────────── */
/** Een persoonlijk streefdoel. 1000 wpm mag als uitdaging, maar is geen belofte: begrip gaat altijd voor. */
export const STRETCH_GOAL = 1000;
export function goalFor(state: Pick<AppState, 'baseline'> & {prefs?: {goalWpm?: number | null}}): number {
  const own = state.prefs?.goalWpm;
  if (own) return own;
  return state.baseline ? Math.round(effectiveWpm(state.baseline.wpm, state.baseline.comprehension) * 1.3 / 10) * 10 : 300;
}

/* ── Oogtraining ─────────────────────────────────────────────────────────── */
/** Oogtraining: snelle oogsprongen, volgbewegingen en je blikveld. Ontspanning staat er bewust los van. */
export const EYE_TRAINING=['peripheral','eye','eight','focusswitch'];
/** Ontspanning: prettig tussendoor, maar het maakt je niet sneller. */
export const RELAX_EXERCISES=['relax','palming','rhythm'];
/** Oogtraining deze week: aantal sessies, met vijf als weekdoel. */
export function eyeWeek(sessions:readonly {exerciseId:string;date:string}[],now=new Date()){const from=new Date(now);from.setDate(from.getDate()-6);from.setHours(0,0,0,0);return sessions.filter(x=>EYE_TRAINING.includes(x.exerciseId)&&new Date(x.date)>=from).length;}
