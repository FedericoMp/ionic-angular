import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  public loadedOffers: Place[];

  constructor(
    private placesSvc: PlacesService) { }

  ngOnInit() {
    this.loadedOffers = this.placesSvc.offers;
  }

}
