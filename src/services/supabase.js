import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iatapcoyymczfidcimrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhdGFwY295eW1jemZpZGNpbXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5Mzg0NDYsImV4cCI6MjAzODUxNDQ0Nn0.DvQK3ucSmW5f4nbW3V0aZ74dOVP7Y8hSFu77XSg6Xuc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
