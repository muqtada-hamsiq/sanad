-- Sanad: missing table GRANTs — applied 2026-11-24
-- Diagnosis (live, 2026-11-24): every PostgREST read/write on the student
-- tables failed with 42501 "permission denied for table" (HTTP 403) for role
-- authenticated, even though RLS policies exist and are enabled.
-- Root cause: RLS policies alone do NOT grant access. Without a GRANT the
-- request never reaches the policies. The student_system.sql / contact /
-- client_errors files created policies but no table GRANTs at all.
-- This file adds least-privilege GRANTs. RLS still restricts every row to
-- its owner (or to admins where the policy says so). Idempotent: safe to re-run.

-- Phase 2 student tables (authenticated = any logged-in user)
grant select, insert, update, delete on public.saved_books to authenticated;
grant select, insert, update, delete on public.completed_lessons to authenticated;
grant select, insert, update on public.exam_results to authenticated;
grant select, insert, update on public.student_progress to authenticated;
grant select, insert on public.achievements to authenticated;
grant select, insert on public.points_log to authenticated;
grant select, insert, update on public.student_schedules to authenticated;

-- profiles: own row only per RLS (insert is done by the SECURITY DEFINER trigger)
grant select, update on public.profiles to authenticated;

-- Phase 1: contact form + error logger (guests included for INSERT;
-- admin reads/updates are still restricted by RLS to is_admin())
grant insert on public.contact_messages to anon, authenticated;
grant select, update on public.contact_messages to authenticated;
grant insert on public.client_errors to anon, authenticated;
grant select on public.client_errors to authenticated;

-- display_name fix: signup.html sends the name under key 'name', but the
-- trigger only read 'display_name', so profiles.display_name was NULL.
-- Read both keys; keep the trigger idempotent on re-fire.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name, stage, grade, dob)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'stage',
    new.raw_user_meta_data->>'grade',
    nullif(new.raw_user_meta_data->>'dob', '')::date
  )
  on conflict (id) do update set
    display_name = coalesce(public.profiles.display_name, excluded.display_name),
    stage = coalesce(excluded.stage, public.profiles.stage),
    grade = coalesce(excluded.grade, public.profiles.grade),
    dob = coalesce(excluded.dob, public.profiles.dob);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
