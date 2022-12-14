const SUPABASE_URL = 'https://wbfdejgtonniibmfbxcg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZmRlamd0b25uaWlibWZieGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MDcwODEsImV4cCI6MTk3NjE4MzA4MX0.UnZCnCZBXYt3CBL_gukzUv0-o9ic4KWiXX5bEU41m8s';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Helper for logging errors */

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

/* Categories */

export async function getCategories() {
    const response = await client.from('categories').select('*');
    return checkError(response);
}

/* Posts */

export async function getPosts() {
    const response = await client.from('posts').select(`
        *,
        category:categories(*)
    `);
    return checkError(response);
}

export async function createPost(post) {
    return await client.from('posts').insert(post);
}

// DATA 
export async function getPost(id) {
    // from the posts table, select a single post who has the matching id
    const response = await client.from('posts').select('*, category:categories(*)').match({ id }).single();
    
    
    // and return the response
    return response.data;
}

export async function deletePost(id) {
    return await client.from('posts').delete().match({ id });
}

// export profile saves
// retrieving profiles and by id
export async function getProfiles() {
    const response = await client.from('profiles').select('*');
    return checkError(response);
}

export async function getProfile(id) {
    const responseProfile = await client.from('profiles').select('*').match({ id }).single();

    return responseProfile;
}
// 
// updating profiles UPSERRRT 
export async function saveProfile(profile) {
    return await client.from('profiles').upsert(profile).single();
}

