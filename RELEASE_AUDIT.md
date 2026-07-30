# Snellezer — release-audit

Statusdatum: 30 juli 2026

## Conclusie

De lokale versie is een bruikbare release candidate: de webbuild slaagt, alle 29 leerwegmissies openen en voltooien via hun bedoelde contract en de bekende blokkades in week 3 zijn in een echte browser hersteld. De Supabase-basismigratie, de toegestane origins en de actuele `delete-account`-functie zijn op 30 juli 2026 live uitgerold. De definitieve privacygegevens zijn ingevuld en de registratie beschermt kinderaccounts met een 16+-/ouderbevestiging. De webrelease kan worden gepubliceerd zodra de nieuwe bewaartermijnmigratie live staat; daarna moeten de Git-/Verceldeployment en definitieve live controles slagen. Native publicatie blijft daarnaast afhankelijk van een volledige Xcode-/Java-toolchain.

“Geen bugs” en “volledig veilig” zijn geen verantwoord absolute garanties. De huidige controles verlagen het risico, maar vervangen geen juridisch advies, store-review of onafhankelijke penetratietest.

## Wat aantoonbaar is gecontroleerd

| Onderdeel | Resultaat |
|---|---|
| Webbuild en release-preflight | Geslaagd |
| Vercel-previewdeployment | Infrastructuur bewezen op beschermde preview v44; actuele v50-build lokaal groen en wacht op nieuwe preview |
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
| Supabase-livebackend | Migratie `20260710_user_data_contract.sql`, exacte origins-secret en `delete-account`-functie succesvol uitgerold op project `hmxrwvxfmhsfgfubcpwb` |
| Privacyverklaring | Elev8 Solutions, Almelo, contactadres, termijnen, regio’s, leveranciers, rechten en kinderen definitief ingevuld; geen placeholders of conceptstatus |
| Kinderaccounts | Gastgebruik blijft open; een online account voor iemand onder 16 wordt door een ouder/voogd aangemaakt en beheerd; bevestiging wordt in Auth-metadata opgeslagen |
| Aanmeldmethoden | E-mail staat live aan; Google- en Apple-knoppen zijn voorbereid maar worden automatisch verborgen zolang de provider in Supabase uitstaat |
| Bewaartermijn | Nieuwe dagelijkse Supabase-cronmigratie verwijdert accounts na 24 maanden zonder login of cloudsynchronisatie; live-uitrol nog te bevestigen |
| Webbeveiliging | CSP, frameblokkade, `nosniff`, referrer- en permissionsbeleid aanwezig |
| Datatoegang | RLS-migratie beperkt `user_data` tot het eigen account |
| Cloudconflicten | Gastvoortgang wordt samengevoegd; actieve missie, WPM-doel en XP-begrenzing synchroniseren; accountdata wordt strikt gescheiden |
| Toegankelijkheid | 375 geladen bedieningselementen gecontroleerd, inclusief een aangemaakt profiel: geen naamloze, geneste of bekende niet-semantische bediening; hoofdkaarten en leesvlakken zijn met Enter/spatie bedienbaar |
| Mobiele layout | Alle 24 schermen gecontroleerd op 390 × 844 px; geen horizontale pagina-overflow |
| Accountschermen | Inloggen, registreren en wachtwoordherstel gebruiken echte formulieren, gekoppelde labels, live feedback en mobiele scroll |
| Android-basis | Back-up uitgeschakeld en onbeveiligd HTTP-verkeer geblokkeerd |
| Offline/PWA | Versiecache v50, privacy- en verwijderpagina in app-shell |

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
- E-mail- en OAuth-registratie vereisen nu een expliciete 16+-/ouderbevestiging. De bevestiging wordt bij het account vastgelegd zonder een geboortedatum te verzamelen.
- De privacy- en accountverwijderpagina bevatten de definitieve aanbieder, vestigingsplaats, contactgegevens, bewaartermijnen, verwerkingsregio’s en kinderaccountregel.
- Een dagelijkse, idempotent benoemde Supabase-crontaak voert de afgesproken termijn van 24 maanden inactiviteit uit op basis van de laatste login of cloudsynchronisatie.
- De complete 29-missiematrix is nu een vaste regressiepoort. Een wijziging aan week 3 opdracht 3, perifeer level 4, een variant of een missiespecifieke tempo-instelling laat de releasecheck voortaan falen.

## Blokkerend vóór publicatie

1. **Bewaartermijnmigratie live zetten.** `20260730_inactive_account_retention.sql` moet nog naar het gekoppelde Supabase-project worden gepusht en de actieve cronjob moet worden bevestigd.
2. **Nieuwe versie deployen.** De live site loopt achter: de openbare verwijderroute geeft 404, de live privacyverklaring is een concept en de live service worker gebruikt een oudere cache.
3. **Privacy-inbox activeren.** `info@elev8solutions.nl` is als openbaar rechten- en verwijdercontact gekozen en moet vóór actieve gebruikers bereikbaar zijn.
4. **Definitieve live controle.** Laat na de nieuwe frontenddeployment `npm run release:check:live` slagen en voer accountverwijdering één keer met een speciaal testaccount uit.
5. **Native builds maken.** Deze Mac mist volledige Xcode en een Java-runtime. Daardoor zijn iOS- en Androidcompilatie nog niet bewezen.
6. **Storeformulieren invullen.** Google Play verwacht bij accountcreatie zowel een in-app verwijderpad als een werkende webresource. Apple verwacht een vindbare in-app accountverwijdering; als Sign in with Apple actief wordt, moeten de Apple-tokens ook worden ingetrokken.

Officiële storebronnen:

- [Apple: account deletion in apps](https://developer.apple.com/support/offering-account-deletion-in-your-app)
- [Apple: token revocation bij account deletion](https://developer.apple.com/documentation/technotes/tn3194-handling-account-deletions-and-revoking-tokens-for-sign-in-with-apple)
- [Google Play: account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111)

## Resterende beveiligingsrisico’s

- De grote HTML-app gebruikt nog inline JavaScript, inline stijlen en inline klikhandlers. Daardoor heeft de CSP nog `'unsafe-inline'` nodig. Splits JavaScript en CSS op in modules en verwijder inline handlers om de CSP wezenlijk strenger te maken.
- Artikelimport gebruikt externe CORS-proxy’s. Dat is zichtbaar gemaakt aan gebruikers, maar een eigen streng begrensde serverfunctie is veiliger en privacyvriendelijker.
- De Supabase-basismigratie en functie zijn live uitgerold. De bewaartermijnmigratie wacht nog op live-uitrol. Een volledige accountverwijdering met een speciaal testaccount moet na de frontenddeployment nog worden uitgevoerd; gebruik hiervoor geen echt gebruikersaccount.
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

## Vastgelegde privacykeuzes

- Aanbieder: Elev8 Solutions, Almelo.
- Openbaar privacy- en verwijdercontact: `info@elev8solutions.nl`.
- Productieadres: `https://snel-lees-app.vercel.app`.
- Kinderen mogen Snellezer gebruiken; voor iemand onder 16 maakt en beheert een ouder of voogd het online account. Gastgebruik blijft mogelijk.
- E-mail staat in Supabase aan. Google en Apple zijn toegestaan en technisch voorbereid, maar staan op 30 juli 2026 nog uit en worden daarom niet getoond.
- Account- en trainingsgegevens: verwijderen op verzoek of na 24 maanden inactiviteit. Support: 12 maanden. Technische logs en back-ups: maximaal 30 dagen, behoudens concrete incidenten of wettelijke noodzaak.
- Accountdatabase: Supabase West-Europa (Ierland). Webverkeer: wereldwijd Vercel-netwerk met toepasselijke doorgiftewaarborgen.
- De bestaande externe artikelophaaldiensten blijven zichtbaar als optionele, gewaarschuwde functie; vertrouwelijke links worden afgeraden.

## KAT-fase — nog niet uitgevoerd

De nieuwe lessen volgens **Kennis → Actie → Terugblik** zijn bewust nog niet gebouwd. Eerst moet bovenstaande analyse worden goedgekeurd. Daarna kan iedere leerwegdag één vaste opbouw krijgen:

1. **Kennis:** één korte, feitelijk voorzichtige uitleg met concreet leerdoel.
2. **Actie:** het bijbehorende spel met meetbare afrondingscriteria.
3. **Terugblik:** één inhoudsvraag, zelfinschatting en persoonlijk vervolgadoel.
