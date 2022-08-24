import { checkAuth, getProfile, saveProfile } from '../fetch-utils.js';
// check auth
const user = checkAuth();
// form info
const formEl = document.getElementById('prof-form');
const profNameEl = formEl.querySelector('[name=prof-name]');
const profBioEl = formEl.querySelector('[name=prof-bio]');

// to redirect and inform
const errorEl = formEl.querySelector('.errors');

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(formEl);
    const response = await saveProfile({
        name: data.get('prof-name'),
        bio: data.get('prof-bio'),

    });
    //redirect on error
    const error = response.error; 

    if (error) {
        errorEl.textContent = error.message;
    } else {
        location.assign('../');
    }


    formEl.reset();
});

async function displayProfile() {
    const response = await getProfile(user.id);
    const profile = response.data;
    console.log(profile);
    if (profile) {
        profNameEl.value = profile.name;
        profBioEl.value = profile.bio;
    }
}

displayProfile();