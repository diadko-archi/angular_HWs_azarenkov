import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.getBeers2().then(beers => {
      for (let beer of [...beers]) {
          document.body.innerHTML += `
          <div class="beer-card">
              <h1 class="name">${beer.name}</h1>
              <h3 class="tagline">${beer.tagline}</h3>
              <img class="image" src="${beer.image_url}" alt="${beer.name} image">
              <div class="description">${beer.description}</div>
              <div class="volume"><i>Volume: ${beer.volume.value} ${beer.volume.unit}</i></div>
              <div class="first_brewed"><i>First brewed: ${beer.first_brewed}</i></div>
              <div class="food_pairing"><i>Food pairing: ${beer.food_pairing}</i></div>
          </div>
          `
      }
    })
  }
  getBeers2 = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers`);
    const json = await response.json();
    return json;
  }


}



