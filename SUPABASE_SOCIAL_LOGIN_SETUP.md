# Google en Apple aanmelden

De SnelLees-login bevat al knoppen voor Google en Apple. De daadwerkelijke providers moeten eenmalig in het Supabase-dashboard worden ingesteld. Geheimen horen alleen daar thuis, nooit in deze repository of in de browser.

## 1. Redirect URLs in Supabase

Ga naar `Authentication` > `URL Configuration` in het SnelLees Supabase-project en voeg toe:

- De definitieve web-URL met `/**`, bijvoorbeeld `https://app.jouwdomein.nl/**`.
- Tijdelijk voor lokale test: `http://127.0.0.1:4173/**`.
- Voor de Capacitor-shell: `capacitor://localhost/**` en `https://localhost/**`.

Zet de productie-web-URL ook als `Site URL` zodra die bekend is. De app stuurt na OAuth terug naar `/index.html` op dezelfde origin.

## 2. Google

1. Maak in Google Cloud een OAuth-client van het type `Web application`.
2. Voeg de web-URL en tijdens ontwikkeling `http://127.0.0.1:4173` toe als toegestane JavaScript origins.
3. Voeg als redirect URI precies toe: `https://hmxrwvxfmhsfgfubcpwb.supabase.co/auth/v1/callback`.
4. Vul de Client ID en Client Secret in bij `Authentication` > `Providers` > `Google` in Supabase en schakel de provider in.
5. Controleer in Google de consent screen, branding en de scopes `openid`, e-mail en profiel.

## 3. Apple

1. Maak in Apple Developer een App ID voor `nl.snellees.trainer` en activeer `Sign in with Apple`.
2. Maak een gekoppelde Services ID voor de web-OAuth-flow.
3. Koppel die Services ID aan het Supabase-domein en gebruik als return URL: `https://hmxrwvxfmhsfgfubcpwb.supabase.co/auth/v1/callback`.
4. Maak een Sign in with Apple key, genereer de Apple client secret en vul Team ID, Services ID en secret in bij `Authentication` > `Providers` > `Apple` in Supabase.
5. Plan halfjaarlijks rotatie van de Apple signing secret voor de web-OAuth-flow.

Apple kan een privaat relay-adres geven en levert bij web-OAuth geen betrouwbare naam. SnelLees vraagt daarom in onboarding opnieuw naar de naam.

## 4. Verificatie

1. Open `login.html` op de productie-URL.
2. Test Google en Apple met twee afzonderlijke testaccounts.
3. Controleer na elke redirect dat de gebruiker in SnelLees blijft ingelogd en dat voortgang met dezelfde `user_data.id` synchroniseert.
4. Test uitloggen, opnieuw inloggen en accountverwijdering voor beide providers.
