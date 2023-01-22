import { Component } from '@angular/core';
import { BeerService } from 'app/services/beer.service';


@Component({
  selector: 'app-beers-catalog',
  templateUrl: './beers-catalog.component.html',
  styleUrls: ['./beers-catalog.component.scss']
})
export class BeersCatalogComponent {

  constructor(
    private beerService: BeerService
  ) {}

  beers: any[] = [];

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }

}
