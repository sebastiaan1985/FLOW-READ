# Snellezer — release

Stand: 22 september 2026, branch `design-snellezer`.

## Wat er in de MVP zit

| Onderdeel | Stand |
|---|---|
| Dagelijkse lus | Elke dag één les (wat, waarom, hoe) die de oefening zelf instelt, een hint tijdens de oefening en terugkoppeling op je resultaat |
| Curriculum | 28 lessen in 4 weken (`src/data/lessons.ts`), hermetingen op dag 7, 14, 21 en 28, eindmeting tegen dag 1. Na dag 28 herhaal je de lessen |
| Oefeningen | 18 oefeningen, waarvan chunks, fixatie, vooruit lezen en woord voor woord elk een eigen weergave hebben |
| Inhoud | 170+ teksten: 58 korte teksten voor volwassenen en tieners, 30 lange teksten, 30 vaste meetteksten en 33 kinderteksten, allemaal met begripsvragen. Een tekst komt pas terug als je de rest hebt gelezen |
| Eerlijk meten | Te snelle metingen worden geweigerd. Volledige XP, lessen en records pas vanaf 67% begrip. Herlezen op dezelfde dag levert minder op. Het doeltempo gaat omlaag onder 70% begrip en omhoog na twee keer minstens 80% |
| Voortgang | Effectief leestempo (tempo × begrip) met je nulmeting als stippellijn, en meetmomenten |
| Gewoonte | Reeks met één rustdag per week, daguitdaging, tip van de dag, 12 mijlpalen en een dagelijkse herinnering (alleen in de app) |
| Eigen tekst | Plakken, .txt-bestand of een link (alleen openbare https-pagina's), met eigen begripsvragen |
| Toegankelijkheid | Dyslexie Leeslab, reduce-motion en labels op alle bediening |
| Privacy | Geen account en geen tracking; alles blijft op het apparaat. Privacyverklaring in de app en op `/privacy.html` |
| Kwaliteit | Typecheck schoon, 21 unit tests, CI op elke wijziging, en in de browser doorlopen: onboarding, begintest, een volledige lesdag, dag 3–26 en de kindermodus |

## Web — publiceren

1. Maak in Vercel een project op deze repository en zet **Root Directory** op `snellezer`. Het bestaande project op `main` blijft dan ongemoeid.
2. De rest leest Vercel uit `snellezer/vercel.json`: `npm ci`, `npm run build:web` en uitvoer in `dist`, met CSP- en beveiligingsheaders.
3. Controleer na de eerste deploy:
   - `/` opent;
   - `/privacy.html` opent;
   - "Zet op beginscherm" in Safari geeft het groene icoon;
   - na één bezoek opent de app ook in vliegtuigmodus.

Pas je iets aan in de privacytekst of de iconen, draai dan eerst `npm run web:extras`. Die opdracht vult `public/` opnieuw.

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
- **Beschrijving (voorstel):** "Leer in 28 dagen sneller lezen, zonder dat je begrip eronder lijdt. Elke dag één techniek: wat het is, waarom het werkt, en meteen toepassen. Met een eerlijke meting van je effectieve leestempo, een Dyslexie Leeslab en je eigen teksten. Zonder account; alles blijft op je apparaat."
- **Screenshots:** 6,7" iPhone (1290 × 2796) en een Android-telefoon. Laat Vandaag, een les, Perifeer zien, Voortgang en het Leeslab zien.

## Wat bewust (nog) niet in de MVP zit

- **Accounts en synchronisatie tussen apparaten.** De Supabase-backend van `main` is ervoor klaar, maar dan zijn accountverwijdering in de app en een nieuwe privacyverklaring verplicht.
- **Een kindversie van de 28 lessen.** De kindermodus heeft een eigen speelse dagtraining en 33 teksten.
- **Donatieknop.** Die is op `main` aanwezig en kan later terugkomen.
