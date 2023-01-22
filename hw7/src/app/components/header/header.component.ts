import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BeerService } from '../../services/beer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cartBeers$ = this.beerService.cartBeers$;
  beers: any[] = [];

  constructor(
    private beerService: BeerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }

  goToCart = () => {
    this.router.navigateByUrl('/cart');
};

}

