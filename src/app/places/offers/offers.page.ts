import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonItemSliding, NavController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  public loadedOffers: Place[];

  constructor(
    private placesSvc: PlacesService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.loadedOffers = this.placesSvc.offers;
  }

  public goToEdit(placeId: string, elRef: IonItemSliding) {
    elRef.close();
    this.navCtrl.navigateForward(`/places/tabs/offers/edit/${placeId}`);
  }

}
