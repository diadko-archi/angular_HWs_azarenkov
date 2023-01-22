import { Component } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(
    private beerService: BeerService
  ) {
    console.log(this.cartBeers$.value?.length)
  }

  cartBeers$ = this.beerService.getCartBeers();

  removeFromCart(beer: string) {
    this.beerService.removeFromCart(beer);
  }

}
