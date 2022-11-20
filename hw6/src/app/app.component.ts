import { Component } from '@angular/core';

const getBeers = async () => {
  const response = await fetch(`https://api.punkapi.com/v2/beers`);
  const json = await response.json();
  return json;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  beers = getBeers().then(beers => {
    return [...beers];
  })

}



