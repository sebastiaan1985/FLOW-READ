-- SnelLees: volledig sync-contract voor public.user_data.
-- Deze migratie is idempotent zodat bestaande testdata behouden blijft.

create table if not exists public.user_data (
  id uuid primary key references auth.users(id) on delete cascade,
  stats jsonb,
  bibliotheek jsonb,
  begintest_baseline jsonb,
  av_profielen jsonb,
  dyx_settings jsonb,
  kids_modus boolean default false,
  bt_laatste_passage integer,
  tekst_actief integer,
  av_actief integer,
  snellees_gebruiker jsonb,
  snellees_niveau jsonb,
  snellees_achievements jsonb,
  snellees_traindagen jsonb,
  daily_challenge jsonb,
  extra jsonb default '{}'::jsonb,
  updated_at timestamptz default now()
);

alter table public.user_data add column if not exists stats jsonb;
alter table public.user_data add column if not exists bibliotheek jsonb;
alter table public.user_data add column if not exists begintest_baseline jsonb;
alter table public.user_data add column if not exists av_profielen jsonb;
alter table public.user_data add column if not exists dyx_settings jsonb;
alter table public.user_data add column if not exists kids_modus boolean default false;
alter table public.user_data add column if not exists bt_laatste_passage integer;
alter table public.user_data add column if not exists tekst_actief integer;
alter table public.user_data add column if not exists av_actief integer;
alter table public.user_data add column if not exists snellees_gebruiker jsonb;
alter table public.user_data add column if not exists snellees_niveau jsonb;
alter table public.user_data add column if not exists snellees_achievements jsonb;
alter table public.user_data add column if not exists snellees_traindagen jsonb;
alter table public.user_data add column if not exists daily_challenge jsonb;
alter table public.user_data add column if not exists extra jsonb default '{}'::jsonb;
alter table public.user_data add column if not exists updated_at timestamptz default now();
alter table public.user_data alter column extra set default '{}'::jsonb;
alter table public.user_data alter column updated_at set default now();

alter table public.user_data enable row level security;

revoke all on table public.user_data from anon;
grant select, insert, update, delete on table public.user_data to authenticated;

drop policy if exists users_manage_own_data on public.user_data;
create policy users_manage_own_data on public.user_data
  for all
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);
