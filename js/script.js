let books = [];

function renderBooks() {
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let bookCard = genreateCardHTML(i, book);

        document.getElementById('cards-container').innerHTML += bookCard;
        generateLikeIcon(i);
        generateLikeCounter(i);
        genreateComments(i);
        loadTabsContent(i, 'description')
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
                <div class="info-details">
                    <h2 class="book-title">${books[i].name}</h2>
                    <span class="book-autor">${books[i].author}</span>
                    <span class="book-genre">Genre: ${books[i].genre}</span>
                    <span class="book-publishedYear">Erscheinungsjahr: ${books[i].publishedYear}</span>
                    <span class="book-price">${books[i].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                ${genreateTabsHTML(i)}
                 </div>
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

function genreateTabsHTML(i) {
    return `
        <div class="tabs-section">
            <div class="tabs">
                <a class="tab-link" onclick="loadTabsContent(${i}, 'description')">Beschreibung</a>
                <a class="tab-link" onclick="loadTabsContent(${i}, 'comments')">Kommentare</a>
            </div>
            <div class="tabs-container" id="tabs-container-${i}">
            </div>
        </div>
    `;
}

function loadTabsContent(i, key){
    let tabContainer = document.getElementById(`tabs-container-${i}`);
    if(key == 'description'){
        tabContainer.innerHTML = books[i].description;
    }
    if(key == 'comments'){
        tabContainer.innerHTML = genreateComments(i);
    }
}

function genreateComments(i) {
    let comments = books[i].comments;
    let commentsHTML = '';
    if (comments.length > 0) {
        console.log("komments vorhanden");
        for (let i = 0; i < comments.length; i++) {
            commentsHTML += genreateCommentsHTML(comments[i])
        };
    } else {
        commentsHTML = 'Sei der erste, der einen Kommentar verfasst'
    };
    commentsHTML += generateCommentformHTML(i)
    return commentsHTML;
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
        <input type="text" id="input-comment-autor-${i}" placeholder="Dein Name">
        <textarea id="input-comment-text-${i}" placeholder="Dein Kommentar"></textarea>
        <button onclick="sendComment(${i})">Absenden</button>
        `;
}

function sendComment(i) {
    let author = document.getElementById(`input-comment-autor-${i}`).value;
    let text = document.getElementById(`input-comment-text-${i}`).value;

    if (author != "" && text != "") {
        books[i].comments.push({
            "name": author,
            "comment": text
        });
    } else {
        alert("leer!");
    }

    loadTabsContent(i, 'comments');
    saveToLocalStorage('books', books);
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

// TO DO: Formularvalidierung, 
//wenn man auf Kommentare clickt sollen nicht die HTML Inhalte neu gerendert werden sondern nur die bereits im Background gerenderten Inhalte in die Box  geladen werden
// stylen der Karten mit Tabs 