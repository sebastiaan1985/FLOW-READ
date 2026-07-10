# SnelLees Go-To-Market

Dit document is de releasevolgorde voor SnelLees. Het doel is niet een zo hoog mogelijke WPM-score, maar een aantoonbare verbetering van tempo met begrip. De kernscore in de app blijft daarom `WPM x begrip`.

## Wat nu staat

- Waarde-first onboarding: een bezoeker kan trainen zonder direct een account te maken.
- Begintest, persoonlijke eerste missie, dagelijkse uitdaging, XP en streak.
- Startweek met zeven opeenvolgende sessies: tempo, begrip, oogbeweging, fixatie, regressie, langere tekst en een eindmeting.
- Persoonlijke voortgang en startweek worden met een account naar Supabase gesynchroniseerd.
- Installeerbare PWA met lokale assets en offline app-shell.

## Besliskader

| Fase | Doel | Besluit op basis van |
| --- | --- | --- |
| Gesloten beta | Bewijzen dat mensen de eerste winst voelen | Begintest plus eerste sessie, D1-retentie, kwalitatieve feedback |
| Open beta | Bewijzen dat de startweek werkt | Voltooide startweken, eindmeting, begrip per oefening |
| Native release | Distributie en herhaalgebruik uitbreiden | Stabiele crashvrije PWA, privacy afgerond, meetbare retentie |

## Launchgates voor publieke beta

1. Privacy en accountverwijdering

   Voeg een privacybeleid toe in de app en op een publieke URL. Het moet accountgegevens, trainingsresultaten, opslagduur, Supabase en een contactpunt benoemen. Maak daarnaast een echte verwijderflow: Apple verlangt dat een app met accountaanmaak verwijdering in de app laat starten; Google Play verlangt een privacybeleid en een correcte Data Safety-opgave. Dit is blokkerend voor de stores.

2. Meetbare funnel

   Voeg voor de beta een privacyvriendelijke eventlaag toe. Minimaal: `onboarding_voltooid`, `begintest_voltooid`, `eerste_missie_voltooid`, `startweek_sessie_voltooid`, `startweek_voltooid`, `hermeting_voltooid`, `install_prompt_getoond`, `install_voltooid` en `account_aangemaakt`. Verzamel geen geplakte leesteksten in analytics.

3. Productclaims kalibreren

   Positioneer SnelLees als een oefenapp die het eigen tempo en begrip meet. Vermijd een universele belofte als "iedereen leest 2x sneller". De coach mag snelheid pas verhogen als begrip op of boven 70% blijft; bij lager begrip is herlezen of chunk-lezen de volgende stap.

4. Testprotocol

   Test op iPhone Safari, Android Chrome en een kleine desktop. Controleer offline openen na een eerdere online sessie, installeren, inloggen, uitloggen, sync op een tweede apparaat, tekst plakken/delen en de complete startweek. Laat minimaal vijf beta-gebruikers dit zonder uitleg doorlopen.

5. Releasehygiëne

   Leg één productie-URL met HTTPS vast, zet Supabase RLS en de `user_data`-toegang handmatig onder review, en voeg een korte release checklist toe aan iedere versie. Een service-worker cache-versie moet bij elke release omhoog.

## Beta-metrics

Gebruik deze als beslisgrenzen, niet als cosmetische KPI's.

| Metric | Eerste doel | Waarom |
| --- | --- | --- |
| Activatie | Begintest en eerste missie in dezelfde sessie | De gebruiker moet snel waarde ervaren |
| Begrip | Minimaal 70% bij snelheidsrondes | Voorkomt dat WPM zonder leerwaarde wordt beloond |
| D1-retentie | 30% of hoger | Signaal dat de eerste winst terug laat komen |
| Startweek voltooid | 20% of hoger | Bewijst dat de structuur haalbaar is |
| Eindmeting | 60% of hoger onder startweek-voltooiers | Geeft een eerlijke voor/na-momentopname |
| Crash- en foutvrije sessies | 99% of hoger | Ondergrens voor store-release |

## Native route

Gebruik de PWA eerst voor de beta. Wanneer de bovenstaande gates groen zijn, voeg een dunne Capacitor-shell toe rond dezelfde webapp. Daarmee blijven training, content en Supabase gedeeld, terwijl App Store en Play Store distributie mogelijk worden.

De eerste native versie heeft alleen nodig: veilige WebView-configuratie, iconen en splash, deeplinks naar de twee PWA-shortcuts, in-app privacy/verwijdering, store-screenshots en een echte releasebuild. Pushmeldingen pas daarna toevoegen, en alleen na expliciete toestemming; de startweek en streak zijn al nuttig zonder meldingsdruk.

## Volgorde van uitvoering

1. Sluit privacybeleid, verwijderflow en Supabase-toegangscontrole af.
2. Voeg de eventlaag toe en start een gesloten beta met 20 tot 50 lezers.
3. Verbeter alleen de grootste uitval in de funnel, per wekelijkse meting.
4. Publiceer een open PWA-beta zodra de startweek en offline flow stabiel zijn.
5. Package dezelfde versie met Capacitor voor een beperkte TestFlight- en Play-test.

## Bronnen voor store-eisen

- [Apple: account deletion in apps](https://developer.apple.com/support/offering-account-deletion-in-your-app/)
- [Google Play: Data Safety](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en)
- [Google Play: privacy policy en app content](https://support.google.com/googleplay/android-developer/answer/10788890?hl=en)
