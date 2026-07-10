import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const antwoord = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });

Deno.serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return antwoord({ error: 'Methode niet toegestaan' }, 405);

  const url = Deno.env.get('SUPABASE_URL');
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const authorization = req.headers.get('Authorization');
  if (!url || !anonKey || !serviceRoleKey || !authorization) return antwoord({ error: 'Niet geautoriseerd' }, 401);

  // Verifieer de JWT met de gewone anon-client. De service role wordt pas
  // daarna gebruikt voor precies de gebruiker die in dit token zit.
  const gebruikerClient = createClient(url, anonKey, { global: { headers: { Authorization: authorization } } });
  const { data: { user }, error: userError } = await gebruikerClient.auth.getUser();
  if (userError || !user) return antwoord({ error: 'Niet geautoriseerd' }, 401);

  const admin = createClient(url, serviceRoleKey);
  const { error: dataError } = await admin.from('user_data').delete().eq('id', user.id);
  if (dataError) return antwoord({ error: 'Opslag kon niet worden verwijderd' }, 500);

  const { error: authError } = await admin.auth.admin.deleteUser(user.id);
  if (authError) return antwoord({ error: 'Account kon niet worden verwijderd' }, 500);

  return antwoord({ deleted: true });
});
