let books = [];

function renderBooks() {
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let bookCard = genreateCardHTML(i, book);

        document.getElementById('cards-container').innerHTML += bookCard;
        generateLikeIcon(i);
        generateLikeCounter(i);
        genreateComments(i);
    }
}

function genreateCardHTML(i) {
    return `
        <div class="book-card">
            <div>
             <img class="book-image" src="img/${books[i].image}" alt="">
            ${genreateLikeHTML(i)}
            </div>
            <div class="card-maininfo">
                <h2 class="book-title">${books[i].name}</h2>
                <span class="book-autor">${books[i].author}</span>
                <span class="book-genre">Genre: ${books[i].genre}</span>
                <span class="book-publishedYear">Erscheinungsjahr: ${books[i].publishedYear}</span>
                <span class="book-price">${books[i].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                <div class="book-comments" id="book-comments-${i}"></div>
                ${generateCommentformHTML(i)}
            </div>
        </div>
    `;
}

function genreateLikeHTML(i) {
    return `
        <div class="book-likes">
            <img id="likeicon-${i}" class="like-icon" onclick="toggleLike('${i}')">
             <span id="likecounter-${i}" class="likes"></span>
        </div>
    `;
}

function genreateComments(i) {
    let comments = books[i].comments;
    let commentsHTML = '';
    if (comments.length > 0) {
        for (let i = 0; i < comments.length; i++) {
            commentsHTML += genreateCommentsHTML(comments[i])
        };
    } else {
        commentsHTML = 'Sei der erste, der eine Bewertung verfasst'
    };
    document.getElementById(`book-comments-${i}`).innerHTML =commentsHTML;
}

function genreateCommentsHTML(comment) {
    return `
            <div class="book-comment">
                <h4 class="comment-autor">
                    ${comment.name}
                </h4>
                <p class="comment-text">
                    ${comment.comment}
                </p>
            </div>
        `;
}

function toggleLike(i) {
    if (books[i].liked) {
        books[i].likes--;
    } else {
        books[i].likes++;
    }
    books[i].liked = !books[i].liked;
    generateLikeIcon(i);
    generateLikeCounter(i);
    saveToLocalStorage('books', books);
}

function generateLikeIcon(i) {
    let likeIcon;
    if (books[i].liked) {
        likeIcon = 'liked.png'
    } else {
        likeIcon = 'unliked.png'
    }
    document.getElementById(`likeicon-${i}`).src = `img/${likeIcon}`;
}

function generateLikeCounter(i) {
    document.getElementById(`likecounter-${i}`).innerHTML = books[i].likes;
}

function generateCommentformHTML(i) {
    return `
        <div class="comments-form">
            Deine Bewertung:
            <input type="text" id="input-comment-autor-${i}" placeholder="Dein Name">
            <textarea id="input-comment-text-${i}" placeholder="Dein Kommentar"></textarea>
            <button class="btn" onclick="sendComment(${i})">Absenden</button>
        <div>
        `;
}

function sendComment(i) {
    let inputAutor = document.getElementById(`input-comment-autor-${i}`);
    let author = inputAutor.value;
    let inputText = document.getElementById(`input-comment-text-${i}`);
    let text = inputText.value;
    removeFormError(inputAutor);
    removeFormError(inputText);
    if (author != "" && text != "") {
        books[i].comments.push({
            "name": author,
            "comment": text
        });
    } else {
        if(author == ""){showFormError(inputAutor);};
        if(text == ""){showFormError(inputText);};
    }
    genreateComments(i);
    saveToLocalStorage('books', books);
    clearInputfields(i);
}

function showFormError(element){
    element.classList.add('form-error');
}

function removeFormError(element){
    element.classList.remove('form-error');
}

function clearInputfields(i){
    document.getElementById(`input-comment-autor-${i}`).value = "";
    document.getElementById(`input-comment-text-${i}`).value = "";
}

function loadBooksFromLocalStorage(key){
    let booksFromStorage = getFromLocalStorage(key);
    if (booksFromStorage && booksFromStorage.length > 0) {
        books = booksFromStorage;
    } else {
        books = booksDB;
    }
}

function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setup() {
    loadBooksFromLocalStorage('books');
    renderBooks();
}
window.addEventListener('load', setup);
