function renderBooks(){
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let bookCard = genreateCardHTML(i, book);
        
        document.getElementById('cards-container').innerHTML += bookCard;
        generateLikeIcon(i);
        generateLikeCounter(i);
    }
}

function genreateCardHTML(i){
    let commentsSectionHTML = genreateCommentsHTML(books[i].comments);
    let likeSectionHTML = genreateLikeHTML(i);
    return `
        <div class="book-card">
        <div class="card-maininfo">
            <img class="book-image" src="img/book.webp" alt="">
            <div class="info-details">
                <h2 class="book-title">${books[i].name}</h2>
                <span class="book-autor">${books[i].author}</span>
                <span class="book-genre">Genre: ${books[i].genre}</span>
                <span class="book-publishedYear">${books[i].publishedYear}</span>
                <span class="book-price">${books[i].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
            </div>
        </div>
        ${likeSectionHTML}
        <div class="book-comments">
            <h3>Kommentare</h3>
            ${commentsSectionHTML}
        </div>
    </div>
    `;
}

function genreateLikeHTML(i){
    let likeIcon;
    if(books[i].liked){
       likeIcon = 'liked.png'
    } else {
        likeIcon = 'unliked.png'
    }

    return `
        <div class="book-likes">
            <span id="likecounter-${i}" class="likes"></span>
            <img id="likeicon-${i}" class="like-icon" onclick="toggleLike('${i}')">
        </div>
    `;
}

function genreateCommentsHTML(comments){
    let commentsHTML = '';
    for (let i = 0; i < comments.length; i++) {
        commentsHTML += `
             <div class="book-comment">
                <h4 class="comment-autor">
                    ${comments[i].name}
                </h4>
                <p class="comment-text">
                    ${comments[i].comment}
                </p>
            </div>
        `
    };
    return commentsHTML;
}

function toggleLike(i){
    if(books[i].liked){
        books[i].likes--;
     } else {
        books[i].likes++;
     }

     books[i].liked = !books[i].liked;

     generateLikeIcon(i);
     generateLikeCounter(i);
}

function generateLikeIcon(i){
    let likeIcon;
    if(books[i].liked){
        likeIcon = 'liked.png'
     } else {
         likeIcon = 'unliked.png'
     }
     document.getElementById(`likeicon-${i}`).src = `img/${likeIcon}`
}

function generateLikeCounter(i){
    document.getElementById(`likecounter-${i}`).innerHTML = books[i].likes;
}


function setup(){
    renderBooks();
}
window.addEventListener('load', setup);