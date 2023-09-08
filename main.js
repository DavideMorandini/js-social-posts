let posts = [
    {
        "id": 1,
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum fugit unde sed natus quia, pariatur dicta similique voluptatem repellendus quo optio accusantium exercitationem corrupti, nam quas deleniti cupiditate eaque.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Pippo",
            "image": "https://picsum.photos/id/237/200/300"
        },
        "likes": 30,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum fugit unde sed natus quia, pariatur dicta similique voluptatem repellendus quo optio accusantium exercitationem corrupti, nam quas deleniti cupiditate eaque.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Pluto",
            "image": "https://picsum.photos/id/237/200/300"
        },
        "likes": 20,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum fugit unde sed natus quia, pariatur dicta similique voluptatem repellendus quo optio accusantium exercitationem corrupti, nam quas deleniti cupiditate eaque.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Paperino",
            "image": "https://picsum.photos/id/237/200/300"
        },
        "likes": 200,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum fugit unde sed natus quia, pariatur dicta similique voluptatem repellendus quo optio accusantium exercitationem corrupti, nam quas deleniti cupiditate eaque.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Minnie",
            "image": "https://picsum.photos/id/237/200/300"
        },
        "likes": 80,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum fugit unde sed natus quia, pariatur dicta similique voluptatem repellendus quo optio accusantium exercitationem corrupti, nam quas deleniti cupiditate eaque.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Paperone",
            "image": "https://picsum.photos/id/237/200/300"
        },
        "likes": 110,
        "created": "2021-03-05"
    }
];

// Creo/dichiaro una variabile e aggancio il container della pagina
let container = document.getElementById("container");

// Array di like
let userLiked = [];

// // Data di oggi
// let data = new Date();
// let gg, mm, aaaa;
// gg = data.getDate() + "/";
// mm = data.getMonth() + 1 + "/";
// aaaa = data.getFullYear();

for (let value of posts) {
    let currentTime = new Date();
    let created = new Date(value.created);

    let time = currentTime.getMonth() - created.getMonth();

    // Prendi la prima lettera del nome e del cognome
    let firstLetters = value.author.name.split("").map(word => word[0]).join("");

    let iconProfile = (value.author.image == null) ? `<div class='profile-pic-default'><span>${firstLetters}</span></div>` : `<img class="profile-pic" src="${value.author.image}" alt="${value.author.name}"> `;

    // DOM Manipulation
    let post = document.createElement("div");
    post.className = "post";
    container.appendChild(post);

    let postHead = document.createElement("div");
    postHead.className = "post__header";
    post.appendChild(postHead);

    let postMet = document.createElement("div");
    postMet.className = "post-meta";
    postHead.appendChild(postMet);

    let postIcon = document.createElement("div");
    postIcon.className = "post-meta__icon";
    postMet.appendChild(postIcon);
    postIcon.innerHTML = `${iconProfile}`;

    let postMetaDat = document.createElement("div");
    postMetaDat.className = "post-meta_data";
    postMet.appendChild(postMetaDat);

    let postMetaAuth = document.createElement("div");
    postMetaAuth.className = "post-meta_author";
    postMetaDat.appendChild(postMetaAuth);
    postMetaAuth.innerHTML = `${value.author.name}`;

    let postTime = document.createElement("div");
    postTime.className = "post-meta_time";
    postMetaDat.appendChild(postTime);
    postTime.innerHTML = `${time} mese/i fa`;

    let postText = document.createElement("div");
    postText.className = "post_text";
    post.appendChild(postText);
    postText.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum fugit unde sed natus quia, pariatur dicta similique voluptatem repellendus quo optio accusantium exercitationem corrupti, nam quas deleniti cupiditate eaque.";

    let postImage = document.createElement("div");
    postImage.className = "post__image";
    post.appendChild(postImage);
    postImage.innerHTML = `<img src="${value.media}" alt="${value.id}">`;

    let postFooter = document.createElement("div");
    postFooter.className = "post_footer";
    post.appendChild(postFooter);

    let jsLike = document.createElement("div");
    jsLike.className = "likes js-likes";
    postFooter.appendChild(jsLike);

    let likeCta = document.createElement("div");
    likeCta.className = "likes_cta";
    jsLike.appendChild(likeCta);
    likeCta.innerHTML = `
    <a class="like-button js-like-button" href="#" data-postid="${value.id}">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>`;

    let likesCounter = document.createElement("div");
    likesCounter.className = "likes__counter";
    jsLike.appendChild(likesCounter);
    likesCounter.innerHTML = `Piace a <b id="like-counter-${value.id}" class="js-likes-counter">${value.likes}</b> persone`;  
};

// aggancio/seleziono il tasto LIKE
let btnLike = document.querySelectorAll('a.like-button');

for (let button of btnLike) {
    button.addEventListener('click', clickLike);
}

// In base al click il colore muta
function clickLike(e) {
    let numbLikes = document.querySelector(`#like-counter-${this.dataset.postid}`);
  
    if (!this.classList.contains('like-button--liked')) {
        this.classList.add('like-button--liked');
        let numb = parseInt(numbLikes.textContent);
        numb++;
        numbLikes.textContent = numb;
        userLiked.push(numbLikes);
        
    } else {
        this.classList.remove('like-button--liked');
        let numb = parseInt(numbLikes.textContent);
        numb--;
        numbLikes.textContent = numb;
        userLiked.splice(numbLikes, 1);
    }

    e.preventDefault();
};