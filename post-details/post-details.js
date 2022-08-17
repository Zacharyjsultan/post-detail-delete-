
import { getPost, checkAuth, deletePost } from '../fetch-utils.js';


const postDetailContainer = document.querySelector('.post-detail-container');



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

    const user = checkAuth();
    
    // if add delete function

    if (user.id === post.user_id) {
        const
    }
     const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', async () => {
        await deletePost(post.id);
    });
    location.replace(`../create-post.js`);

   // need to add deletePost
    postDetailContainer.append(postTitle, postCategory, postDescription, postContact);
    
}
// render and append this post's details to the container
loadData();


  