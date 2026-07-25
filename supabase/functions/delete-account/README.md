# delete-account

Deze Edge Function verwijdert uitsluitend het account dat bij de aangeleverde Supabase JWT hoort. Hij verwijdert eerst de rij uit `user_data` en daarna de gebruiker uit Supabase Auth.

Pas eerst de migraties toe en deploy daarna vanuit de repository nadat de Supabase CLI aan dit project is gekoppeld:

```bash
supabase db push
supabase secrets set DELETE_ACCOUNT_ALLOWED_ORIGINS="https://snel-lees-app.vercel.app,capacitor://localhost,https://localhost"
supabase functions deploy delete-account
```

Voeg andere echte productiedomeinen expliciet aan deze kommagescheiden lijst toe. Gebruik geen `*`: het accounttoken mag alleen vanuit bekende app-herkomsten worden aangeboden.

Test vervolgens ingelogd in de app via de accountknop in de header en voer `npm run release:check:live` uit. Publiceer geen store-build voordat de live controle slaagt en een echt privacycontact is ingevuld.
