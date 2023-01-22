import { Component } from '@angular/core';
import { BeerService } from 'app/services/beer.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent {

  constructor(
    private beerService: BeerService
  ) {}

  beers: any[] = [];

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }
}
