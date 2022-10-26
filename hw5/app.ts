const getBeers = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers`);
    const json: [Beer] = await response.json();
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

interface Beer {
    id:                number;
    name:              string;
    tagline:           string;
    first_brewed:      string;
    description:       string;
    image_url:         string;
    abv:               number;
    ibu:               number | null;
    target_fg:         number;
    target_og:         number;
    ebc:               number | null;
    srm:               number | null;
    ph:                number | null;
    attenuation_level: number;
    volume:            BoilVolume;
    boil_volume:       BoilVolume;
    method:            Method;
    ingredients:       Ingredients;
    food_pairing:      string[];
    brewers_tips:      string;
    contributed_by:    ContributedBy;
}

interface BoilVolume {
    value: number;
    unit:  Unit;
}

enum Unit {
    Celsius = "celsius",
    Grams = "grams",
    Kilograms = "kilograms",
    Litres = "litres",
}

enum ContributedBy {
    AliSkinnerAliSkinner = "Ali Skinner <AliSkinner>",
    SamMasonSamjbmason = "Sam Mason <samjbmason>",
}

interface Ingredients {
    malt:  Malt[];
    hops:  Hop[];
    yeast: string;
}

interface Hop {
    name:      string;
    amount:    BoilVolume;
    add:       Add;
    attribute: Attribute;
}

enum Add {
    DryHop = "dry hop",
    End = "end",
    Middle = "middle",
    Start = "start",
}

enum Attribute {
    Aroma = "aroma",
    AttributeFlavour = "Flavour",
    Bitter = "bitter",
    Flavour = "flavour",
}

interface Malt {
    name:   string;
    amount: BoilVolume;
}

interface Method {
    mash_temp:    MashTemp[];
    fermentation: Fermentation;
    twist:        null | string;
}

interface Fermentation {
    temp: BoilVolume;
}

interface MashTemp {
    temp:     BoilVolume;
    duration: number | null;
}