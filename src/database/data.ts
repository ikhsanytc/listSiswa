import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://umsvknhmsbgbnlrmmzkc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtc3Zrbmhtc2JnYm5scm1temtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NDkyMTksImV4cCI6MjAzMDEyNTIxOX0.9tSJbPzEtdupfjvgigvD8FwYkE0I1ylCOMF41Dc1GbE"
);

export default supabase;
