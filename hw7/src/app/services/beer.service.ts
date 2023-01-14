import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  readonly rootUrl = 'https://api.punkapi.com/v2/'

  constructor(
    private http: HttpClient
  ) { }

  getBeers(): Observable<any[]> {
    return this.http.get<any[]>(this.rootUrl + 'beers');
  }

  getBeerById(id: string) {
    return this.http.get<any>(this.rootUrl + 'beers/' + id)
  }

}
