# Snellezer — release-audit

Statusdatum: 25 juli 2026

## Conclusie

De lokale versie is een bruikbare release candidate: de webbuild slaagt, de geteste spellen en niveaus zijn doorspeelbaar en de bekende blokkade in week 3 is opgelost. De app is nog **niet publiceerbaar**. Publicatie blijft bewust geblokkeerd totdat de privacygegevens zijn ingevuld, de live backendcontroles slagen, de nieuwe build is gedeployed en de native projecten op een volledige toolchain zijn gebouwd.

“Geen bugs” en “volledig veilig” zijn geen verantwoord absolute garanties. De huidige controles verlagen het risico, maar vervangen geen juridisch advies, store-review of onafhankelijke penetratietest.

## Wat aantoonbaar is gecontroleerd

| Onderdeel | Resultaat |
|---|---|
| Webbuild en release-preflight | Geslaagd |
| Productie-afhankelijkheden | `npm audit --omit=dev`: 0 bekende kwetsbaarheden |
| Trainingsroutes | Alle 17 kaarten openen het bedoelde scherm |
| Perifeer lezen | Alle 8 levels volledig gespeeld |
| Dyslexie Leeslab | Alle 7 lessen volledig gespeeld |
| Oogtraining | Alle 3 timerlevels volledig gespeeld |
| Lange teksten | Starter, Gevorderd en Expert volledig gespeeld |
| Week 3, opdracht 3 | Gerepareerd: de natuurlijke afloop van het S-patroon vinkt de missie af |
| Week 3-varianten | Tel-methode, metronoom, S-patroon, perifeer level 4+ en humming zijn afzonderlijk gekoppeld |
| Week 4-varianten | Previewing, skimmen en scannen hebben ieder een eigen geldige afronding |
| Scanopdracht | Zoekwoord komt gegarandeerd uit de getoonde tekst; fout en goed antwoord getest |
| Accountverwijdering | In-app flow, dubbele bevestiging en openbare instructie aanwezig |
| Webbeveiliging | CSP, frameblokkade, `nosniff`, referrer- en permissionsbeleid aanwezig |
| Datatoegang | RLS-migratie beperkt `user_data` tot het eigen account |
| Android-basis | Back-up uitgeschakeld en onbeveiligd HTTP-verkeer geblokkeerd |
| Offline/PWA | Versiecache v42, privacy- en verwijderpagina in app-shell |

## Opgeloste releaseproblemen

- Week 3 kon na de papieranimatie niet verder, omdat de oefening alleen stopte en nooit een voltooi-event gaf.
- De leerweg keek alleen naar het schermtype. Daardoor kon een verkeerde tab een missie afronden. Missies controleren nu ook de bedoelde variant en, bij perifeer lezen, het minimumlevel.
- Humming, tel-methode, previewing en skimmen hadden geen geldige eigen afronding.
- De scantrainer koos soms een woord dat niet in de tekst stond en vulde het antwoord zelf in.
- Timers, animaties, spraak en open leesrondes konden na navigeren onzichtbaar doorlopen; ieder oefenscherm wordt nu centraal en zonder beloning gestopt.
- Alle perifere levels deelden eerder een onduidelijke ontgrendel-/voltooidstatus.
- Oogtrainingskaarten waren geen toegankelijke knoppen en noemden onjuiste sessieduren.
- Lange teksten toonde bij promotie meerdere modale vensters boven elkaar.
- Dubbele globale functies voor de tekstbibliotheek zijn verwijderd.
- Profiel- en accountnamen worden veilig als tekst ingevoegd in plaats van als HTML.
- Artikelimport weigert onbeveiligde, lokale en private URL’s en waarschuwt voor externe ophaaldiensten.
- De delete-accountfunctie accepteert niet langer iedere browserherkomst.
- Android maakt geen automatische back-up van lokale account- en trainingsdata.

## Blokkerend vóór publicatie

1. **Privacygegevens invullen.** `[BEDRIJFSNAAM]`, `[VESTIGINGSPLAATS]` en `[PRIVACYCONTACT]` staan nog in de verklaring en verwijderpagina. Bewaartermijnen, kinderen en verwerkingsregio’s zijn nog niet definitief.
2. **Nieuwe versie deployen.** De live site loopt achter: de openbare verwijderroute geeft 404, de live privacyverklaring is een concept en de live service worker gebruikt een oudere cache.
3. **Backend live bewijzen.** Pas de Supabase-migratie toe, deploy de actuele `delete-account`-functie en laat `npm run release:check:live` volledig slagen.
4. **Native builds maken.** Deze Mac mist volledige Xcode en een Java-runtime. Daardoor zijn iOS- en Androidcompilatie nog niet bewezen.
5. **Storeformulieren invullen.** Google Play verwacht bij accountcreatie zowel een in-app verwijderpad als een werkende webresource. Apple verwacht een vindbare in-app accountverwijdering; als Sign in with Apple actief wordt, moeten de Apple-tokens ook worden ingetrokken.

Officiële storebronnen:

- [Apple: account deletion in apps](https://developer.apple.com/support/offering-account-deletion-in-your-app)
- [Apple: token revocation bij account deletion](https://developer.apple.com/documentation/technotes/tn3194-handling-account-deletions-and-revoking-tokens-for-sign-in-with-apple)
- [Google Play: account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111)

## Resterende beveiligingsrisico’s

- De grote HTML-app gebruikt nog inline JavaScript, inline stijlen en inline klikhandlers. Daardoor heeft de CSP nog `'unsafe-inline'` nodig. Splits JavaScript en CSS op in modules en verwijder inline handlers om de CSP wezenlijk strenger te maken.
- Artikelimport gebruikt externe CORS-proxy’s. Dat is zichtbaar gemaakt aan gebruikers, maar een eigen streng begrensde serverfunctie is veiliger en privacyvriendelijker.
- De live Supabase-configuratie kon vanuit deze beperkte ontwikkelomgeving niet end-to-end worden benaderd. RLS, CORS en accountverwijdering moeten na deployment nog live slagen.
- Er is geen onafhankelijke pentest uitgevoerd. Gebruik voor een latere formele controle minimaal [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) als verificatiebasis.
- Als Apple-login wordt ingeschakeld, is alleen het verwijderen van het Supabase-account niet genoeg; de Apple-tokenrevocatie moet aantoonbaar worden afgehandeld.

## Verbeteringen na de releaseblokkades

### Prioriteit 1

- Splits de monolithische `index.html` op in schermmodules, gedeelde UI-componenten en afzonderlijke CSS.
- Voeg geautomatiseerde tests toe voor alle 28 leerwegdagen, inclusief de exacte missievariant, kwaliteitspoort en ontgrendeling van de volgende dag.
- Voeg conflictresolutie toe aan cloudsynchronisatie, zodat recente lokale gastvoortgang niet ongemerkt door oudere clouddata kan worden overschreven.
- Vervang externe artikelproxy’s door één eigen serverendpoint met DNS-/IP-controle, limieten, time-outs en inhoudslimieten.

### Prioriteit 2

- Voeg foutmonitoring toe zonder tekstinhoud of onnodige persoonsgegevens te verzamelen.
- Laat een toetsenbord- en screenreaderaudit uitvoeren op alle dynamische spellen.
- Maak sessieduren in de leerweg gelijk aan de werkelijke oefenduur.
- Voeg een betrouwbaar herstelpad toe als accountdata wel is verwijderd maar het Auth-account door een tijdelijke backendfout nog bestaat.

## Privacyvragen die nog beantwoord moeten worden

1. Wat is de officiële bedrijfs- of persoonsnaam van de aanbieder en welke vestigingsplaats moet worden genoemd?
2. Welk e-mailadres mag openbaar als privacy- en verwijdercontact?
3. Blijft de definitieve productiedomeinnaam `https://snel-lees-app.vercel.app`?
4. Is Snellezer bedoeld voor kinderen onder 16, en mogen zij een online account maken? Zo ja: hoe wordt ouderlijke toestemming geregeld?
5. Welke aanmeldmethoden gaan live: e-mail, Google en/of Apple?
6. Komen er betalingen, advertenties, externe analytics of crashreporting?
7. Wil je de externe functie “Artikel ophalen via URL” behouden of vervangen door een eigen endpoint?
8. Welke termijnen wil je hanteren voor inactieve accounts, supportverzoeken, beveiligingslogs en back-ups?
9. In welke regio’s staan Supabase en Vercel voor dit project ingesteld?

## KAT-fase — nog niet uitgevoerd

De nieuwe lessen volgens **Kennis → Actie → Terugblik** zijn bewust nog niet gebouwd. Eerst moet bovenstaande analyse worden goedgekeurd. Daarna kan iedere leerwegdag één vaste opbouw krijgen:

1. **Kennis:** één korte, feitelijk voorzichtige uitleg met concreet leerdoel.
2. **Actie:** het bijbehorende spel met meetbare afrondingscriteria.
3. **Terugblik:** één inhoudsvraag, zelfinschatting en persoonlijk vervolgadoel.
