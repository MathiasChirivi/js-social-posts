console.log("Benvenuto user");

//Array di oggetti di //posts
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//ID container
let container = document.getElementById('container');

for (let i = 0; i < posts.length; i++) {
    const currentPost = posts[i];
    container = renderPost(currentPost)
}


// funzione che restituisce HTML dei vari post
function renderPost(post) {

    const { author, created, content, media, likes, id } = post;

    container.innerHTML += 
    `<div class="post">
        <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                ${ PicImage(author)}
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">"${author.name}"</div>
                <div class="post-meta__time">${created}</div>
            </div> 
        </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
                <img src="${media}" alt="">
        </div>
        <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div> 
        `
        return container;
}


//Creo l'Array like per i post
let likePost = [];

//buttone
const buttons = document.getElementsByClassName("like-button");

for (let i = 0; i < buttons.length; i++) {
    const currentButton = buttons[i];

    //creo la funzione del button click
    currentButton.addEventListener('click', function(e){
        e.preventDefault();
        const clickedClass = "like-button--liked";
        const contatori = document.getElementsByClassName("js-likes-counter");

        //se la classe clicked non è presente
        if (!currentButton.classList.contains(clickedClass)) {
            currentButton.classList.contains(clickedClass);
            currentButton.classList.add(clickedClass);

            let likes = parseInt(contatori[i].innerText);
            likes++;

            contatori[i].innerText = likes;
            likePost.push(i)
            console.log(likePost)
        } else {
            currentButton.classList.remove(clickedClass);
            let likes = parseInt(contatori[i].innerText);

            likes--;
            contatori[i].innerText = likes;
        }

    })
    
}

//se non è presente l'immagine del profilo
function PicImage(author) {
    let container = '';

    if (author.image != null) {
        container = `<img class="profile-pic" src= "${author.image}" alt= "${author.name}">`
    } else {
        container = `<div class="profile-pic-default"><span>${ getIniziali(author.name) }</span></div>`;
    }

    return container;
}

//funzioni per le iniziali
function getIniziali(autore) {
    return autore[0] + autore.split(" ")[1][0];
}