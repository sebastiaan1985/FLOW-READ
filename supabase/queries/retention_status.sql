-- Controle voor de maandelijkse release-/privacy-audit.
-- De cronjob verwijdert kandidaten dagelijks; deze query hoort dus 0 te geven.

select count(*) as accounts_ouder_dan_bewaartermijn
from auth.users as gebruiker
where greatest(
  coalesce(gebruiker.last_sign_in_at, gebruiker.created_at),
  coalesce(
    (select gegevens.updated_at
     from public.user_data as gegevens
     where gegevens.id = gebruiker.id),
    gebruiker.created_at
  )
) < now() - interval '24 months';

select jobname, schedule, active
from cron.job
where jobname = 'snellezer-delete-inactive-accounts';
