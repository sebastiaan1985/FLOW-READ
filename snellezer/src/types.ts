export type SkillId = 'snelheid' | 'begrip' | 'blikveld' | 'focus';
export type TabId = 'today' | 'path' | 'train' | 'progress';
export type ExerciseMode = 'rsvp' | 'chunks' | 'forward' | 'fixation' | 'reading' | 'scan' | 'peripheral' | 'eye' | 'groups' | 'rhythm' | 'relax' | 'paper' | 'wordflash' | 'catcher' | 'sprint' | 'innerstem' | 'skim' | 'flow';
export type Question = { question: string; options: string[]; answer: number };
export type Audience = 'kids6-9' | 'kids9-12' | 'teens' | 'volwassen';
export type Passage = { id: string; title: string; text: string; questions: Question[]; child?: boolean; audience?: Audience; level?: number; collection?: 'kort' | 'lang' | 'leestest' | 'meting'; topic?: string };
export type Exercise = { id: string; title: string; subtitle: string; description: string; skill: SkillId; mode: ExerciseMode; minutes: number; icon: string };
export type Profile = { name: string; ageGroup: 'child' | 'teen' | 'adult'; goal: 'study' | 'work' | 'pleasure'; onboardingComplete: boolean; /** Eigen foto, als klein JPEG-data-adres. Blijft op het apparaat. */ photo?: string };
export type ReadingSettings = { enabled: boolean; font: 'standard' | 'dyslexic' | 'comic'; fontSize: number; letterSpacing: number; wordSpacing: number; lineHeight: number; overlay: 'none' | 'cream' | 'blue' | 'green' | 'pink' | 'lilac'; overlayOpacity: number; background: 'white' | 'cream' | 'dark' | 'gray'; bionic: boolean; syllables: boolean; lineGuide: boolean };
export type SessionResult = { id: string; exerciseId: string; skill: SkillId; wpm: number; comprehension: number | null; words: number; durationSeconds: number; date: string; xp: number; dailyId?: string; passageId?: string; lessonDay?: number; probes?: number; wandered?: number };
export type SavedText = { id: string; title: string; text: string; createdAt: string; questions?: Question[] };
/** Licht, donker, of volgen wat het apparaat doet. */
export type Appearance = 'auto' | 'light' | 'dark';
/** Een Apple- of Google-account. Alleen op dit apparaat bewaard. */
export type Account = { provider: 'apple' | 'google'; id: string; name?: string; email?: string };
export type AppState = { account: Account | null; accountChoiceMade: boolean; /** Testmodus: alle lessen van de leerweg open, voor het testen van de app. */ testMode: boolean; profile: Profile; settings: ReadingSettings; sessions: SessionResult[]; texts: SavedText[]; targetWpm: number; kidsMode: boolean; baseline: { wpm: number; comprehension: number } | null; tempoStreak: number; reminder: { enabled: boolean; hour: number; minute: number }; topTechniques: string[]; installHintDismissed: boolean; appearance: Appearance; books: import('./state/books').BookMeta[]; };
/** Een stuk uit een boek: vanaf welke alinea, en het cumulatieve aantal woorden per alinea. */
export type BookPortion = { id: string; from: number; ends: number[]; startWords: number };
export type TrainingRequest = { exerciseId: string; daily?: boolean; /** Testmodus: een specifieke lesdag openen. */ day?: number; baseline?: boolean; text?: SavedText; book?: BookPortion };
export type AppActions = { onStart: (request: TrainingRequest) => void; onTab: (tab: TabId) => void; onLibrary: () => void; onSettings: () => void; onProfile: () => void; onPrivacy: () => void; onBook: (bookId: string, mode?: string) => void; };
