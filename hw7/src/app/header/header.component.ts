import { Component, Input, Output } from '@angular/core';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  basketCount: number = this.beerService.getBasketCount();
  beers: any[] = [];

  constructor(
    private beerService: BeerService
  ) {}

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }


}

