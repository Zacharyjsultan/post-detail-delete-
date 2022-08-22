import { checkAuth } from '../fetch-utils';

const user = checkAuth();
const formEl = document.getElementById('prof-form');



formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

});