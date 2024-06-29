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
            <img class="book-image" src="img/${books[i].image}" alt="">
            <div class="card-maininfo">
                <div class="info-details">
                    <h2 class="book-title">${books[i].name}</h2>
                    <span class="book-autor">${books[i].author}</span>
                    <span class="book-genre">Genre: ${books[i].genre}</span>
                    <span class="book-publishedYear">${books[i].publishedYear}</span>
                    <span class="book-price">${books[i].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                    ${genreateLikeHTML(i)}
                </div>
                <div id="book-comments-${i}" class="book-comments">
                </div>
                ${genreateTabsHTML(i)}
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
}

function generateLikeIcon(i) {
    let likeIcon;
    if (books[i].liked) {
        likeIcon = 'liked.png'
    } else {
        likeIcon = 'unliked.png'
    }
    document.getElementById(`likeicon-${i}`).src = `img/${likeIcon}`
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
    }
    genreateComments(i);
}

function setup() {
    renderBooks();
}
window.addEventListener('load', setup);

// TODOS:

// Dann muss es einen Tabs Container geben, in den entweder die Beschreibung oder die Comment-Section gerendert wird