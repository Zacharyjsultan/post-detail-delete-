
import { getPost } from '../fetch-utils.js';
import { renderPosts } from '../render-utils.js';

const postDetailContainer = document.querySelector('.post-detail-container');

console.log('hello WORLD', postDetailContainer);

// on load // get the id from URL
const params = new URLSearchParams(window.location.search);


// use the id to fetch the posts
async function loadData(){
    const data = await getPost(params.get('id'));
    
    const postTitle = document.createElement('p');
    postTitle.textContent = data.title;

    const postCategory = document.createElement('span');
    postCategory.title = data.category.name;
    postCategory.textContent = data.category.emoji;

    const postDescription = document.createElement('p');
    postDescription.textContent = data.description;
    
    const postContact = document.createElement ('p');
    postContact.textContent = data.contact;
   
    
    postDetailContainer.append(postTitle, postCategory);
    
}
// render and append this post's details to the container
loadData();