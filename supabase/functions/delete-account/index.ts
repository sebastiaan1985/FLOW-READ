import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.111.0';

const standaardOrigins = [
  'https://snel-lees-app.vercel.app',
  'capacitor://localhost',
  'https://localhost',
  'http://localhost',
];
const toegestaneOrigins = new Set(
  (Deno.env.get('DELETE_ACCOUNT_ALLOWED_ORIGINS') || standaardOrigins.join(','))
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean),
);

const corsHeadersVoor = (req: Request) => {
  const origin = req.headers.get('Origin');
  return {
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
    ...(origin && toegestaneOrigins.has(origin)
      ? { 'Access-Control-Allow-Origin': origin, 'Vary': 'Origin' }
      : {}),
  };
};

const antwoord = (req: Request, body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeadersVoor(req),
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
    },
  });

Deno.serve(async req => {
  const origin = req.headers.get('Origin');
  if (req.method === 'OPTIONS') {
    if (!origin || !toegestaneOrigins.has(origin)) {
      return new Response('Herkomst niet toegestaan', { status: 403 });
    }
    return new Response('ok', {
      headers: {
        ...corsHeadersVoor(req),
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  }
  if (origin && !toegestaneOrigins.has(origin)) {
    return antwoord(req, { error: 'Herkomst niet toegestaan' }, 403);
  }
  if (req.method !== 'POST') return antwoord(req, { error: 'Methode niet toegestaan' }, 405);

  const url = Deno.env.get('SUPABASE_URL');
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const authorization = req.headers.get('Authorization');
  if (!url || !anonKey || !serviceRoleKey || !authorization?.startsWith('Bearer ')) {
    return antwoord(req, { error: 'Niet geautoriseerd' }, 401);
  }

  // Verifieer de JWT met de gewone anon-client. De service role wordt pas
  // daarna gebruikt voor precies de gebruiker die in dit token zit.
  const gebruikerClient = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: authorization } },
  });
  const { data: { user }, error: userError } = await gebruikerClient.auth.getUser();
  if (userError || !user) return antwoord(req, { error: 'Niet geautoriseerd' }, 401);

  const admin = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { error: dataError } = await admin.from('user_data').delete().eq('id', user.id);
  if (dataError) return antwoord(req, { error: 'Opslag kon niet worden verwijderd' }, 500);

  const { error: authError } = await admin.auth.admin.deleteUser(user.id);
  if (authError) return antwoord(req, { error: 'Account kon niet worden verwijderd' }, 500);

  return antwoord(req, { deleted: true });
});
