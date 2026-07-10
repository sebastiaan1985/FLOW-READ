# delete-account

Deze Edge Function verwijdert uitsluitend het account dat bij de aangeleverde Supabase JWT hoort. Hij verwijdert eerst de rij uit `user_data` en daarna de gebruiker uit Supabase Auth.

Pas eerst de migraties toe en deploy daarna vanuit de repository nadat de Supabase CLI aan dit project is gekoppeld:

```bash
supabase db push
supabase functions deploy delete-account
```

Test vervolgens ingelogd in de app via de accountknop in de header. Publiceer geen store-build voordat deze functie is gedeployed en een echt privacycontact is ingevuld.
