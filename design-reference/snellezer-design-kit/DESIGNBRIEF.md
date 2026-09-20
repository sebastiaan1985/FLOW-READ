# Snellezer — designbrief voor Codex

Richting: **Wit & Rust**. Clean wit, één diepgroen accent, alle vrolijkheid in de illustraties.

---

## 1. Ontwerprichting

De app is een trainingsruimte, geen speelhal. Wit draagt alles; de interface doet een stap terug zodat de tekst en de cijfers vooruit kunnen komen.

Drie principes die elk ontwerpbesluit beslissen:

1. **Eén primaire actie per scherm.** Alles wat niet die actie is, is grijs of verborgen.
2. **De interface kent maar twee kleuren: inkt en accent.** Alle overige kleur zit in illustraties, nooit in knoppen of tekst. Dit is de regel die het clean houdt.
3. **Het leesscherm is leeg.** Geen illustratie, geen kleurvlak tijdens het lezen. Bediening onderaan, buiten het blikveld.

## 2. Informatiearchitectuur

De inhoud blijft volledig. Alleen de ordening verandert: van achttien deuren naar vier vaardigheden.

**Vier tabs onderin, verder niets.** Geen hamburgermenu, geen zijlade.

| Tab | Antwoordt op de vraag |
| --- | --- |
| Vandaag | Wat moet ik nu doen? |
| Leerweg | Waar ben ik in het programma? |
| Trainen | Ik wil zelf kiezen |
| Voortgang | Word ik beter? |

**Vier vaardigheidsgroepen binnen Trainen**, elk met één eigen score, eigen tint en eigen illustratie:

- **Snelheid** (WPM, zon-tint) — RSVP, Chunks, Vooruit lezen, Fixatie-training
- **Begrip** (%, salie-tint) — Leestest, Lange teksten, Skim & Scan, Begintest
- **Blikveld** (niveau, lucht-tint) — Perifeer, Oogbeweging, Woordgroepen
- **Focus & rust** (dagen, lila-tint) — Leesritme, Oogontspanning, Papier

Apart, buiten de vier groepen: **Dyslexie Leeslab** en **Eigen tekst**.

**De dagsessie is het hart.** Eén knop op Vandaag start drie oefeningen achter elkaar, circa acht minuten, samengesteld uit de groep waar de gebruiker het meest achterloopt. De losse modules blijven bestaan onder Trainen, maar een nieuwe gebruiker hoeft ze nooit te zien.

**Onboarding kort.** Leeftijdsgroep, leesdoel (met illustratiekaarten), dan meteen de begintest. Naam en avatar pas ná de eerste voltooide oefening.

## 3. Design tokens

Volledig uitgeschreven in `theme.ts`. Kort samengevat:

**Interface** — wit `#FFFFFF` · vlak `#F5F8F9` · rand `#EDF1F3` · inkt `#0F1A20` · gedempt `#5C6B75` · licht `#8A99A3` · accent `#0B6E63` · voortgang `#34B98B`

**Illustratiepalet** (alleen binnen illustraties) — koraal `#FF8A6B` · zon `#FFC861` · lucht `#8EC5F5` · salie `#9BD4B8` · lila `#B9A8F2`, elk met een lichte tint als achtergrond.

**Typografie** — Outfit 600 voor cijfers en koppen, Figtree 400/600 voor de rest.

**Maat** — spatiëring 5/10/12/16/20/24/28 · schermmarge 24 · radius 14/22/28/999 · tabbalk 88 · raakvlak minimaal 44 · bovenmarge 60 voor de statusbalk, en die nooit zelf tekenen.

**Motion** — 180 ms ease-out, overal gelijk. Eén echt moment: het WPM-getal telt op op het resultaatscherm. Het RSVP-woord wisselt hard, zonder fade of beweging.

## 4. Componenten

Zes componenten dekken de hele app. Bouw deze eerst, dan zijn de schermen samenstellingen.

**PrimaryButton** — 56 hoog, pill, accent vlak, witte tekst, Figtree 600 op 16. Maximaal één per scherm.

**SecondaryButton** — 50 hoog, pill, gevuld `surface` grijs, `inkMuted` tekst. Geen omlijnde knoppen.

**Card** — wit met 1.5px `border`, radius 22–28. Of gevuld met een illustratietint, dan zonder rand. Nooit een schaduw.

**StatTile** — Outfit-getal met daaronder de eenheid in 11 `inkMuted`, op een `surface` vlak met radius 20.

**ProgressBar** — 5–6 hoog, volledig afgerond, `border` als track.

**TabBar** — vier items, 88 hoog, bovenrand 1.5px, actief in accent met label 600, inactief in `inkDim`. Stroke-iconen op 2.0 lijndikte. Nooit emoji.

## 5. Scherm voor scherm

### Vandaag
Begroeting links, streak-chip rechts. Daaronder de herokaart: volledig accent-gevuld, met een ring die 1/3 toont en één witte knop **Start training**. Daarna drie StatTiles (wpm, begrip, xp) en twee illustratiekaarten: Leerweg met voortgangsbalk, en Eigen tekst.

### Leessessie
Kruisje linksboven, oefeningnaam gecentreerd. Het midden is leeg op de woordgroep na: het actieve woord in accent, de omliggende woorden in `#C3CDD3`, twee korte fixatiestreepjes boven en onder. Tempo groot in Outfit. Onderin: voortgangsbalk, min/pauze/plus, en een grijze knop **Klaar met lezen**. De bediening fadet weg na drie seconden.

### Resultaat
Opent met de hero-illustratie (`resultaat-hero.svg`), dan het WPM-getal in 68pt Outfit op een `surface` vlak, met een chip die het verschil toont. Twee tegels: begrip en XP. Eén coachtip in een lila vlak. Twee knoppen.

### Trainen
Vier vaardigheidskaarten in een 2×2 raster, elk gevuld met de eigen tint en de eigen illustratie. Daaronder twee rijkaarten: Dyslexie Leeslab en Eigen tekst.

### Leerweg
Verticaal pad met vier stappen. Afgerond krijgt een groene stip met vinkje, actief een accent-stip plus een uitgeklapte `surface`-kaart met de dag van vandaag en één knop. Toekomstige weken gedimd maar leesbaar.

### Voortgang
Gemiddeld tempo groot, deltachip ernaast. Eén lijngrafiek met zachte vulling eronder, geen assen en geen legenda. Daaronder een streakstrook van veertien dagen in de zon-schaal, en een badgeraster van vier kolommen waarin vergrendelde badges een slotje tonen.

### Onboarding
Drie stappen, drie streepjes bovenin. Per stap één vraag en drie grote keuzekaarten mét illustratie (Studie, Werk, Plezier). De geselecteerde kaart krijgt een 2px accent-rand en een rond vinkje rechts.

## 6. Wat eruit moet

Dit zijn de dingen die de huidige webversie als hobbyproject laten lezen:

- **Emoji als icoon.** Overal vervangen door de iconen- en illustratieset.
- **Het hamburgermenu.** De vier tabs zijn de volledige navigatie.
- **Alle modules op één scherm.** Ze verhuizen naar hun vaardigheidsgroep.
- **Meer dan één actie per scherm.** Nu concurreren Begintest, Leestest, Dagmissie en Leerweg om dezelfde tik.
- **Vijf kleuren door elkaar in de interface.** Alleen inkt en accent.
- **De installatiebanner, het donatieblok en de accountprompt op het startscherm.** Doneren krijgt een plek in het profiel; het account vraag je pas na het eerste resultaat.
- **Uitlegblokken van vier tegels onder elke oefening.** Verplaats naar een info-icoon rechtsboven.
- **Wisselend u en jij.** Kies jij, overal.

Behouden, ongewijzigd: alle oefeningen, de dyslexie-instellingen (lettertype, spatiëring, overlay, lettergreepkleuren, bionic), de kids-modus, de begripsgrens die het tempo terugregelt, en de eerlijke toon over wat snellezen wel en niet kan.

## 7. Illustratieregels

Als je nieuwe illustraties laat maken, gelden deze regels:

- Platte vlakken, geen omlijning, alles afgerond.
- Maximaal drie kleuren uit het illustratiepalet per illustratie.
- Achtergrond is altijd de lichte tint van de hoofdkleur.
- Nooit gezichten, gradiënten, schaduw of emoji.
- Keuze-illustraties op 72px canvas, vaardigheidsillustraties op 52px, hero op 120px.

## 8. Prompt voor Codex

Plak dit als eerste bericht, met `theme.ts` en de `assets/`-map erbij.

```
Bouw de mobiele app "Snellezer", een trainingsapp voor leessnelheid, in React Native met Expo.
Taal: Nederlands (jij-vorm). Platforms: iOS en Android.

ONTWERPRICHTING: "Wit & Rust" — clean wit, één diepgroen accent (#0B6E63),
alle kleur in illustraties. Geen schaduwen, geen gradiënten, geen emoji als icoon.
Drie regels: één primaire actie per scherm; de interface kent alleen inkt en accent;
het leesscherm is leeg.

TOKENS: gebruik het meegeleverde theme.ts ongewijzigd. Hardcode nooit een kleur,
maat of radius in een component — alles via theme.ts.

TYPOGRAFIE: Outfit (600) voor cijfers en koppen, Figtree (400/600) voor al het
overige. Laad ze via @expo-google-fonts/outfit en @expo-google-fonts/figtree.

ASSETS: de map assets/illustraties bevat SVG's (studie, werk, plezier, dyslexie,
eigen-tekst, leerweg, snelheid, begrip, blikveld, focus, resultaat-hero).
Gebruik react-native-svg-transformer zodat ze als component importeerbaar zijn.
assets/app-icon bevat de app-iconen; icon-chunk.svg is de gekozen variant.

NAVIGATIE: vier tabs onderin — Vandaag, Leerweg, Trainen, Voortgang. Geen drawer.

COMPONENTEN eerst bouwen: PrimaryButton (56, pill, accent), SecondaryButton (50,
pill, grijs gevuld), Card (radius 22-28, rand 1.5px, geen schaduw), StatTile,
ProgressBar, TabBar (stroke-iconen, 2.0 lijndikte).

SCHERMEN: Onboarding (3 stappen met illustratiekaarten), Vandaag, Leessessie
(RSVP en chunks), Resultaat, Trainen (4 vaardigheidsgroepen als 2x2 raster),
Leerweg (4 weken als verticaal pad), Voortgang.

MOTION: 180ms ease-out overal. Eén echt moment: het WPM-getal telt op op het
resultaatscherm. Het RSVP-woord wisselt hard, zonder fade of beweging.

Start met theme.ts inlezen en de componentenbibliotheek bouwen.
Toon me die eerst, voordat je schermen maakt.
```

Daarna per scherm: screenshot uit het canvas erbij, en één zin — *bouw dit scherm met de bestaande componenten, wijk niet af van de tokens.*
