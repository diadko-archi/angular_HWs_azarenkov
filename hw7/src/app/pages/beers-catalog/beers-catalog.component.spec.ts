import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersCatalogComponent } from './beers-catalog.component';

describe('BeersCatalogComponent', () => {
  let component: BeersCatalogComponent;
  let fixture: ComponentFixture<BeersCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeersCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
