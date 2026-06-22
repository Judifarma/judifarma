
-- Fix: SECURITY DEFINER functions executable by anon/authenticated

-- 1) has_role: switch to SECURITY INVOKER.
-- Safe because user_roles RLS allows users to read their own roles, and
-- has_role is always invoked with auth.uid() (self-check), so the invoker
-- has SELECT access to the row being checked.
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 2) bootstrap_first_admin: only invoked by trigger on auth.users.
-- Keep SECURITY DEFINER (needs to insert into public.user_roles) but
-- revoke EXECUTE from API roles so it cannot be called directly.
REVOKE EXECUTE ON FUNCTION public.bootstrap_first_admin() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.bootstrap_first_admin() FROM anon;
REVOKE EXECUTE ON FUNCTION public.bootstrap_first_admin() FROM authenticated;
