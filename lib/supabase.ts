import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bpleaoukxfeujwjhczac.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwbGVhb3VreGZldWp3amhjemFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MjcxMDEsImV4cCI6MjA1NjMwMzEwMX0.LF_dg3F8X2XoIJ5S3ctzriUz8ObYGFAmgx6-CoPHt3s';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
