-- SnelLees beta-metrics
-- Voer dit alleen uit in de Supabase SQL Editor als projecteigenaar.
-- De query telt uitsluitend eventnamen en anonieme account-ID's; vrije teksten,
-- e-mailadressen en andere profielvelden worden niet geselecteerd.

with events as (
  select
    user_data.id as account_id,
    event.value ->> 'naam' as event_naam,
    nullif(event.value ->> 'ts', '')::bigint as event_ts
  from public.user_data
  cross join lateral jsonb_array_elements(
    coalesce(user_data.extra -> 'snellees_events', '[]'::jsonb)
  ) as event(value)
),
funnel as (
  select
    count(distinct account_id) filter (where event_naam = 'onboarding_voltooid') as onboarding,
    count(distinct account_id) filter (where event_naam = 'begintest_voltooid') as begintest,
    count(distinct account_id) filter (where event_naam = 'eerste_missie_voltooid') as eerste_missie,
    count(distinct account_id) filter (where event_naam = 'startweek_voltooid') as startweek,
    count(distinct account_id) filter (where event_naam = 'hermeting_voltooid') as hermeting
  from events
)
select
  onboarding,
  begintest,
  eerste_missie,
  startweek,
  hermeting,
  case when onboarding > 0 then round(100.0 * begintest / onboarding, 1) end as onboarding_naar_begintest_pct,
  case when begintest > 0 then round(100.0 * eerste_missie / begintest, 1) end as begintest_naar_eerste_missie_pct,
  case when eerste_missie > 0 then round(100.0 * startweek / eerste_missie, 1) end as missie_naar_startweek_pct
from funnel;

-- Eventoverzicht voor een wekelijkse betabespreking.
with events as (
  select
    user_data.id as account_id,
    event.value ->> 'naam' as event_naam,
    nullif(event.value ->> 'ts', '')::bigint as event_ts
  from public.user_data
  cross join lateral jsonb_array_elements(
    coalesce(user_data.extra -> 'snellees_events', '[]'::jsonb)
  ) as event(value)
)
select
  event_naam,
  count(*) as gebeurtenissen,
  count(distinct account_id) as unieke_accounts,
  to_timestamp(max(event_ts) / 1000.0) as laatst_gemeten
from events
group by event_naam
order by unieke_accounts desc, gebeurtenissen desc;
