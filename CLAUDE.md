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
