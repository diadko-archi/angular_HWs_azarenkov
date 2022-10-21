const getBeers = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers`);
    const json = await response.json();
    return json;
}

getBeers().then(beers => {
    for (let beer of [...beers]) {
        document.body.innerHTML += `
        <div class="beer-card">
            <h1 class="name">${beer.name}</h1>
            <h3 class="tagline">${beer.tagline}</h3>
            <img class="image" src="${beer.image_url}" alt="${beer.name} image">
            <div class="description">${beer.description}</div>
            <div class="first_brewed">First brewed: ${beer.first_brewed}</div>
        </div>
        `
    }
})


