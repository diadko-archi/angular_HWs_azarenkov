import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BeersCatalogComponent } from './pages/beers-catalog/beers-catalog.component';
import { BeerDetailsComponent } from './pages/beer-details/beer-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'catalog' },
  { path: 'catalog', component: BeersCatalogComponent },
  { path: 'catalog/:id', component: BeerDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BeersCatalogComponent,
    BeerDetailsComponent,
    NotFoundComponent,
    HeaderComponent,
    BeerCardComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
