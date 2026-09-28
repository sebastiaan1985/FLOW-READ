# Inloggen met Apple en Google

Het inlogscherm (`src/screens/SignInScreen.tsx`) verschijnt één keer bij de eerste start. Inloggen is optioneel:
"Doorgaan zonder account" werkt altijd. Het account (ID, voornaam, e-mail) blijft alleen op het apparaat;
er is geen server. Uitloggen en opnieuw inloggen kan bij **Jouw leesplek**.

## Apple (iPhone en iPad)

Staat aan via `ios.usesAppleSignIn` en de plugin `expo-apple-authentication` in `app.json`.

1. Zet in het Apple Developer-portaal bij de App ID `nl.slimwerken.snellezer` de capability **Sign in with Apple** aan.
   EAS doet dit meestal automatisch bij `eas build`.
2. Werkt in een development build of TestFlight. In Expo Go werkt het ook, maar dan onder de bundle-ID van Expo Go.
3. Apple geeft naam en e-mail alleen de **eerste** keer dat iemand inlogt.

Op Android en web tonen we de Apple-knop niet.

## Google

Maak in [Google Cloud Console](https://console.cloud.google.com/apis/credentials) OAuth-client-ID's aan
(eerst het OAuth-toestemmingsscherm invullen):

| Platform | Type client | Nodig |
| --- | --- | --- |
| iOS | iOS, bundle-ID `nl.slimwerken.snellezer` | `EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID` |
| Android | Android, package `nl.slimwerken.snellezer` + SHA-1 van je signing key (`eas credentials`) | `EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID` |
| Web | Webapplicatie, met je domein als *authorized JavaScript origin* en *redirect URI* | `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` |

Zet ze in een `.env`-bestand in `snellezer/` (lokaal) en als EAS-omgevingsvariabelen (voor builds):

```
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=....apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID=....apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=....apps.googleusercontent.com
```

Zonder client-ID voor het platform blijft de Google-knop zichtbaar, maar zegt hij dat inloggen met Google nog
niet is ingesteld. Google-inloggen werkt **niet in Expo Go**; gebruik een development build (`eas build --profile development`)
of TestFlight.

## Regels van de stores

- Apple eist Sign in with Apple zodra je Google-inloggen aanbiedt op iOS. Dat zit erin.
- Omdat er geen serveraccount is, is er geen verwijderverzoek nodig; Uitloggen wist het account van het apparaat.
