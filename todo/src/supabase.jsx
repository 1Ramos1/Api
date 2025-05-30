// src/supabase.jsx
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://yvfvhraqlxjushwshvnx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2ZnZocmFxbHhqdXNod3Nodm54Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzQxODgxMiwiZXhwIjoyMDYyOTk0ODEyfQ.C2VuLvnwMvLa8f5lMXovA8EFwjZZvACcxYoxvd8ljZg';
export const supabase = createClient(supabaseUrl, supabaseKey);