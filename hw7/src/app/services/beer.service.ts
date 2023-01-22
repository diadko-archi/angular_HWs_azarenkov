import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// import { BehaviorSubject } from 'rxjs';
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  readonly rootUrl = 'https://api.punkapi.com/v2/';
  // cartAmount$ = new BehaviorSubject<number>(0);
  cartBeers$ = new ObservableArray<string>();

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
    this.cartBeers$.push(beerName);
  }

  getCartBeers(){
    return this.cartBeers$;
  }

  removeFromCart(beer: string) {
    this.cartBeers$.splice(this.cartBeers$.indexOf(beer), 1);
  }


}
