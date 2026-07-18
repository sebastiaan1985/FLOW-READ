# Snellezer — Kritische eindanalyse & livegang-plan

Geschreven na een volledige doorloop van de app (alle 22 schermen, leerweg
end-to-end via de testknop, ronde-economie, betaal- en donatieflows).
Dit document is bewust kritisch: het benoemt wat er staat, wat het cijfer
drukt, en de exacte volgorde naar livegang met testgebruikers.

---

## 1. Eindoordeel

**Cijfer vandaag: 8,7.** Geen 9,5 — en dat is een compliment met huiswerk.

Wat er staat is voor een indie-app uitzonderlijk compleet: een volledig
trainingssysteem met een eerlijke, begrip-eerst speleconomie (zeldzaam in dit
genre — vrijwel alle snelleesapps belonen kale WPM), een 4-weken leerweg met
doorstroom, streaks/XP/records/verrassingsbonus, accounts met sync van álles
inclusief eigen teksten, offline PWA, dyslexie-lab, kids-modus, een
donatie-verhaal dat klopt bij het product en nu een founders-aanbod.

Waarom het (nog) geen 9,5 is — de vijf punten die het cijfer drukken:

1. **De eerste vijf minuten zijn te vol.** Het homescherm toont een nieuwe
   gebruiker uitdaging + leerweg + eerste stappen + coach + momentum tegelijk.
   De begintest-flow zelf is sterk, maar daarná moet de app één ding
   schreeuwen: "dit is je volgende stap". Aanbeveling: home voor gebruikers
   zonder baseline reduceren tot één primaire CTA en de rest inklappen.
2. **Contentdiepte is de echte grens.** De tekstbibliotheek is goed voor de
   eerste weken, maar wie de leerweg afmaakt heeft meer nodig. Eigen
   teksten/URL's werken, maar krijgen generieke checkpoints in plaats van
   echte inhoudsvragen. De "11" zit hier: een grotere gecureerde bibliotheek
   per niveau, of (later, server-side) vraag-generatie bij eigen teksten.
3. **Retentie heeft een plafond zonder meldingen.** De streak-puls helpt wie
   de app opent; wie hem niet opent, hoort niets. Web-push voor de
   geïnstalleerde PWA (of native builds) is de grootste resterende
   retentie-hefboom.
4. **Betaling is nu een voorkant zonder slot.** Het founders-aanbod staat er,
   maar er is nog geen koppeling betaald→ontgrendeld (entitlement). Voor de
   eerste lichting kan dat handmatig; vóór echte verkoop moet de
   Mollie-webhook → Supabase-vlag er zijn (zie §4).
5. **Technische schuld:** vrijwel de hele app leeft in één index.html van
   ~13.000 regels. Voor snelheid van itereren was dat prima; voor de fase
   ná livegang is het een regressierisico. Plan een refactor naar modules
   zodra de betaalde versie draait — niet eerder, wel echt.

Wat de app naar een **11** zou tillen (na livegang, in volgorde van impact):
bewezen groeidata van echte gebruikers zichtbaar in het product ("lezers zoals
jij groeiden gemiddeld 31% in 4 weken"), pushmeldingen, contentdiepte per
niveau, en een native App Store-versie met de bijbehorende vindbaarheid.

---

## 2. Wat er in deze ronde bij kwam

- **Bugfix navigatiebalk:** de iOS-bug waarbij de onderbalk midden in het
  scherm bleef hangen (WebKit: `position:fixed` + `backdrop-filter` schildert
  na scrollen op een verkeerde positie) is verholpen door de balk een eigen
  compositing-laag te geven.
- **🧪 Testknop leerweg:** op het Leerweg-scherm staat een geel gestreepte
  DEV-knop die de eerstvolgende missie afvinkt, zodat de hele leerweg zonder
  trainen te testen is. **Deze knop moet vóór livegang weg** — en dat wordt
  afgedwongen: `npm run release:check:production` faalt zolang hij bestaat.
- **⭐ Founders-aanbod (voorkant):** modal met offer-stack, prijsanker
  (doorgestreept maandbedrag), schaarste-regel, 30-dagen-garantie en een
  CTA die de Mollie-betaallink opent zodra die is ingevuld
  (`MOLLIE_BETAALLINK` in index.html). Bereikbaar via het zijmenu.

---

## 3. Livegang-plan met testgebruikers

### Fase 1 — Gesloten test (nu → ~2 weken)
1. Merge deze branch en stuur 5–10 testers de link + de negen-punten-checklist
   in `BETA_TESTPLAN.md`. De 🧪-testknop staat erin zodat testers (en jij) de
   volledige leerweg kunnen doorlopen.
2. Verzamel per tester: waar ze stopten, of de eerste winst geloofwaardig
   voelde, en elke fout met screenshot (staat al als format in het testplan).
3. Wekelijks: fixes doorvoeren, opnieuw mergen.

### Fase 2 — Pre-live checklist (blokkerend, in deze volgorde)
1. **Testknop verwijderen** (knop `#lw-dev-skip` + functie `lwDevSkipMissie`)
   — `release:check:production` bewaakt dit.
2. **Privacy invullen** (placeholders in `privacy.html`) — zelfde check.
3. **Supabase productie**: e-mail-login aan, RLS getest met twee accounts,
   verwijderfunctie gedeployed (stappen staan in `GO_TO_MARKET.md`).
4. **Mollie koppelen** (zie §4).
5. `npm run release:check:production` volledig groen.

### Fase 3 — Livegang
1. Founders-aanbod actief met echte betaallink en een eerlijke plekken-teller.
2. Na de founders-lichting: maandabonnement aanzetten; founders houden
   levenslange toegang (dat is de belofte — nooit op terugkomen).
3. Eerste kwartaaldonatie aan het goede doel uitvoeren en publiceren.

---

## 4. Mollie & het founders-model (Hormozi, maar eerlijk)

**Het aanbod** (staat al in de app, teksten aanpasbaar via constantes):
- Anker: "straks €4,99 per maand" → **nu eenmalig €29, voor altijd**.
- Offer-stack: alles + alle toekomstige updates + founders-badge + 80% van de
  netto-opbrengst naar leesonderwijs.
- Risico-omkering: 30 dagen niet-goed-geld-terug.
- Schaarste: alleen de eerste 100 lezers — **houd dit echt**. Nep-schaarste
  sloopt precies het vertrouwen waarop dit merk drijft.

**Mollie aansluiten, praktisch:**
1. Maak in het Mollie-dashboard een **Payment Link** aan (€29, omschrijving
   "Snellezer — Lifetime (Founders)"). Plak de URL in `MOLLIE_BETAALLINK`
   in index.html. Vanaf dat moment werkt de knop.
2. **Eerste 100 = handmatig ontgrendelen is prima.** Mollie mailt je per
   betaling; zet in Supabase een vlag `lifetime = true` op dat account (of
   mail de gebruiker een code). Bouw pas daarna de automatische route:
   Mollie-webhook → Supabase Edge Function → vlag op gebruiker.
3. Zet de prijs- en plekkenteksten centraal bij (constantes
   `FOUNDERS_PRIJS`, `FOUNDERS_ANKER`, `FOUNDERS_PLEKKEN`).
4. Boekhouding: €29-verkopen zijn omzet (btw!), de 80%-donatie is een gift —
   bespreek de opzet één keer met een boekhouder vóór de eerste verkoop
   (zie ook `MONETISATIE_EN_IMPACT.md`).

**Wat bewust nog níet gebouwd is:** een paywall. Tijdens de testfase moet
alles open zijn (je wilt gedrag zien, geen frictie). De waardeladder — wat
straks gratis blijft versus achter lifetime/abonnement komt — staat
uitgewerkt in `MONETISATIE_EN_IMPACT.md` §4 en bouwen we ná de testronde.
