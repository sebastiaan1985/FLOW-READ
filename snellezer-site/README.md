# Snellezer · binnenkort

Losse promotiepagina voor de app, los van de webapp in `snellezer/`. Eén bestand zonder build: afbeeldingen staan er als data-URI in, lettertypen komen van Google Fonts.

**Publiceren:** zet `index.html` op een statische host (bijvoorbeeld een apart Vercel-project met deze map als Root Directory).

**Aanmeldlijst:** het formulier schrijft naar de tabel `public.waitlist` in Supabase (project `hmxrwvxfmhsfgfubcpwb`, EU). De publieke sleutel in `index.html` mag alleen rijen toevoegen (RLS + kolomrechten); lezen en exporteren doe je in het Supabase-dashboard (Table Editor → waitlist). Een adres dat er al op staat geeft 409 en telt voor de bezoeker als aangemeld.

**Privacy en AI:** `privacy.html` (bereikbaar op `/privacy`) beschrijft de aanmeldlijst, de bewaartermijn en het gebruik van AI. Pas de datum bovenaan aan bij elke wijziging, en vermeld daar de maildienst zodra je die kiest.

**Store-badges:** de badges zijn nagebouwd met de Apple- en Google Play-logo's en de tekst "Binnenkort". Vervang ze bij de lancering door de officiële badges (Apple: tools.applemarketingtools.com, Google: play.google.com/intl/nl/badges) en laat ze naar de echte store-pagina linken. Beide bedrijven staan hun badge alleen toe in de officiële vorm en met een link naar de app.
