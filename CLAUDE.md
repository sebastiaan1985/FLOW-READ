# FLOW-READ / Snellezer

Nederlandstalige snelleesapp. Communiceer met de gebruiker in het Nederlands, in gewone taal.

## Wat staat waar

| Pad / branch | Inhoud |
|---|---|
| `snellezer/` op `design-snellezer` | **De app**: Expo SDK 57 / React Native 0.86, ook als webapp. Dit is waar je aan werkt. |
| `snellezer-site/` op `main` | **Promotiesite** snellezer.com: één `index.html` + `privacy.html`, geen build. |
| rest van `main` | De oude webapp (vanilla JS + Supabase). Niet aanraken. |

- Werk app-wijzigingen op een feature-branch en open een PR naar `design-snellezer`.
- Site-wijzigingen: branch vanaf `main`, PR naar `main` (alleen `snellezer-site/`).

## Vercel (team `sebastiaan1985s-projects`)

- `snel-lees-app`: de app als webversie.
- `flow-read-snellezer-site`: de site; Root Directory `snellezer-site`, productie vanaf `main`; domeinen `snellezer.com` (→ `www.snellezer.com`). Vercel Web Analytics staat aan.
- De MCP-koppeling kan projecten lezen en deployen, maar niet aanmaken of instellingen wijzigen.

## Supabase

Project `hmxrwvxfmhsfgfubcpwb` (EU). Tabel `public.waitlist` voor het aanmeldformulier van de site: alleen insert via de publieke sleutel (RLS + kolomrechten).

## App: belangrijkste onderdelen

- Toestand: `src/state/AppProvider.tsx`, `src/state/model.ts` (lokaal opgeslagen, geen server), regels in `src/state/rules.ts`.
- Leerweg: 28 lessen in `src/data/lessons.ts`; `pathProgress` opent één les per kalenderdag.
- **Testmodus**: 7× tikken op de voettekst van *Jouw leesplek*, of `?test=1` in de webversie. Dan staan alle 28 lessen open (knop *Start* per les) en kun je de leerweg resetten.
- Inloggen (`src/screens/SignInScreen.tsx`, `src/state/auth.ts`): Apple op iOS; Google alleen als `EXPO_PUBLIC_GOOGLE_*_CLIENT_ID` gezet is. Account blijft lokaal. Zie `snellezer/AUTH.md`.
- Teksten toevoegen: `scripts/extra/*.json` + `node scripts/add-texts.mjs`.
- Tempo: één besluit `decideTempo` in `src/state/rules.ts` (grenzen in `TEMPO`); de melding én de volgende oefening gebruiken dat besluit. Tempo-push: `pushPlan` past de sprint aan op het gemeten effect.
- Tekstbibliotheek: `textPool`/`libraryFor` in `src/data/content.ts`; tekstkiezer `src/components/TextPicker.tsx` in elke oefening met tekst. Eigen teksten zonder vragen krijgen invulvragen (`src/state/questions.ts`).
- Voortgang en beloningen: `src/state/progress.ts` (dag 1 tegenover dag 28, records met begrip, levels, reeksniveaus, bonus-XP); vieringen in `src/components/Celebration.tsx`; uitdagingen in `src/data/challenges.ts`.
- Oogtraining: `src/components/EyeStage.tsx` (patronen, versnellen, focuswissel) en `RelaxStage.tsx` (20/20/20, palming). Perifeer zien: `PeripheralStage.tsx` + fixeren/flitsen/vragen in `TrainingScreen.tsx`.
- Oefenvoorkeuren (flitstijd, afstand, leestijd 1–100, streefdoel) staan in `state.prefs`; gevierde mijlpalen in `state.celebrated`.
- Specificatie: *Snellezer Master Ontwikkelinstructies v1.1* (aangeleverd door de gebruiker); de traceability-lijst R01–R51 staat in de PR van oktober 2026.

## Controleren voor elke push (in `snellezer/`)

```
npx tsc --noEmit
npm test
npm run build:web
```

## Openstaand

- iOS/Android-builds via EAS (`eas.json` staat er); Apple Developer- en Google Play-account worden geregeld door de gebruiker.
- Rustig ritme: hoofdstuktitel van een e-book plakt aan de eerste zin en alineagrenzen verdwijnen (`htmlToParagraphs` + flow-weergave).
- De leespagina in Rustig ritme vult maar ongeveer half het scherm.
- Store-materiaal: privacyverklaring voor de app als URL, screenshots, beschrijving, leeftijdsclassificatie.
- Officiële store-badges op site en in de explainer-video zodra de app live is.
- Abonnement (~€2/maand) en *Aankopen herstellen*: gegevenslaag staat klaar in `src/state/entitlement.ts`, store-koppeling volgt als de accounts er zijn (zie `snellezer/RELEASE.md`).
