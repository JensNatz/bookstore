function renderBooks(){
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let bookCard = genreateCardHTML(book);
        
        document.getElementById('cards-container').innerHTML += bookCard;
    }
}

function genreateCardHTML(book){
    let commentsSectionHTML = genreateCommentsHTML(book.comments);
    let likeSectionHTML = genreateLikeHTML(book.likes, book.liked);
    return `
        <div class="book-card">
        <div class="card-maininfo">
            <img class="book-image" src="img/book.webp" alt="">
            <div class="info-details">
                <h2 class="book-title">${book.name}</h2>
                <span class="book-autor">${book.author}</span>
                <span class="book-genre">Genre: ${book.genre}</span>
                <span class="book-publishedYear">${book.publishedYear}</span>
                <span class="book-price">${book.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
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

function genreateLikeHTML(likes, likeStatus){
    let likeIcon;
    if(likeStatus){
       likeIcon = 'liked.png'
    } else {
        likeIcon = 'unliked.png'
    }
    
    return `
        <div class="book-likes">
            <span class="likes">${likes}</span>
            <img class="like-icon" src="img/${likeIcon}" alt="">
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

function setup(){
    renderBooks();
}
window.addEventListener('load', setup);