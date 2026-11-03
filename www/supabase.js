
const SUPABASE_URL = "https://lnpydydsilutnvzhtlfm.supabase.co";

const SUPABASE_KEY = "sb_publishable_GPNjFrtmabCMU2Bem8vloA_tTlCZNj0";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function testSupabase() {
    const { error } = await supabaseClient
        .from("profiles")
        .select("id")
        .limit(1);

    if (error) {
        console.error("Erreur Supabase:", error.message);
    } else {
        console.log("Connexion Supabase réussie !");
    }
}

testSupabase();
