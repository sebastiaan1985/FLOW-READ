-- Snellezer: voer de afgesproken bewaartermijn voor inactieve accounts uit.
-- De laatste activiteit is de meest recente login of cloudsynchronisatie.

create extension if not exists pg_cron with schema pg_catalog;

select cron.schedule(
  'snellezer-delete-inactive-accounts',
  '23 3 * * *',
  $retention$
    delete from auth.users as gebruiker
    where greatest(
      coalesce(gebruiker.last_sign_in_at, gebruiker.created_at),
      coalesce(
        (select gegevens.updated_at
         from public.user_data as gegevens
         where gegevens.id = gebruiker.id),
        gebruiker.created_at
      )
    ) < now() - interval '24 months';
  $retention$
);
