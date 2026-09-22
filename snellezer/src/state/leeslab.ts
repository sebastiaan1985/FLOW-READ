/** Het Dyslexie Leeslab: zeven lessen die nauwkeurigheid vóór snelheid zetten. Pure logica, los te testen. */
export type LabWord = {word: string; distractors: string[]; level: number};
export type LabHunt = {word: string; wrong: string; start: number; length: number; level: number};
export type LabBuild = {word: string; parts: string[]; hint: string; level: number};
export type LabContext = {sentence: string; answer: string; options: string[]; level: number};
export type LabData = {words: LabWord[]; hunt: LabHunt[]; build: LabBuild[]; context: LabContext[]};
export type LabMode = 'listen' | 'hunt' | 'build' | 'context' | 'flash';
export type LabLesson = {id: string; title: string; goal: string; mode: LabMode; level: number; icon: string};
export type LabProgress = {lessons: Record<string, {best: number; mastered: boolean}>; review: string[]};

export const LAB_ROUNDS = 10;
export const LAB_MASTERY = 80;

export const LAB_LESSONS: LabLesson[] = [
  {id: 'horen', title: 'Horen en herkennen', goal: 'Koppel een gehoord woord aan het juiste woordbeeld.', mode: 'listen', level: 0, icon: 'volume'},
  {id: 'letters', title: 'Letters scherp zien', goal: 'Vind de verwisselde letter, zoals b en d, p en b, v en f.', mode: 'hunt', level: 0, icon: 'search'},
  {id: 'klankgroepen', title: 'Klankgroepen', goal: 'Herken ie en ei, ou en au en andere lettercombinaties.', mode: 'hunt', level: 1, icon: 'text'},
  {id: 'woorddelen', title: 'Woorden bouwen', goal: 'Zet woorddelen in de goede volgorde.', mode: 'build', level: 1, icon: 'grid'},
  {id: 'betekenis', title: 'Zin en betekenis', goal: 'Gebruik de zin om het passende woord te kiezen.', mode: 'context', level: 1, icon: 'book'},
  {id: 'lange-woorden', title: 'Lange woorden', goal: 'Bouw langere woorden op, zonder te gokken.', mode: 'build', level: 2, icon: 'grid'},
  {id: 'vloeiend', title: 'Vloeiend herkennen', goal: 'Herken bekende woorden vlot, met nauwkeurigheid voorop.', mode: 'flash', level: 2, icon: 'zap'},
];

export const emptyLabProgress = (): LabProgress => ({lessons: {}, review: []});

export function labUnlocked(index: number, progress: LabProgress): boolean {
  return index === 0 || !!progress.lessons[LAB_LESSONS[index - 1]?.id]?.mastered;
}

export type LabRound =
  | {kind: 'choose'; key: string; answer: string; options: string[]; speak?: string; flash?: string; sentence?: string}
  | {kind: 'hunt'; key: string; word: string; wrong: string; start: number; length: number}
  | {kind: 'build'; key: string; word: string; parts: string[]; shuffled: string[]; hint: string};

function seeded(seed: number) {
  let s = (seed >>> 0) || 1;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/** Tien rondes voor een les. Woorden die eerder fout gingen komen als eerste terug. */
export function buildLabRounds(lesson: LabLesson, data: LabData, review: readonly string[], seed = Date.now()): LabRound[] {
  const random = seeded(seed);
  const prefix = lesson.mode === 'flash' ? 'listen' : lesson.mode;
  const pick = <T extends {level: number}>(pool: T[], key: (x: T) => string) => {
    const near = pool.filter(x => x.level <= lesson.level && x.level >= lesson.level - 1);
    const source = near.length >= LAB_ROUNDS ? near : pool;
    const again = source.filter(x => review.includes(`${prefix}:${key(x)}`)).slice(0, 3);
    const rest = shuffle(source.filter(x => !again.includes(x)), random);
    return [...again, ...rest].slice(0, LAB_ROUNDS);
  };
  switch (lesson.mode) {
    case 'listen':
    case 'flash':
      return pick(data.words, w => w.word).map(w => ({kind: 'choose', key: `listen:${w.word}`, answer: w.word, options: shuffle([w.word, ...shuffle(w.distractors, random).slice(0, 3)], random), ...(lesson.mode === 'listen' ? {speak: w.word} : {flash: w.word})}));
    case 'hunt':
      return pick(data.hunt.filter(h => h.level === lesson.level), h => h.wrong).map(h => ({kind: 'hunt', key: `hunt:${h.wrong}`, word: h.word, wrong: h.wrong, start: h.start, length: h.length}));
    case 'build':
      return pick(data.build, b => b.word).map(b => {
        let shuffled = shuffle(b.parts, random);
        if (shuffled.join('|') === b.parts.join('|') && b.parts.length > 1) shuffled = [...b.parts].reverse();
        return {kind: 'build', key: `build:${b.word}`, word: b.word, parts: b.parts, shuffled, hint: b.hint};
      });
    case 'context':
      return pick(data.context, c => c.answer).map(c => ({kind: 'choose', key: `context:${c.answer}`, answer: c.answer, options: shuffle(c.options, random), sentence: c.sentence}));
  }
}

/** Een tik in Letter Jacht is goed als hij binnen de verwisselde letters valt. */
export function huntHit(round: {start: number; length: number}, index: number): boolean {
  return index >= round.start && index < round.start + round.length;
}

/** Werk de voortgang bij na een les: beste score, beheersing en de herhaalset. */
export function finishLab(progress: LabProgress, lessonId: string, results: {key: string; correct: boolean}[]): {progress: LabProgress; score: number; mastered: boolean; firstMastery: boolean} {
  const score = results.length ? Math.round(results.filter(r => r.correct).length / results.length * 100) : 0;
  const before = progress.lessons[lessonId];
  const mastered = score >= LAB_MASTERY;
  const wrong = results.filter(r => !r.correct).map(r => r.key);
  const right = new Set(results.filter(r => r.correct).map(r => r.key));
  const review = [...new Set([...wrong, ...progress.review.filter(k => !right.has(k))])].slice(0, 40);
  return {
    progress: {lessons: {...progress.lessons, [lessonId]: {best: Math.max(before?.best ?? 0, score), mastered: !!before?.mastered || mastered}}, review},
    score, mastered, firstMastery: mastered && !before?.mastered,
  };
}
