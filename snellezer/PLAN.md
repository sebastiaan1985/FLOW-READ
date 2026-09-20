# Snellezer — beoordeling en plan naar een 10

Beoordeeld op 20 september 2026, op basis van de draaiende webversie (Expo web) en de code in `src/`.

---

## 1. Het cijfer

**Totaal: 6 / 10.**

Een mooi, rustig en technisch net gebouwd omhulsel — maar het leert je nog niets over snellezen, en één van de kernoefeningen doet niet wat hij belooft.

| Onderdeel | Cijfer | Kort |
|---|---|---|
| Ontwerp, rust, toon | 9 | Consistent, kalm, Nederlands, geen ruis. Dit is de grote winst t.o.v. de oude versie. |
| Datamodel & techniek | 7,5 | Typecheck schoon, 8 tests groen, geen verzonnen voortgang, timers stoppen bij pauze. |
| Oefeningen (werking) | 5 | 17 in naam, ~7 in mechaniek. Perifeer werkt niet, woordgroepen is te raden. |
| Leerwaarde / didactiek | 3 | Nul uitleg over snellezen. Eén statische tip met drie varianten. |
| Content-omvang | 4 | 10 teksten van ~170 woorden, 27 oefenwoorden. Binnen een week op. |
| Zichtbare progressie | 5 | XP, streak en badges bestaan, maar meten het verkeerde. |
| Klaar als iPhone-app | 4 | Draait in de browser. Geen `eas.json`, geen PWA-manifest, nooit op een toestel getest. |

Je eigen observatie klopt aan beide kanten: dit ziet er véél beter uit dan de oude `index.html`, en de oude versie had inhoudelijk meer — met name echte snellees-tips (regressie, saccades, gidsmethode, S-patroon, twee fixaties per regel) en een daguitdaging. Die inhoud is bij de herbouw niet meegekomen.

---

## 2. Wat goed is en moet blijven

- **De rust.** Wit, één diepgroen accent, ruime typografie, geen emoji, geen geschreeuw. Precies goed voor een leesproduct.
- **De eerlijkheid van het model.** `appendSession` is idempotent, rustoefeningen verzinnen geen leessnelheid, het ingestelde oefentempo wordt expliciet níét als gemeten snelheid verkocht, en bij begrip < 70% gaat het tempo automatisch omlaag. Dat is een zeldzaam volwassen fundament — daar bouwen we op door.
- **Toegankelijkheid.** Dyslexie Leeslab (font, overlay, letterafstand, bionic, lettergrepen), reduce-motion, pauze bij achtergrond, labels op knoppen.
- **De vier vaardigheden** (Snelheid, Begrip, Blikveld, Focus) zijn een goede kapstok.

---

## 3. Wat er nu mis is

### 3.1 Perifeer zien traint je perifere zicht niet
De oefening rendert twee woorden in één tekstregel, met wat letterafstand ertussen, **1400 ms** lang zichtbaar:

```
appel   •   letter
```

Dat is geen perifere training maar gewoon lezen: de woorden staan ~230 px uit elkaar en je hebt ruim de tijd om er met je ogen langs te gaan. De oude versie deed dit wél goed (`periStart` in `index.html`): woorden absoluut gepositioneerd op ±breedte/2 vanaf het midden, met een instelbare breedte. Die functionaliteit is bij de herbouw verdwenen.

### 3.2 Drie oefeningen zijn dezelfde oefening
`rsvp`, `chunks` en `fixation` lopen door exact dezelfde code; het enige verschil is dat `chunk` 1 of 3 is. `forward` is dat plus een grijze voorvertoning. Vier menu-items, één mechaniek.

### 3.3 Woordgroepen is te raden zonder te kijken
Het juiste antwoord is opgebouwd als `"appel letter samen"`, de afleiders als `"appel · letter"`. Je herkent het goede antwoord aan het formaat — je hoeft de flits niet eens gezien te hebben.

### 3.4 De leerweg is decoratief
De Leerweg toont "Dag 1 van 28" en vier weken met titels, maar `buildDailyPlan()` kijkt daar niet naar. Het kiest simpelweg de minst geoefende vaardigheid en plakt daar `relax` achter. Week 2 "Meer in één blik" verandert dus niets aan wat je die dag doet. Er is geen dag 1 t/m 28 aan inhoud.

### 3.5 Er wordt niets geleerd
Er is geen enkele uitleg over snellezen in de app. Geen woord over subvocalisatie, regressie, fixaties, chunking of de gidsmethode. Eén tipkaart na afloop met drie hardgecodeerde zinnen, en één vaste "fijne gedachte" op Vandaag. Voor een app die mensen leert snellezen is dat het ontbrekende hart.

### 3.6 De voortgang meet het verkeerde
Alleen `reading`, `long` en `baseline` leveren een gemeten WPM. Alle tempo-oefeningen slaan het **ingestelde** tempo op — een getal dat jij zelf koos, geen prestatie. Er is geen niveau per vaardigheid, geen hermeting op vaste momenten, en geen enkel moment waarop de app zegt: "hier ben je beter geworden, en dit is waardoor".

### 3.7 De inhoud is binnen een week op
10 teksten van 155–192 woorden (~50 seconden lezen), 4 kinderteksten, 27 oefenwoorden. Bij dagelijks gebruik zie je alles binnen zes dagen terug.

---

## 4. Wat een 10 is

Niet: meer oefeningen. Wel: **één dagelijkse lus die elke dag iets leert, dat laat toepassen, en het effect meteen laat zien.**

```
1. LES        (40 sec)  Eén techniek. Wat het is, waarom het werkt, hoe je het nu doet.
2. TOEPASSEN  (4 min)   1–2 oefeningen die exact díé techniek afdwingen.
3. METEN      (2 min)   Korte leestest of scoreronde.
4. TERUGKOPPELING       "Je las 12% sneller met hetzelfde begrip. Dat is chunking."
```

Vijf tot acht minuten, elke dag, 28 dagen lang, met aan het eind een eerlijke vergelijking met dag 1. Dat is het verschil tussen een oefenapp en een app waar je iets van leert.

De centrale maat wordt **effectief leestempo = gemeten WPM × begrip%**. Dat maakt het onmogelijk om te winnen door te scheuren zonder te begrijpen, en het past bij de eerlijkheid die al in het model zit.

---

## 5. Het curriculum — 28 dagen

Vult de Leerweg die er visueel al staat.

**Week 1 — Fundament (afleren wat je tegenhoudt)**
1. Vertrekpunt meten — leestest + begrip. Dit is je nulmeting.
2. Subvocalisatie — het stemmetje dat meeleest begrenst je op spreektempo.
3. Regressie — onbewust terugspringen kost ~30% van je leestijd.
4. Fixaties — je ogen springen, ze glijden niet. Minder sprongen = sneller.
5. De gidsmethode — je vinger of cursor als tempomaker.
6. Houding, licht en afstand — gespannen ogen lezen langzamer.
7. Hermeting + weekoverzicht.

**Week 2 — Blikveld (meer zien per sprong)**
8. Chunking: van 1 naar 2 woorden.
9. Chunking: van 2 naar 3 woorden.
10. Perifeer zien — wat je opvangt zonder er direct naar te kijken.
11. Twee fixaties per regel — op ¼ en ¾ van de regel.
12. Woordgroepen herkennen als één beeld.
13. Verticaal blikveld — recht omlaag door smalle kolommen.
14. Hermeting + weekoverzicht.

**Week 3 — Snelheid met begrip**
15. Tempo-push 3-2-1 — bewust te snel lezen, dan terug naar comfortabel.
16. Begripsanker — na elke alinea één zin samenvatten.
17. Previewing — eerst scannen, dan lezen.
18. Skimmen — hoofdgedachte in 20% van de tijd.
19. Scannen — gericht zoeken zonder te lezen.
20. Het S-patroon voor lange teksten.
21. Hermeting + weekoverzicht.

**Week 4 — In je eigen leven**
22. Doelgericht lezen — wat wil je uit deze tekst halen?
23. Studieteksten (SQ3R).
24. Lange teksten volhouden.
25. Schermen versus papier.
26. Je eigen tekst importeren en er techniek op loslaten.
27. Een leesgewoonte die blijft.
28. Eindmeting + vergelijking met dag 1.

---

## 6. Hoe een tip in de oefening landt

De les mag geen tekstje naast de oefening zijn. **De les stelt de oefening in.** Eén databestand, `src/data/lessons.ts`:

```ts
type Technique = {
  id: string;
  dag: number;
  titel: string;          // "Stop met terugspringen"
  wat: string;            // 2 zinnen: wat is het
  waarom: string;         // 1 zin: waarom het werkt (met het getal erbij)
  hoe: string;            // 1 zin: wat je nu concreet gaat doen
  oefening: {
    exerciseId: string;
    params: {             // dit is wat de les daadwerkelijk aanzet
      chunk?: number;         // woorden per fixatie
      wpm?: number;           // starttempo
      hideRead?: boolean;     // gelezen woorden verdwijnen -> regressie onmogelijk
      pacer?: boolean;        // meelopende markering
      spread?: number;        // perifere spreiding in % van de breedte
      flashMs?: number;       // flitstijd
      twoFixations?: boolean; // markeer ¼ en ¾ van de regel
      hint?: string;          // subtiele reminder tijdens de oefening
    };
  };
  meet: 'wpm' | 'begrip' | 'effectief' | 'herkenning';
};
```

De techniek verschijnt op vier momenten:
1. **Op Vandaag** als "Les van vandaag" — 40 seconden lezen, met een grote startknop eronder.
2. **Vóór de oefening**, op het introscherm, als "wat je nu gaat toepassen" (vervangt de huidige generieke beschrijving).
3. **Tijdens de oefening**, als één rustige zin onder in beeld (`hint`).
4. **Na afloop**, gekoppeld aan je resultaat: niet "goed gedaan" maar "je begrip bleef 85% terwijl je tempo 12% omhoog ging — dat is wat chunking doet".

Zo is de tip geen decoratie: zet je de les "regressie stoppen" aan, dan verdwijnen gelezen woorden daadwerkelijk uit beeld. Dat is dezelfde oefening, maar hij dwingt de techniek af.

---

## 7. De oefeningen repareren

### 7.1 Perifeer zien — nieuwe specificatie
- Een **vast fixatiepunt** exact in het midden, altijd zichtbaar, ook tijdens de flits.
- Twee woorden **absoluut gepositioneerd** op −spread/2 en +spread/2 vanaf dat midden (niet in een tekstregel).
- **Spreiding groeit mee**: start op ~25% van de schermbreedte, loopt op tot ~80% naarmate je scoort.
- **Flitstijd omlaag en adaptief**: niveau 1 = 400 ms, niveau 10 = 120 ms (nu: 1400 ms — ruim genoeg om er gewoon naar te kijken).
- Na de flits een leeg scherm, dán pas de vraag. Anders blijft het beeld staan.
- **Niveaulogica**: 8/10 goed → spreiding +10% óf flitstijd −40 ms. Onder 5/10 → een stap terug.
- Woorden van maximaal 6 letters, zodat ze binnen één fixatie passen.
- Op een telefoon is de haalbare spreiding kleiner dan op een laptop. Eerlijk benoemen in de app, en op een smal scherm de spreiding in graden begrenzen in plaats van doen alsof.

### 7.2 Woordgroepen
Afleiders in hetzelfde formaat als het goede antwoord. Het woord "samen" eruit.

### 7.3 Chunks, fixatie en vooruit lezen uit elkaar trekken
- **Chunks**: woordgroepen van 2→3→4, met de groep als geheel gemarkeerd.
- **Fixatie**: de tekst blijft staan, alleen het fixatiepunt verspringt — precies twee punten per regel (¼ en ¾).
- **Vooruit lezen**: gelezen tekst vervaagt achter je (dat is de regressie-oefening).

### 7.4 Oogbeweging
Nu een sinus die uit de secondenteller wordt herrekend — dat schokt. Vervangen door een echte animatie (`Animated`/`requestAnimationFrame`) met instelbare baan en tempo, zoals de `OOG_NIVEAUS` uit de oude versie.

### 7.5 Testdekking
Er zijn 8 tests, allemaal op het datamodel. Geen enkele op oefeningslogica. Toevoegen: scoring, niveau-overgangen, flitstiming, en de garantie dat een oefening nooit een antwoord weggeeft.

---

## 8. Content die erbij moet

| Nu | Nodig | Waarom |
|---|---|---|
| 10 teksten, ~170 woorden | 60+, in drie lengtes (150 / 400 / 900 woorden) en drie niveaus | 28 dagen zonder herhaling, en lange teksten kúnnen oefenen |
| 4 vragen per tekst | 5: 2× detail, 1× hoofdgedachte, 1× gevolgtrekking, 1× woordbetekenis | Begrip meten in plaats van geheugen testen |
| 27 oefenwoorden | 300+, gelabeld op lengte en frequentie | Flits- en perifere oefeningen op niveau |
| 4 kinderteksten | 20+ | De kindmodus is nu binnen één sessie leeg |
| — | 14 tips uit de oude `index.html` | Regressie, saccades, gidsmethode, S-patroon, twee fixaties: allemaal al geschreven, alleen nooit meegenomen |

Eigen tekst importeren zit er al in (`expo-document-picker`). Uitbouwen naar plakken van een artikel, zodat week 4 op je eigen leesvoer draait.

---

## 9. Progressie die je echt ziet

1. **Effectief leestempo** (WPM × begrip%) als hoofdgetal, met de nulmeting van dag 1 als vaste referentielijn in de grafiek.
2. **Vaste hermetingen** op dag 7, 14, 21 en 28 met vergelijkbare tekstlengte en -moeilijkheid. Alleen zo is de grafiek eerlijk.
3. **Niveau per vaardigheid** (1–10) in plaats van alleen XP: "Blikveld niveau 4 — je ziet nu 3 woorden per fixatie".
4. **Adaptieve moeilijkheid** in beide richtingen. Nu gaat het tempo alleen omlaag bij begrip < 70%; het moet ook omhoog na twee keer ≥ 80%.
5. **Techniekkaart**: overzicht van de 28 technieken met een vinkje bij wat je geleerd en toegepast hebt.
6. Het ingestelde oefentempo nooit in dezelfde grafiek als gemeten snelheid. Dat scheidt de app nu al netjes — houden zo.

---

## 10. Plezier en gewoonte

- **Daguitdaging terug** uit de oude versie, met bonus-XP.
- **Streak met een rustdag**: één gemiste dag per week mag, zonder alles kwijt te raken. Schuldgevoel past niet bij deze app.
- **Techniekbadges** naast de huidige acht: "regressie afgeleerd", "3 woorden per blik", "10 dagen op rij".
- **Dagelijkse herinnering** (`expo-notifications`) op een tijd die je zelf kiest.
- **Elke dag één nieuw weetje**, ook na dag 28, zodat de app niet leeg raakt.

---

## 11. Op je iPhone testen

Drie routes, oplopend in moeite:

**A. Expo Go — vandaag nog, 10 minuten.** Installeer Expo Go uit de App Store, start `npx expo start` op de laptop, scan de QR-code. iPhone en laptop op hetzelfde wifi. Alles wat de app gebruikt (fonts, document-picker, opslag) werkt in Expo Go. Dit is de snelste manier om te voelen hoe het op een toestel leest.

**B. Als webapp op je beginscherm — een half uur werk.** Een `manifest` en `apple-touch-icon` toevoegen aan de webconfiguratie, dan "Zet op beginscherm" in Safari. Je krijgt een eigen icoon, geen adresbalk, en het voelt als een app. Geen App Store nodig.

**C. Echte build / TestFlight — een dagdeel, plus een Apple Developer-account (€99/jaar).** `eas.json` aanmaken, `eas build -p ios --profile preview`. Nodig zodra je hem aan anderen wilt laten testen of naar de App Store wilt.

Nu aanwezig: geen `eas.json`, geen Xcode, geen PWA-manifest. Advies: **A voor jezelf, B erbij zodat je hem als app op je beginscherm hebt, C pas als het product staat.**

---

## 12. Volgorde

| # | Wat | Levert | Inspanning |
|---|---|---|---|
| 1 | Perifeer zien repareren + woordgroepen-weggever weghalen | De oefeningen doen wat ze beloven | 1 dagdeel |
| 2 | Expo Go + PWA-manifest | Je test op je iPhone | 1 dagdeel |
| 3 | `lessons.ts` met 28 technieken, en het parametermechanisme | **Het hart. Hierna leert de app je iets.** | 2 dagen |
| 4 | Les tonen op Vandaag, vóór, tijdens en na de oefening | De dagelijkse lus staat | 1 dag |
| 5 | Leerweg echt aan dag 1–28 koppelen | "Dag 12 van 28" klopt eindelijk | 1 dagdeel |
| 6 | Effectief leestempo + hermeting op dag 7/14/21/28 | Je ziet dat je vooruitgaat | 1 dag |
| 7 | Content uitbreiden (60 teksten, 300 woorden, 5 vragen) | 28 dagen zonder herhaling | 2 dagen |
| 8 | Chunks / fixatie / vooruit echt uit elkaar trekken | 4 echte oefeningen i.p.v. 1 | 1 dag |
| 9 | Niveaus per vaardigheid + adaptieve moeilijkheid | Het blijft passen bij je groei | 1 dag |
| 10 | Daguitdaging, techniekbadges, herinnering | Je komt terug | 1 dag |
| 11 | `TrainingScreen` opsplitsen + tests op oefeningslogica | Dit alles blijft te onderhouden | 1 dag |

Stap 1 t/m 6 is de sprong van een 6 naar een 8: de app leert je dan iets en laat het effect zien. Stap 7 t/m 11 maakt er een 10 van.

Eén kanttekening bij de haalbaarheid: `TrainingScreen.tsx` is 25 KB in één component, geschreven met veel statements per regel. Dat werkt nu, maar stap 3, 4 en 8 raken juist dat bestand. Stap 11 naar voren halen kan het bouwen sneller maken in plaats van langzamer.

---

## 13. Wat ik van jou nodig heb

1. **Toon van de lessen** — bij de rust van de app past uitleg zonder uitroeptekens en zonder beloftes als "lees 3× sneller". Akkoord dat we eerlijk blijven ("de meeste mensen winnen 30–50% met behoud van begrip") in plaats van de gebruikelijke snellees-marketing?
2. **Doelgroep van de lessen** — volwassenen, of ook een kindversie van de 28 dagen? De kindmodus bestaat, maar heeft nu 4 teksten.
3. **Apple Developer-account** — heb je die al, of houden we het voorlopig op Expo Go en de webapp op je beginscherm?

---

## 14. Migratie uit de oude versie — stand van zaken

Uitgevoerd op 20 september 2026, na de beslissing om eerst de inhoud en oefeningen over te zetten.

### Overgezet

| Uit de oude versie | Nu in de app |
|---|---|
| Perifeer zien met breedte 20–95% | Echt perifeer: fixatiepunt in het midden, woorden absoluut gepositioneerd, breedte instelbaar, flitstijd 120–1200 ms, breedte groeit mee bij een goede score |
| Chunkgrootte 2–7 woorden | Instelbaar per oefening (2–7 voor chunks/fixatie/vooruit, 1–5 voor woord-voor-woord) |
| Positie/totaal bij RSVP | "woord 12 van 165" onder elke tempo-oefening |
| Woordflitsniveaus (3 / 4–5 / 6–7 / lange woorden) | Niveaukeuze met bijbehorende flitstijd (2000 / 1600 / 1200 / 900 ms) |
| Oogtraining: 4 patronen + snelheid 1–10 | Links–rechts, zigzag, uitdijend en sprint, met snelheid 1–10 en duur 1 / 3 / 6 minuten |
| Leesgids met instelbaar tempo | Gids loopt automatisch mee (0,3–3,0 seconden per regel) of je gaat zelf verder |
| 18 snelleestips | Op Vandaag als tip van de dag, na afloop van een oefening, en tussen de oefeningen van je dagtraining door — met een knop om hem meteen toe te passen |
| Daguitdaging (7 uitdagingen) | Terug op Vandaag, afgevinkt op basis van je eigen sessies |

### Bewust niet overgezet

- **S-patroon en diagonaal scannen als gidsmodus.** Die stonden wel in het oude keuzemenu, maar waren nooit aangesloten: alleen de snelheid werd uitgelezen. Niet nagebouwd als functie; beide staan wel als tip in de app.
- **Confetti en emoji-feedback.** Botst met de rust van het nieuwe ontwerp.
- **Kinderavontuur** (werelden, verhalen, sterren). Geparkeerd tot de kindversie aan de beurt is.
- **Meerdere profielen met login.** De app is nu voor één lezer; dit heeft alleen zin als hij gedeeld wordt.
- **ORP-markering bij RSVP.** Het oude streepje boven het woord zit er al in, als de twee fixatiestreepjes boven en onder.

### Nog te doen uit de oude versie

1. Eigen tekst via een geplakte URL laden (nu kan alleen een .txt-bestand).
2. Eigen begripsvragen toevoegen bij een eigen tekst.
3. De woordenlijst uitbreiden — 27 woorden is te weinig om vier niveaus mee te vullen.

### Opgeloste fout

"Woordgroepen" gaf het juiste antwoord weg via het formaat: het goede antwoord stond als `appel letter samen` en de afleiders als `appel · letter`. Alle opties hebben nu hetzelfde formaat.
