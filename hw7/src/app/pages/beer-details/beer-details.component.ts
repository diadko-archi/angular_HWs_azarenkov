import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent {

  id!: string;
  details: any;

  constructor(
    private router: ActivatedRoute,
    private beerService: BeerService
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.beerService.getBeerById(this.id).subscribe(details => this.details = details[0]);
  }

}
