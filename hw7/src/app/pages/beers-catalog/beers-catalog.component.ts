import { Component, ViewChild } from '@angular/core';
import { BeerService } from 'app/services/beer.service';


@Component({
  selector: 'app-beers-catalog',
  templateUrl: './beers-catalog.component.html',
  styleUrls: ['./beers-catalog.component.scss']
})
export class BeersCatalogComponent {

  @ViewChild("test-image") placeImage!: HTMLElement;

  constructor(
    private beerService: BeerService
  ) {}

  beers: any[] = [];

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }

  ngAfterViewInit() {
    console.log(this.placeImage)

    this.placeImage.onclick = () => {
      console.log(this.placeImage)
    };
}

}
