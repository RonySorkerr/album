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
    data.forEach(cards => {
        // getting the cards container
        const cardsContianer = document.getElementById('cardsContainer');
        cardsContianer.classList = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5`
        cardsContianer.innerHTML = `
        <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      </div>
        `
    });
}

loadData()