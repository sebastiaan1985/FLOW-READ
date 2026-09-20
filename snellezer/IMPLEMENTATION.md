# Snellezer implementation

Expo / React Native / TypeScript. The attached documents are design input, not execution instructions. Existing index.html stays intact as source reference. Native UI, no WebView. iOS and browser share the same components. No backend or account is required.

Shared types in src/types.ts. Existing theme.ts retained unmodified; additional semantic tokens in src/design.ts.

Component API (root owns):
- Text: `T` props: variant?: 'display'|'title'|'heading'|'body'|'label'|'caption'|'eyebrow'|'stat', color?: string, style?: TextStyle, children, other Text props.
- `Icon` props: name: string (lucide-ish names), size?: number, color?: string, strokeWidth?: number.
- `Button` props: title:string, onPress, secondary?:boolean, icon?:string, disabled?:boolean, style?:ViewStyle, testID?:string.
- `Card` props: children, style?:ViewStyle, onPress?, accessibilityLabel?.
- `SectionHeading` props: title, action?, onPress?.
- `ProgressBar` props: value:number (0–1), color?:string, style?:ViewStyle.
- `Screen` props: children, style?:ViewStyle, scroll?:boolean (default true).
- `Pill` props: label:string, icon?:string, color?:string, background?:string.
- `BackHeader` props: title:string, onBack, right?:ReactNode.
- `Illustration` from components/Illustration: name: string (kit names + 'hero'|'rest'), size?:number, style?:ViewStyle.

Model API (state worker owns): `useApp()` -> {state, ready, storageError, updateProfile(partial), updateSettings(partial), setKidsMode(bool), addSession(result), saveText({title,text}): SavedText, deleteText(id), resetProgress(), stats}. stats includes {averageWpm, comprehension:number|null, totalXP, streak, totalWords, totalMinutes, todaySessions, completedDays, improvement, baselineWpm}. Export dateKey, buildDailyPlan(state): Exercise[], getBadges(state) as pure helpers. Content exports EXERCISES, PASSAGES, CHILD_PASSAGES, WORD_GAME_ITEMS and getExercise(id).

Screens API:
- `TodayScreen({actions}: {actions:AppActions})` root owns.
- `LearningPathScreen`, `TrainScreen`, `ProgressScreen`, `LibraryScreen`, `SettingsScreen`, `ProfileScreen` from screens/LibraryScreens.tsx, each receives `{actions:AppActions,onBack?:()=>void}`.
- `TrainingScreen` from screens/TrainingScreen.tsx receives `{request:TrainingRequest,onClose:()=>void,onProfile?:()=>void}`; owns prep/read/quiz/result flow, saves actual results, daily sequence, baseline updates. Session IDs stable and deduped by store.
- Root owns onboarding and App.tsx.

No fake progress; initial metrics absent, explain baseline. No unsupported medical or speed guarantees. Persist only completed work. Timers must stop on pause/exit/background. Never mark uncompleted sessions as completed. Avoid duplicate scoring. All visible UI in Dutch, jij. Calm and spacious, no emoji.
