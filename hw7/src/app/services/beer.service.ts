import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  readonly rootUrl = 'https://api.punkapi.com/v2/';
  // cartAmount$ = new BehaviorSubject<number>(0);
  cartBeers$ = new BehaviorSubject<string[]>([]);

  constructor(
    private http: HttpClient
  ) {
  }

  getBeers(): Observable<any[]> {
    return this.http.get<any[]>(this.rootUrl + 'beers');
  }

  getBeerById(id: string) {
    return this.http.get<any>(this.rootUrl + 'beers/' + id)
  }

  addToCart(beerName: string) {
    // const currentAmount = this.cartAmount$.value;
    // this.cartAmount$.next(currentAmount + 1);
    this.cartBeers$.value.push(beerName);
  }

  getCartBeers(){
    return this.cartBeers$;
  }

  removeFromCart(beer: string) {
    this.cartBeers$.value.splice(this.cartBeers$.value.indexOf(beer), 1);
  }


}
