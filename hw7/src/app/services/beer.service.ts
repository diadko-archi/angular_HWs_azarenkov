import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  readonly rootUrl = 'https://api.punkapi.com/v2/';
  basketCount!: number;

  constructor(
    private http: HttpClient
  ) {
    this.basketCount = 0;
  }

  getBeers(): Observable<any[]> {
    return this.http.get<any[]>(this.rootUrl + 'beers');
  }

  getBeerById(id: string) {
    return this.http.get<any>(this.rootUrl + 'beers/' + id)
  }

  addToBasket() {
    this.basketCount += 1;
  }

  getBasketCount() {
    return this.basketCount;
  }

}
