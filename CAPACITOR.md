# Native build met Capacitor

De PWA en de native app delen dezelfde build uit `dist/`. Installeer eerst de afhankelijkheden:

```bash
npm install
```

De iOS- en Android-projecten staan al in deze repository. Voor een nieuwe clone is de eenmalige generatie:

```bash
npm run native:add:ios
npm run native:add:android
```

Het bronicoon staat in `resources/icon.png`; de huidige native iconen en splashscreens zijn daaruit afgeleid. Vervang dat bronbestand en genereer alle platformformaten opnieuw voordat je het icoon wijzigt.

Bij iedere release:

```bash
npm run native:sync
npm run native:open:ios
npm run native:open:android
```

Voor native wachtwoordherstel moet de redirect-URL van de Supabase Auth-configuratie ook de Capacitor origins toestaan. Controleer voor een echte device-test `capacitor://localhost` voor iOS en `https://localhost` voor Android. Gebruik daarna de store-builds voor de laatste privacy-, accountverwijder- en offline-tests.

Dezelfde redirect origins zijn nodig voor Google- en Apple-aanmelden. De web- en PWA-flow gebruikt `signInWithOAuth`; de complete dashboardconfiguratie staat in `SUPABASE_SOCIAL_LOGIN_SETUP.md`. Voor een uiteindelijke native iOS-release is Apple's eigen native aanmeldcapability de beste vervolgstap; de PWA en webversie kunnen de huidige OAuth-flow al gebruiken.

## Lokale buildvoorwaarden

- iOS: volledige Xcode-installatie met een iOS Simulator. Alleen Xcode Command Line Tools zijn niet genoeg voor een simulatorbuild.
- Android: Android Studio plus een ingestelde `ANDROID_HOME` of `ANDROID_SDK_ROOT`.
- Voor beide: `npm run native:sync` uitvoeren vlak voor het openen of bouwen van het platformproject.
