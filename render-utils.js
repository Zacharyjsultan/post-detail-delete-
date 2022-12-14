

export function renderCategoryOptions(categories) {
    // document fragment is a "bag" for elements
    const fragment = document.createDocumentFragment();

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.emoji} ${category.name}`;
        fragment.append(option);
    }

    return fragment;
}

export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    for (const post of posts) {
        const li = document.createElement('li');
        li.classList.add('post-it');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const categoryEl = document.createElement('span');
        categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;


        const a = document.createElement('a');

        a.href = `./post-details/?id=${post.id}`;

        a.append(titleEl, categoryEl, descriptionEl, contactEl);

        li.append(a);

        fragment.append(li);
    }

    return fragment;
}

/// will need to create a function to render users to profile
export function renderUsers(profile) {
    const div = document.createElement('div');
    div.classList.add('profile');

    const bioEl = document.createElement('p');
    bioEl.textContent = `${profile.bio}`;
    bioEl.classList.add('bio');

    const nameEl = document.createElement('h3');
    nameEl.textContent = `${profile.name}`;
    nameEl.classList.add('name');

    div.append(bioEl, nameEl);
    return div;
}