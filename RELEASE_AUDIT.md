# Snellezer — release-audit

Statusdatum: 30 juli 2026

## Conclusie

De lokale versie is een bruikbare release candidate: de webbuild slaagt, alle 29 leerwegmissies openen en voltooien via hun bedoelde contract en de bekende blokkades in week 3 zijn in een echte browser hersteld. De app is nog **niet publiceerbaar**. Publicatie blijft bewust geblokkeerd totdat de privacygegevens zijn ingevuld, de live backendcontroles slagen, de nieuwe build is gedeployed en de native projecten op een volledige toolchain zijn gebouwd.

“Geen bugs” en “volledig veilig” zijn geen verantwoord absolute garanties. De huidige controles verlagen het risico, maar vervangen geen juridisch advies, store-review of onafhankelijke penetratietest.

## Wat aantoonbaar is gecontroleerd

| Onderdeel | Resultaat |
|---|---|
| Webbuild en release-preflight | Geslaagd |
| Vercel-previewdeployment | Infrastructuur bewezen op beschermde preview v44; actuele v49-build lokaal groen en wacht op nieuwe preview |
| Productie-afhankelijkheden | `npm audit --omit=dev`: 0 bekende kwetsbaarheden |
| Trainingsroutes | Alle 17 kaarten openen het bedoelde scherm |
| Volledige leerweg | Alle 29 missies openen, respecteren variant/kwaliteit en ontgrendelen de volgende stap |
| Vaste curriculumregressie | Exacte matrix van 29 missies, 8/7/7/7-verdeling, tempo-instellingen, varianten en minimumlevels draait bij iedere releasecheck |
| Voltooiingspoort in browser | 29/29 missies schrijven voortgang; verkeerde varianten en perifeer onder level 4 worden aantoonbaar geweigerd |
| Perifeer lezen | Alle 8 levels volledig gespeeld |
| Dyslexie Leeslab | Alle 7 lessen volledig gespeeld |
| Oogtraining | Alle 3 timerlevels volledig gespeeld |
| Lange teksten | Starter, Gevorderd en Expert volledig gespeeld |
| Week 3, opdracht 3 | Gerepareerd: zichtbare S-gids, regelvoortgang, meescroll en natuurlijke voltooiing tot 40/40 |
| Week 3-varianten | Tel-methode, metronoom, S-patroon, perifeer level 4+ en humming zijn afzonderlijk gekoppeld |
| Perifere leerwegmissie | Begeleide opbouw van level 1 naar doellevel 4 met directe “volgend level”-actie |
| Week 4-varianten | Previewing, skimmen en scannen hebben ieder een eigen geldige afronding |
| Week 4 persoonlijke top 3 | Eigen keuzescherm, precies drie toegankelijke keuzes, opslag en missieafronding |
| Oude actieve missies | Verouderde scherm-, variant- en levelcontracten worden bij hervatten gemigreerd |
| Missie-instellingen | RSVP-tempo, chunkgrootte, fixatiebreedte en metronoomtempo worden vanuit de leerweg ingesteld |
| Scanopdracht | Zoekwoord komt gegarandeerd uit de getoonde tekst; fout en goed antwoord getest |
| Accountverwijdering | In-app flow, dubbele bevestiging en openbare instructie aanwezig |
| Webbeveiliging | CSP, frameblokkade, `nosniff`, referrer- en permissionsbeleid aanwezig |
| Datatoegang | RLS-migratie beperkt `user_data` tot het eigen account |
| Cloudconflicten | Gastvoortgang wordt samengevoegd; actieve missie, WPM-doel en XP-begrenzing synchroniseren; accountdata wordt strikt gescheiden |
| Toegankelijkheid | 375 geladen bedieningselementen gecontroleerd, inclusief een aangemaakt profiel: geen naamloze, geneste of bekende niet-semantische bediening; hoofdkaarten en leesvlakken zijn met Enter/spatie bedienbaar |
| Mobiele layout | Alle 24 schermen gecontroleerd op 390 × 844 px; geen horizontale pagina-overflow |
| Accountschermen | Inloggen, registreren en wachtwoordherstel gebruiken echte formulieren, gekoppelde labels, live feedback en mobiele scroll |
| Android-basis | Back-up uitgeschakeld en onbeveiligd HTTP-verkeer geblokkeerd |
| Offline/PWA | Versiecache v49, privacy- en verwijderpagina in app-shell |

## Opgeloste releaseproblemen

- De S-gids had tijdens week 3 feitelijk breedte nul en liep daarna buiten beeld. De gids blijft nu zichtbaar, de tekst scrolt mee en 40/40 rondt de missie af.
- De leerweg keek alleen naar het schermtype. Daardoor kon een verkeerde tab een missie afronden. Missies controleren nu ook de bedoelde variant en, bij perifeer lezen, het minimumlevel.
- De perifere missie noemde level 4–6 zonder uit te leggen dat levels 1–3 eerst moesten worden vrijgespeeld. De missie begeleidt nu iedere stap tot level 4.
- Week 4 had voor “persoonlijke top-3 technieken” geen eigen opdracht en opende een willekeurige coachtraining. Er is nu een volwaardige keuze- en voltooiingsflow.
- Leerwegmissies openden eerder soms met laatst gebruikte instellingen in plaats van het beloofde tempo of de beloofde groepsgrootte.
- Humming, tel-methode, previewing en skimmen hadden geen geldige eigen afronding.
- De scantrainer koos soms een woord dat niet in de tekst stond en vulde het antwoord zelf in.
- Timers, animaties, spraak en open leesrondes konden na navigeren onzichtbaar doorlopen; ieder oefenscherm wordt nu centraal en zonder beloning gestopt.
- Alle perifere levels deelden eerder een onduidelijke ontgrendel-/voltooidstatus.
- Oogtrainingskaarten waren geen toegankelijke knoppen en noemden onjuiste sessieduren.
- Lange teksten toonde bij promotie meerdere modale vensters boven elkaar.
- Dubbele globale functies voor de tekstbibliotheek zijn verwijderd.
- Profiel- en accountnamen worden veilig als tekst ingevoegd in plaats van als HTML.
- Gastvoortgang en bestaande cloudvoortgang worden zonder stil overschrijven samengevoegd. Bij accountwissel en uitloggen wordt lokale accountdata gewist, zodat een volgende gebruiker die niet kan zien.
- Artikelimport weigert onbeveiligde, lokale en private URL’s en waarschuwt voor externe ophaaldiensten.
- De delete-accountfunctie accepteert niet langer iedere browserherkomst, controleert ook gewone POST-verzoeken en gebruikt een exact gepinde Supabase-client.
- Android maakt geen automatische back-up van lokale account- en trainingsdata.
- De belangrijkste klikbare kaarten, profieltegels en RSVP-/chunkleesvlakken waren alleen als gewone tekstblokken herkenbaar. Ze hebben nu een toegankelijke knoprol, zichtbare toetsenbordfocus en Enter-/spatiebediening.
- Alle statische en dynamisch opgebouwde invoervelden hebben een toegankelijke naam; dit wordt voor de kernvelden voortaan door de release-preflight bewaakt.
- De account- en wachtwoordvelden staan nu in echte formulieren, waardoor Enter, wachtwoordmanagers en browser-autofill voorspelbaar werken; foutmeldingen worden als live status aangekondigd.
- De complete 29-missiematrix is nu een vaste regressiepoort. Een wijziging aan week 3 opdracht 3, perifeer level 4, een variant of een missiespecifieke tempo-instelling laat de releasecheck voortaan falen.

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
- Zet de bestaande 29-missiecontractcheck later ook als volledige browser-E2E in CI, zodat naast de contracten ook ieder zichtbaar spelpad automatisch wordt doorlopen.
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
