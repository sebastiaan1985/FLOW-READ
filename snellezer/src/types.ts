export type SkillId = 'snelheid' | 'begrip' | 'blikveld' | 'focus';
export type TabId = 'today' | 'path' | 'train' | 'progress';
export type ExerciseMode = 'rsvp' | 'chunks' | 'forward' | 'fixation' | 'reading' | 'scan' | 'peripheral' | 'eye' | 'groups' | 'rhythm' | 'relax' | 'paper' | 'wordflash' | 'catcher' | 'sprint' | 'innerstem' | 'skim' | 'flow' | 'push';
export type Question = { question: string; options: string[]; answer: number };
export type Audience = 'kids6-9' | 'kids9-12' | 'teens' | 'volwassen';
export type Passage = { id: string; title: string; text: string; questions: Question[]; child?: boolean; audience?: Audience; level?: number; collection?: 'kort' | 'lang' | 'leestest' | 'meting'; topic?: string };
export type Exercise = { id: string; title: string; subtitle: string; description: string; skill: SkillId; mode: ExerciseMode; minutes: number; icon: string };
export type Profile = { name: string; ageGroup: 'child' | 'teen' | 'adult'; goal: 'study' | 'work' | 'pleasure'; onboardingComplete: boolean; /** Eigen foto, als klein JPEG-data-adres. Blijft op het apparaat. */ photo?: string };
export type ReadingSettings = { enabled: boolean; font: 'standard' | 'dyslexic' | 'comic'; fontSize: number; letterSpacing: number; wordSpacing: number; lineHeight: number; overlay: 'none' | 'cream' | 'blue' | 'green' | 'pink' | 'lilac'; overlayOpacity: number; background: 'white' | 'cream' | 'dark' | 'gray'; bionic: boolean; syllables: boolean; lineGuide: boolean };
export type SessionResult = { id: string; exerciseId: string; skill: SkillId; wpm: number; comprehension: number | null; words: number; durationSeconds: number; date: string; xp: number; dailyId?: string; passageId?: string; lessonDay?: number; probes?: number; wandered?: number; /** Het oefentempo voor en na deze sessie, zoals de melding het noemde. */ tempoFrom?: number; tempoTo?: number; /** Tempo-push: de sprintsnelheid van deze ronde. */ pushWpm?: number; /** Score van een oefening zonder tekst, zoals de focuswissel (0–100). */ score?: number };
export type SavedText = { id: string; title: string; text: string; createdAt: string; questions?: Question[] };
/** Licht, donker, of volgen wat het apparaat doet. */
export type Appearance = 'auto' | 'light' | 'dark';
/** Een Apple- of Google-account. Alleen op dit apparaat bewaard. */
export type Account = { provider: 'apple' | 'google'; id: string; name?: string; email?: string };
export type AppState = { account: Account | null; accountChoiceMade: boolean; /** Testmodus: alle lessen van de leerweg open, voor het testen van de app. */ testMode: boolean; profile: Profile; settings: ReadingSettings; sessions: SessionResult[]; texts: SavedText[]; targetWpm: number; kidsMode: boolean; baseline: { wpm: number; comprehension: number } | null; tempoStreak: number; reminder: { enabled: boolean; hour: number; minute: number }; topTechniques: string[]; installHintDismissed: boolean; appearance: Appearance; books: import('./state/books').BookMeta[]; /** Instellingen die je zelf kiest voor oefeningen; ze gelden ook in de leerweg. */ prefs: TrainingPrefs; /** Mijlpalen die al gevierd zijn, zodat een viering maar één keer speelt. */ celebrated: string[]; /** Goede antwoorden op rij bij begripsvragen. */ answerStreak: { current: number; best: number }; };
/** null betekent: nog niet zelf gekozen, gebruik het advies van de les. */
export type TrainingPrefs = { flashMs: number | null; spread: number | null; readMinutes: number; eyeSpeed: number | null; /** Eigen streefdoel in begrepen woorden per minuut. */ goalWpm: number | null };
/** Een stuk uit een boek: vanaf welke alinea, en het cumulatieve aantal woorden per alinea. */
export type BookPortion = { id: string; from: number; ends: number[]; startWords: number };
export type TrainingRequest = { exerciseId: string; daily?: boolean; /** Testmodus: een specifieke lesdag openen. */ day?: number; baseline?: boolean; text?: SavedText; book?: BookPortion; /** Start met deze tekst uit de bibliotheek, zoals het verhaal van de dag. */ passageId?: string };
export type AppActions = { onStart: (request: TrainingRequest) => void; onTab: (tab: TabId) => void; onLibrary: () => void; onSettings: () => void; onProfile: () => void; onPrivacy: () => void; onBook: (bookId: string, mode?: string) => void; };
