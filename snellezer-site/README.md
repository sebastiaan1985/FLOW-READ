# Snellezer · binnenkort

Losse promotiepagina voor de app, los van de webapp in `snellezer/`. Eén bestand zonder build: afbeeldingen staan er als data-URI in, lettertypen komen van Google Fonts.

**Publiceren:** zet `index.html` op een statische host (bijvoorbeeld een apart Vercel-project met deze map als Root Directory).

**Aanmeldlijst koppelen:** zoek in `index.html` naar `WAITLIST_ENDPOINT` en vul het adres in van je formulierdienst of API. Het formulier stuurt `{email, tester, score}` als JSON. Zolang het leeg is, toont de pagina na het aanmelden dat het adres niet is verstuurd.

**Nog doen vóór livegang:** een privacyverklaring voor de aanmeldlijst (je verwerkt e-mailadressen) en een link daarnaar onder het formulier.

**Store-badges:** de badges zijn nagebouwd met de Apple- en Google Play-logo's en de tekst "Binnenkort". Vervang ze bij de lancering door de officiële badges (Apple: tools.applemarketingtools.com, Google: play.google.com/intl/nl/badges) en laat ze naar de echte store-pagina linken. Beide bedrijven staan hun badge alleen toe in de officiële vorm en met een link naar de app.
