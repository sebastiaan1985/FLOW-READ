# Snellezer — Monetisatie & Impact

Dit document beschrijft hoe Snellezer geld kan verdienen op een manier die past bij het
uitgangspunt van de maker: **niet maximaliseren op winst, maar echte waarde leveren en
het grootste deel van de opbrengst naar een goed doel laten gaan.** Het bevat een
prijsmodel, de goede-doelmechaniek (inclusief de harde praktijkvalkuilen), een
waardeladder tussen gratis en betaald, en een concrete route om de app naar een 10 te
tillen.

> Kernpositionering: **"Betaal één keer, help iemand anders lezen."**
> Snellezer is een *profit-for-purpose* app. Wie betaalt, traint zijn eigen lezen én
> financiert leesonderwijs voor mensen die het niet vanzelfsprekend hebben.

---

## 1. Waarom een goed-doelmodel hier juist wérkt

Voor de meeste apps is "80% naar een goed doel" een marketingtruc. Voor Snellezer is het
inhoudelijk logisch, en dat is precies de kracht:

- Het product gaat over **geletterdheid en leesvaardigheid**. Het goede doel gaat over
  hetzelfde. De belofte is geloofwaardig, niet willekeurig.
- Het motief van de koper verschuift van "krijg ik waar voor mijn geld" naar
  "ik doe mee aan iets goeds". Dat verlaagt de drempel bij een eenmalige prijs enorm.
- Het geeft een sterk, eerlijk verhaal voor pers, scholen en mond-tot-mondreclame —
  goedkopere groei dan advertenties.

Deze aanpak vraagt in ruil één ding: **radicale transparantie**. Zodra je "80% naar goed
doel" belooft, moet je het tot op de euro kunnen aantonen. Hoofdstuk 3 en 4 gaan daarover.

---

## 2. Prijsmodel

De maker wil kunnen kiezen tussen eenmalig of maandelijks. Advies: **bied beide aan, met
eenmalig als hoofdroute** — dat past het best bij het niet-winstmotief en geeft de laagste
frictie.

### 2.1 Aanbevolen structuur

| Pakket | Prijs | Vorm | Voor wie |
| --- | --- | --- | --- |
| **Snellezer Gratis** | €0 | Voor altijd | Iedereen — de kernwaarde blijft gratis |
| **Snellezer Steun (eenmalig)** | **€14,99** | Levenslang, één betaling | De hoofdroute. "Koop één keer, steun voor altijd." |
| Snellezer Steun (maandelijks) | €2,99 / maand | Abonnement | Wie liever klein en doorlopend geeft |
| Snellezer Steun (jaarlijks) | €19,99 / jaar | Abonnement, ~44% goedkoper dan maandelijks | Doorlopende steun met korting |
| **Klas / Gezin** | €49 (tot 6 personen) of schoollicentie op aanvraag | Eenmalig / jaarlijks | Ouders, leerkrachten, remedial teachers |
| **Doneer extra** | Vrij bedrag | Los van toegang | Wie meer wil geven zonder iets terug te hoeven |

Redenen voor deze keuzes:

- **Eenmalig €14,99 als anker.** Een lage, eerlijke prijs die als "een goede daad" voelt,
  niet als een aankoop waar je waarde uit moet persen. Levenslang wegneemt het
  abonnementsmoeheid-bezwaar.
- **Maandelijks/jaarlijks als optie, niet als default.** Sommige mensen geven liever
  doorlopend. Jaarlijks moet duidelijk voordeliger zijn dan maandelijks, anders kiest
  niemand het.
- **"Betaal wat je wilt"-variant is mogelijk** (minimum €5, suggestie €15). Dat past
  filosofisch perfect, maar houd het simpel bij de eerste release; voeg het later toe als
  A/B-test.
- **Klas/gezin-licentie** is waar de echte impact (en het meeste geld voor het goede doel)
  vandaan kan komen. Leesvaardigheid is een schoolthema.

### 2.2 De valkuil die de meeste makers missen: app-store commissie

Dit is het belangrijkste stuk van het hele document.

- Apple en Google nemen **15–30% commissie** op in-app-aankopen en -abonnementen
  (15% via de small-business-programma's onder ~$1M omzet, anders 30%).
- Als je "80% naar het goede doel" belooft én via de App Store verkoopt, blijft er
  wiskundig **niets** over: 30% store + 80% doel = 110%. Dat kan niet.

**Oplossing — kies bewust en communiceer het exact:**

1. **Verkoop de eenmalige "Steun" bij voorkeur via het web** (Stripe/Mollie, ~1,5–2,9%
   transactiekosten). Sinds de EU-regels (DMA) en de recente VS-uitspraken mag je in veel
   regio's in de app naar een externe betaalpagina linken. Zo houd je ~97% over en is
   "80% naar het goede doel" ruim haalbaar.
2. **Definieer de belofte als percentage van de *netto-opbrengst*, niet de bruto.**
   Formuleer het zo:
   > "80% van elke euro die ná betaalkosten binnenkomt, gaat naar [goed doel]."
   Dat is eerlijk, verdedigbaar en juridisch veilig. Zet de rekenwijze letterlijk op de
   impact-pagina.
3. Verkoop je tóch (ook) via de stores omdat dat makkelijker is voor de gebruiker, wees
   dan expliciet: *"Via de App Store houdt Apple ~30% in; van de rest gaat 80% naar het
   goede doel."* Transparantie over de store-fee maakt je juist betrouwbaarder.

### 2.3 Winst vs. omzet — leg het vast

Beslis vóór de eerste verkoop welke van deze twee je belooft. Ze zijn niet hetzelfde en
mensen zullen ernaar vragen:

- **80% van de netto-omzet** (na betaalkosten, vóór jouw eigen kosten): eenvoudig,
  transparant, genereus. Jij draait zelf op voor hosting/domein. Aanbevolen bij lage
  volumes.
- **80% van de winst** (na alle kosten): bedrijfsmatig veiliger, maar "winst" is
  ondoorzichtig en wekt wantrouwen ("wat reken je aan kosten?"). Alleen doen met een
  publieke jaarrekening.

**Advies: beloof 80% van de netto-omzet.** Het is het meest geloofwaardig en past bij de
intentie "ik hoef er niet veel aan te verdienen". Reserveer de overige 20% voor
transactiekosten, hosting, en het levend houden van de app.

---

## 3. De goede-doelmechaniek

### 3.1 Kies het doel (thematisch consistent)

Kies één hoofddoel dat past bij leesvaardigheid, plus eventueel een tweede. Kandidaten in
Nederland/België:

- **Stichting Lezen & Schrijven** — laaggeletterdheid, past 1-op-1 bij de missie.
- **Stichting Lezen** — leesbevordering bij kinderen.
- **Een dyslexie-gerelateerd fonds** — sluit aan op het Dyslexie Leeslab in de app.
- Internationaal: **Room to Read**, **Worldreader** (geletterdheid wereldwijd).

Laat de gebruiker bij voorkeur **zelf kiezen** uit 2–3 doelen bij het betalen. Dat
verhoogt de betrokkenheid en de kans dat ze het delen.

### 3.2 Structuur — hoe het geld er echt komt

Van makkelijk naar formeel:

1. **Start simpel (maand 1):** handmatige kwartaaldonatie. Je telt de netto-opbrengst,
   maakt 80% over, en publiceert het bewijs (bankafschrift/ontvangstbevestiging) op de
   impact-pagina. Volstaat prima om te beginnen.
2. **Word geloofwaardiger:** sluit je aan bij een keurmerk zoals **"Pledge 1%"** of maak
   een formele toezegging bij het goede doel zelf (veel goede doelen bieden een
   partnerpagina). Dat geeft een externe bevestiging van je belofte.
3. **Schaal het (bij volume):** gebruik een platform als **Stripe Climate-stijl** of een
   fiscaal-fondsstructuur (ANBI-doorgeefluik) zodat donaties automatisch en aftrekbaar
   verlopen. Overweeg de app onder een stichting te hangen als de bedragen serieus worden.

> Belangrijk: onderzoek of je een **stichting** wilt oprichten. Als "80% gaat naar goed
> doel" structureel is, is een stichting (of ANBI-status) fiscaal en juridisch vaak
> schoner dan het als privépersoon of eenmanszaak doen. Vraag dit na bij een boekhouder
> vóór de eerste betaalde release.

### 3.3 Bouw de transparantie ín de app (dit is óók waarde voor mensen)

Een "Impact"-scherm is tegelijk je beste verkoopargument én een bron van vertrouwen:

- **Live donatieteller:** "Samen al **€1.240** gedoneerd aan Stichting Lezen & Schrijven."
- **Persoonlijke impact:** "Jouw bijdrage: €12 → ~X uur leesonderwijs." Maak het concreet.
- **Kwartaal-/jaarrapport:** een korte pagina met bedragen en bewijs. Link ernaar vanuit
  de app en de betaalpagina.
- **Badge na aankoop:** een "Steunt lezen ❤️"-badge op het profiel. Zichtbaar, deelbaar,
  motiverend — en volledig in lijn met de bestaande achievements/XP-taal van de app.

---

## 4. Waardeladder — wat blijft gratis, wat wordt "Steun"?

Bij een goede-doelmodel wil je de **kernwaarde gratis** houden (dat is ethisch consistent
en goed voor bereik). "Steun" ontgrendelt vooral *comfort, diepgang en cosmetica* — geen
essentiële leerfunctie. Zo voelt niemand zich buitengesloten van beter leren lezen.

| Blijft altijd gratis | Achter "Snellezer Steun" |
| --- | --- |
| Begintest + eerste missie | Volledige 4-weken Leerweg zonder onderbreking |
| RSVP, Chunks, Leestest (basis) | Onbeperkt eigen teksten laden/plakken/uploaden |
| Dagelijkse uitdaging, streak, XP | Alle Avontuur-werelden ontgrendeld |
| Kernstatistieken | Uitgebreide voortgang: trends, export, doelen per week |
| Dyslexie Leeslab (basis) | Extra oogtraining-levels & gepersonaliseerde herhaling |
| — | Thema's / leескleuren / "donateur"-badge |
| — | Het goede gevoel dat 80% naar lezen-voor-anderen gaat |

Regels om je aan te houden:

- **Zet nooit toegankelijkheid achter de paywall.** Dyslexie-ondersteuning, lettergrootte,
  contrast en de basistraining horen gratis te zijn. Dat is de ziel van dit project.
- **Geen advertenties.** Ze passen niet bij het merk, schaden de rust die een leesapp
  nodig heeft, en de opbrengst is verwaarloosbaar t.o.v. één eerlijke aankoop.
- **Geen "dark patterns".** Geen kunstmatige urgentie, geen verborgen opzeggen. Het hele
  verkoopverhaal is vertrouwen; één misstap ondermijnt het.

---

## 5. Route naar een 10 — productverbeteringen

Snellezer is al ver: complete trainingsmodules, een 4-weken leerweg, begripspoorten,
dyslexie-lab, achievements, PWA met offline en sync. Wat het naar een 10 tilt:

### 5.1 Net opgeleverd in deze ronde
- **Statusbalk/klok valt niet meer over de header** op een geïnstalleerde iPhone-PWA
  (robuuste safe-area met een gegarandeerde bodemwaarde op iOS-standalone).
- **Kleuren consistenter:** de voortgangsstatistieken gebruiken nu dezelfde merk-gradient
  als de rest van de app in plaats van vier losse kleuren.

### 5.2 Grootste kansen (hoge waarde)
1. **Meetbaar "voor/na"-moment.** De belofte van een leesapp is groei. Maak één sterk
   scherm: *"Je begon op 240 WPM met 70% begrip. Na 4 weken: 360 WPM met 80%."* Een
   deelbare voor/na-kaart is je beste organische marketing én je beste retentiehaak.
2. **Onboarding met een échte eerste winst binnen 2 minuten.** Laat een nieuwe gebruiker
   direct de begintest doen en meteen daarna één RSVP-ronde op +20% tempo, met de
   boodschap "zie je? je kúnt sneller". Die eerste "wow" bepaalt of iemand terugkomt.
3. **Slimme herinnering zonder meldingsdruk.** Een vriendelijke, opt-in dagreminder
   ("2 minuten voor je streak") verhoogt de D1/D7-retentie sterk. Alleen ná toestemming.
4. **Impact-scherm (zie 3.3)** — bouwt vertrouwen, verkoopt de "Steun", en geeft mensen een
   reden om de app te delen.

### 5.3 Kleinere polish (hoge zichtbaarheid, lage moeite)
- **Consistente iconen.** De modulekaarten mengen nu emoji met verschillende stijlen
  (kleur-emoji naast platte symbolen). Eén samenhangende set (of overal dezelfde
  emoji-stijl) maakt het schermbeeld direct rustiger.
- **Lege toestanden.** Bij 0 sessies toont Voortgang overal nullen. Vervang die door een
  uitnodigend "Doe je eerste sessie om je grafiek te vullen".
- **Micro-animaties bij mijlpalen** (streak-vuur groeit, XP-balk vult). Klein qua werk,
  groot qua "af"-gevoel.
- **Één donkerteblauw-systeem.** Houd oppervlak/kaart/rand strak in dezelfde familie zodat
  dieptes overal gelijk ogen.

### 5.4 Vertrouwen & release (blokkerend vóór betaald live)
- Rond privacybeleid, accountverwijdering en Supabase-productieconfig af (staat al in
  `GO_TO_MARKET.md`).
- Test de volledige betaalflow (web-checkout + herstel van aankoop) op iOS Safari en
  Android Chrome.
- Zet de exacte donatiebelofte en rekenwijze op één publieke, offline-gecachte pagina
  vóór de eerste euro binnenkomt.

---

## 6. Aanbevolen volgorde van uitvoering

1. **Beslis de juridische vorm** (privé/eenmanszaak vs. stichting) en de belofte
   ("80% van netto-omzet"). Leg het schriftelijk vast. → boekhouder raadplegen.
2. **Kies het goede doel** en neem contact op voor een partner-/toezeggingspagina.
3. **Bouw het Impact-scherm** met donatieteller en de belofte-uitleg (ook waardevol
   zolang de app nog gratis is).
4. **Zet web-checkout op** (Stripe/Mollie) voor de eenmalige "Steun"; houd het simpel.
5. **Voeg de waardeladder toe** (paywall op comfort/diepgang, kernwaarde blijft gratis).
6. **Voer de eerste kwartaaldonatie handmatig uit** en publiceer het bewijs.
7. **Meet en herhaal:** conversie naar "Steun", behoud, en — het belangrijkst voor dit
   project — het bedrag dat naar lezen-voor-anderen gaat.

> Eindbeeld: een rustige, eerlijke leesapp die zijn kernbelofte gratis houdt, een kleine
> groep mensen laat betalen omdat het góéd voelt, en daarvan 80% doorgeeft aan mensen die
> nog moeten leren lezen. Dat is geen concessie aan de commercie — dat ís het product.
</content>
