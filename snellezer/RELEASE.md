# Snellezer — release

Stand: 22 september 2026, branch `design-snellezer`.

## Wat er in de MVP zit

| Onderdeel | Stand |
|---|---|
| Dagelijkse lus | Elke dag één les (wat, waarom, hoe) die de oefening zelf instelt, een hint tijdens de oefening en terugkoppeling op je resultaat |
| Curriculum | 28 lessen in 4 weken (`src/data/lessons.ts`), hermetingen op dag 7, 14, 21 en 28, eindmeting tegen dag 1. Na dag 28 herhaal je de lessen |
| Oefeningen | 20 oefeningen, waaronder Innerlijke stem (een lichtere binnenstem op een metronoom of met nadruk op kernwoorden) en Skimmen & previewing. Chunks, fixatie, vooruit lezen en woord voor woord hebben elk een eigen weergave. Woordgroepen worden per zinsdeel geknipt (de oude man | liep langzaam | naar de haven), niet per vast aantal woorden. Bij lange teksten en boeken vraagt de app om de 75 seconden of je er nog bij was, en laat na afloop zien hoe vaak je afdwaalde. Oogbeweging, Leesritme en Oogontspanning staan apart onder Extra. Lange teksten groeien mee van Starter via Gevorderd naar Expert |
| Dyslexie Leeslab | 7 lessen: horen en herkennen (met voorlezen), letters scherp zien, klankgroepen, woorden bouwen, zin en betekenis, lange woorden en vloeiend herkennen. Met 8 van de 10 goed opent de volgende les; fout gelezen woorden komen terug in een herhaalset. Daarnaast lettertype, afstand, kleurfilter en achtergrond |
| Inhoud | 251 teksten: 151 korte teksten voor volwassenen en tieners, 30 lange teksten (10 per niveau), 10 meetteksten en 60 kinderteksten, allemaal met begripsvragen. De meetteksten voor begintest en hermetingen zijn gelijkwaardig: 400 tot 500 woorden, vergelijkbare zins- en woordlengte, 5 vragen en een onderwerp dat niet ook als oefentekst voorkomt. Een test bewaakt dat. Een tekst komt pas terug als je de rest hebt gelezen. Met Andere tekst wissel je tijdens een oefening van tekst; de ronde begint dan opnieuw en telt niet mee |
| Onderbouwd | De lessen volgen het leesonderzoek: je binnenstem wordt lichter, niet stil; alleen onnodig terugspringen wordt afgeleerd; perifeer zien wordt eerlijk uitgelegd; in plaats van het S-patroon leer je drie versnellingen (tempo per doel) |
| Eerlijk meten | Te snelle metingen worden geweigerd. Een begintest met minder dan 60% begrip telt pas na één rustigere herkansing, zodat je vertrekpunt klopt. Volledige XP, lessen en records pas vanaf 67% begrip. Herlezen op dezelfde dag levert minder op. Het doeltempo gaat omlaag onder 70% begrip en omhoog na twee keer minstens 80% |
| Voortgang | Effectief leestempo (tempo × begrip) met je nulmeting als stippellijn, en meetmomenten |
| Gewoonte | Reeks met één rustdag per week, daguitdaging, tip van de dag, 12 mijlpalen, een persoonlijke top 3 van technieken (vanaf week 4), deel je groei, een installatiehint voor het beginscherm en een dagelijkse herinnering (alleen in de app) |
| Boeken en PDF's | Op Vandaag staat elke dag je boek klaar: na de oefeningen lees je tien minuten verder in de leesvorm die bij de les past (nooit woord voor woord). Zonder boek nodigt de app uit er een toe te voegen. Importeer een e-book (EPUB) of PDF. De tekst wordt op het apparaat uitgelezen, met hoofdstukken (uit de EPUB, de PDF-inhoudsopgave of koppen in grote letters). Je leest in porties van 5 tot 20 minuten in elke leesvorm, en een bladwijzer houdt bij waar je bent. E-books met DRM en gescande PDF's (alleen afbeeldingen) worden geweigerd met uitleg. PDF en EPUB werken in de webversie en in de app. In de app leest een onzichtbare webview met dezelfde PDF-lezer (pdf.js) de PDF uit, tot 30 MB |
| Eigen tekst | Plakken, .txt-bestand of een link (alleen openbare https-pagina's), met eigen begripsvragen. Op Android kun je een artikel via Delen rechtstreeks naar de geïnstalleerde webapp sturen |
| Toegankelijkheid | Dyslexie Leeslab, reduce-motion en labels op alle bediening |
| Privacy | Geen account en geen tracking; alles blijft op het apparaat. Privacyverklaring in de app en op `/privacy.html` |
| Kwaliteit | Typecheck schoon, 36 unit tests, de iOS- en Android-bundels bouwen (`npx expo export --platform ios --platform android`), `expo prebuild` maakt de native projecten zonder fouten, CI op elke wijziging, en in de browser doorlopen: onboarding, begintest, een volledige lesdag, dag 3–26 en de kindermodus |

## Web — publiceren

**Nu:** het bestaande Vercel-project `snel-lees-app` bouwt van deze branch automatisch een preview. De `vercel.json` in de hoofdmap zorgt dat die preview de nieuwe app is. De vaste link is `snel-lees-app-git-design-snellezer-sebastiaan1985s-projects.vercel.app`; daarvoor moet je bij Vercel ingelogd zijn. Productie op `main` verandert niet.

**Voor een eigen, openbaar adres:**

1. Maak in Vercel een project op deze repository en zet **Root Directory** op `snellezer`.
2. De rest leest Vercel uit `snellezer/vercel.json`: `npm ci`, `npm run build:web` en uitvoer in `dist`, met CSP- en beveiligingsheaders.
3. Controleer na de eerste deploy:
   - `/` opent;
   - `/privacy.html` opent;
   - "Zet op beginscherm" in Safari geeft het groene icoon;
   - na één bezoek opent de app ook in vliegtuigmodus.

Pas je iets aan in de privacytekst of de iconen, draai dan eerst `npm run web:extras`. Die opdracht vult `public/` opnieuw.

Nieuwe teksten schrijf je in `scripts/extra/*.json`. Daarna controleert en bundelt `node scripts/add-texts.mjs` ze in `src/data/library-extra.json`. Het script weigert dubbele titels, ontbrekende antwoorden en te korte teksten.

## iPhone en Android — publiceren

Nodig: een Expo-account (gratis), een Apple Developer-account (€99 per jaar) en een Google Play Console-account (eenmalig $25).

```bash
cd snellezer
npm install -g eas-cli
eas login
eas init                                 # koppelt het project en zet het projectId in app.json
eas build -p ios --profile preview       # testversie via TestFlight of ad hoc
eas build -p android --profile preview   # APK om zelf te installeren
eas build -p all --profile production    # store-builds; buildnummers lopen automatisch op
eas submit -p ios                        # naar App Store Connect
eas submit -p android                    # naar Google Play
```

Voor alleen zelf testen op je iPhone is er Expo Go: `npx expo start` en de QR-code scannen.

**Bundle-ID.** De app gebruikt `nl.slimwerken.snellezer`. De oude versie op `main` gebruikte `nl.snellees.trainer`. Heb je die al vastgelegd in App Store Connect of Play Console, zet dan hetzelfde ID in `app.json` voordat je de eerste store-build maakt.

## Storeformulieren

- **Apple, privacylabel:** "Data Not Collected". Er is geen tracking, dus App Tracking Transparency is niet nodig.
- **Google Play, gegevensveiligheid:** er worden geen gegevens verzameld of gedeeld. Er is geen account, dus een verwijderpagina voor accounts is niet nodig.
- **Privacy-URL:** `https://<jouw-domein>/privacy.html`.
- **Leeftijd:** 4+ / PEGI 3. Er zijn geen aankopen en geen advertenties.
- **Teksten, screenshots en feature graphic:** staan klaar in `store/` (zie `store/STORE.md`): naam, subtitel, trefwoorden, korte en lange beschrijving, 7 screenshots voor iPhone 6,7" (1290 × 2796) en Android (1080 × 1920), met en zonder kop, en de Google Play feature graphic (1024 × 500).

## Wat bewust (nog) niet in de MVP zit

- **Accounts en synchronisatie tussen apparaten.** De Supabase-backend van `main` is ervoor klaar, maar dan zijn accountverwijdering in de app en een nieuwe privacyverklaring verplicht.
- **Een kindversie van de 28 lessen.** De kindermodus heeft een eigen speelse dagtraining en 33 teksten.
- **Meerdere profielen met avatars en het kinderavontuur** (werelden, sterren, levels). De app is voor één lezer per apparaat.
- **Confetti, emoji en de verrassingsbonus.** Die passen niet bij het rustige ontwerp.

Wel overgenomen uit `main`, zonder account:
- de doneerlink naar Stichting Lezen & Schrijven;
- deel je groei;
- de persoonlijke top 3;
- het Dyslexie Leeslab;
- Innerlijke stem;
- Skimmen & previewing;
- adaptieve lange teksten;
- delen naar de app;
- de snelkoppeling "Les van vandaag".
