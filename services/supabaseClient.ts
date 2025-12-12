import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// CONFIGURAÇÃO DO SUPABASE
// ------------------------------------------------------------------

const SUPABASE_URL = 'https://odknrpgdijcjdjfpgjls.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ka25ycGdkaWpjamRqZnBnamxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NDMzMDYsImV4cCI6MjA4MTExOTMwNn0.heqM0mxrPe-W44J5E9bAt4LW3fE2HVYxnt_LjcyrqcY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);