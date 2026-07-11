# SnelLees Go-To-Market

Dit document is de releasevolgorde voor SnelLees. Het doel is niet een zo hoog mogelijke WPM-score, maar een aantoonbare verbetering van tempo met begrip. De kernscore in de app blijft daarom `WPM x begrip`.

## Wat nu staat

- Waarde-first onboarding: een bezoeker kan trainen zonder direct een account te maken.
- Begintest, persoonlijke eerste missie, dagelijkse uitdaging, XP en streak.
- Startweek met zeven opeenvolgende sessies: tempo, begrip, oogbeweging, fixatie, regressie, langere tekst en een eindmeting.
- Persoonlijke voortgang en startweek worden met een account naar Supabase gesynchroniseerd.
- Installeerbare PWA met lokale assets en offline app-shell.
- GitHub `main` bouwt en publiceert de webversie automatisch op Vercel vanuit `dist/`.
- Privacyvriendelijke beta-events blijven lokaal, worden met een account gesynchroniseerd en bevatten geen geplakte leesteksten.
- Google- en Apple-knoppen verschijnen alleen wanneer die provider in Supabase werkelijk is ingeschakeld; e-mail en gastmodus blijven altijd beschikbaar.

## Besliskader

| Fase | Doel | Besluit op basis van |
| --- | --- | --- |
| Gesloten beta | Bewijzen dat mensen de eerste winst voelen | Begintest plus eerste sessie, D1-retentie, kwalitatieve feedback |
| Open beta | Bewijzen dat de startweek werkt | Voltooide startweken, eindmeting, begrip per oefening |
| Native release | Distributie en herhaalgebruik uitbreiden | Stabiele crashvrije PWA, privacy afgerond, meetbare retentie |

## Launchgates voor publieke beta

1. Privacy en accountverwijdering

   Vul `PRIVACY_POLICY_TEMPLATE.md` en `privacy.html` met bedrijfsnaam, privacycontact en vaste HTTPS-URL. De verklaring is vanuit het appmenu en de loginpagina bereikbaar, wordt offline gecachet en gaat mee in de native builds. De app bevat nu een verwijderdialoog en een deploybare Supabase Edge Function in `supabase/functions/delete-account/`; deploy en test die functie voordat je publiceert. Apple verlangt dat een app met accountaanmaak verwijdering in de app laat starten; Google Play verlangt een privacybeleid en een correcte Data Safety-opgave. Het echte privacycontact blijft blokkerend voor de stores.

2. Meetbare funnel

   De app registreert al `onboarding_voltooid`, `begintest_voltooid`, `eerste_missie_voltooid`, `startweek_sessie_voltooid`, `startweek_voltooid`, `hermeting_voltooid`, `install_voltooid` en `account_aangemaakt`, zonder geplakte leesteksten. Gebruik `supabase/queries/beta_metrics.sql` in de afgeschermde Supabase SQL Editor voor de wekelijkse funnel; verzamel geen externe advertentieprofielen of vrije tekst.

3. Productclaims kalibreren

   Positioneer SnelLees als een oefenapp die het eigen tempo en begrip meet. Vermijd een universele belofte als "iedereen leest 2x sneller". De coach mag snelheid pas verhogen als begrip op of boven 70% blijft; bij lager begrip is herlezen of chunk-lezen de volgende stap.

4. Testprotocol

   Test op iPhone Safari, Android Chrome en een kleine desktop. Controleer offline openen na een eerdere online sessie, installeren, inloggen, uitloggen, sync op een tweede apparaat, tekst plakken/delen en de complete startweek. Laat minimaal vijf beta-gebruikers dit zonder uitleg doorlopen.

5. Releasehygiëne

   Leg één productie-URL met HTTPS vast, pas `supabase/migrations/20260710_user_data_contract.sql` toe, controleer daarna Supabase RLS met twee testaccounts en voeg een korte release checklist toe aan iedere versie. Draai voor iedere release `npm run release:check`; gebruik `npm run release:check:production` zodra het privacybeleid is ingevuld en `npm run release:check:live` voor Vercel, providerstatus, databaseschema, anonieme RLS en de verwijderfunctie. De service worker haalt appcode network-first op en houdt offline een fallback paraat.

6. AI zonder verrassingskosten

   De huidige AI-functies zijn opt-in en werken alleen met een door de gebruiker ingevoerde Gemini-sleutel, lokaal op dat apparaat. Maak dit niet de kern van de eerste beta en zet nooit een gedeelde betaalde API-sleutel in de browser. Voor een bredere release zijn een eigen serverroute, verbruiksgrenzen en duidelijke toestemming nodig.

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

De eerste native versie heeft nu een veilige WebView-configuratie, SnelLees-iconen en splashscreens, plus dezelfde webbuild als de PWA. Voor de release resten deeplinks naar de twee PWA-shortcuts, in-app privacy/verwijdering, store-screenshots, signing en een echte devicebuild. Die laatste stap vraagt volledige Xcode en een Android SDK; de huidige machine heeft die omgevingen nog niet volledig beschikbaar. De Capacitor-basis en buildflow staan in `CAPACITOR.md`. Pushmeldingen pas daarna toevoegen, en alleen na expliciete toestemming; de startweek en streak zijn al nuttig zonder meldingsdruk.

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
