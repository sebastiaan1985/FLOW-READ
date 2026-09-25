# Snellezer · binnenkort

Losse promotiepagina voor de app, los van de webapp in `snellezer/`. Eén bestand zonder build: afbeeldingen staan er als data-URI in, lettertypen komen van Google Fonts.

**Publiceren:** zet `index.html` op een statische host (bijvoorbeeld een apart Vercel-project met deze map als Root Directory).

**Aanmeldlijst koppelen:** zoek in `index.html` naar `WAITLIST_ENDPOINT` en vul het adres in van je formulierdienst of API. Het formulier stuurt `{email, tester, score}` als JSON. Zolang het leeg is, toont de pagina na het aanmelden dat het adres niet is verstuurd.

**Nog doen vóór livegang:** een privacyverklaring voor de aanmeldlijst (je verwerkt e-mailadressen) en een link daarnaar onder het formulier.
