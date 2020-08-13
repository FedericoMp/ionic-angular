import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  public loadOffer: Place;

  constructor(
    private placesSvc: PlacesService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      (p.has('placeId'))
        ? this.loadOffer = this.placesSvc.offerById(p.get('placeId'))
        : this.navCtrl.navigateBack('/places/tabs/offers');
    });
  }

}
