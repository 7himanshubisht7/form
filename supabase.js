const SUPABASE_URL = "https://wrfsdhsabtmaptomrdsz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_aJRlzXahr538eFdVLF46GA_nOlfm5oc";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
