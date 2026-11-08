create or replace function public.notify_change() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  r jsonb := to_jsonb(case when tg_op = 'DELETE' then old else new end);
  payload jsonb;
  v_world text;
begin
  if tg_table_name = 'worlds' then
    v_world := r ->> 'id';
  elsif tg_table_name = 'profiles' then
    select world_id::text into v_world
      from public.world_members
     where user_id = (r ->> 'id')::uuid
     limit 1;
  else
    v_world := r ->> 'world_id';
  end if;

  payload := jsonb_build_object(
    'table', tg_table_name,
    'op', tg_op,
    'world', v_world,
    'row', r);
  if octet_length(payload::text) > 7500 then
    payload := payload - 'row' || jsonb_build_object('id', r ->> 'id');
  end if;
  perform pg_notify('justus_changes', payload::text);
  return null;
end $$;
revoke execute on function public.notify_change() from public, authenticated;

drop trigger if exists profiles_notify on public.profiles;
create trigger profiles_notify after insert or update or delete on public.profiles
  for each row execute function public.notify_change();

drop trigger if exists sleep_sessions_notify on public.sleep_sessions;
create trigger sleep_sessions_notify after insert or update or delete on public.sleep_sessions
  for each row execute function public.notify_change();
