import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

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

  public onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/offers');
  }

}
