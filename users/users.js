import { getProfiles } from '../fetch-utils.js';
import { renderUsers } from '../render-utils.js';

const userListEl = document.getElementById('users-list');

async function displayProfiles() {
    const users = await getProfiles();
    console.log(getProfiles);
    for (let user of users) {
        userListEl.append(renderUsers(user));
    }
}
displayProfiles();