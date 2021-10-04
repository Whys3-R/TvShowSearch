const form = document.querySelector('#searchForm');
const list = document.querySelector('#columnSect');

const displayTitle = (shows) => {
    for (let index of shows){
        if(index.show.image) {
            genCard(index, list);
        }
    }
}

const genCard = (index, list) => {
    const col = document.createElement('div');
    col.className = 'column is-3 ';
    list.appendChild(col);

    const card = document.createElement('div');
    card.className = 'card';
    col.appendChild(card);

    const cardImg = document.createElement('div');
    cardImg.className = 'card-image';
    card.appendChild(cardImg);

    const fig = document.createElement('figure');
    fig.className = 'image is-4by5';
    cardImg.appendChild(fig);

    const img = document.createElement('img');
    img.src = index.show.image.medium;
    fig.appendChild(img);

    const head = document.createElement('header');
    head.className = 'class-header';
    card.appendChild(head);

    const title = document.createElement('p');
    title.className = 'title is-4 has-text-centered'
    title.textContent = index.show.name;
    head.appendChild(title);
}



form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params : {q : searchTerm}}
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    displayTitle(res.data);
    query.value = '';
});