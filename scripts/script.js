const loadData = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json()
    loadCards(data);
    // data.forEach(item => {
    //     // item.slice(0, 20);
    //     console.log(item)
    // });
}

const loadCards = (data) => {
    data.forEach(card => {
        // getting the cards container
        const cardsContianer = document.getElementById('cardsContainer');
        
        const cards = document.createElement('div')
        cards.classList = ``
        cards.innerHTML = `
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title"></h2>
                  <p>${card.title}</p>
                </div>
                <figure><img src="${card.thumbnailUrl}" alt="Shoes" /></figure>
              </div>
        `;
        cardsContianer.appendChild(cards)


    });
}

loadData()