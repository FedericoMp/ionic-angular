import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

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
    private alertCrl: AlertController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      (p.has('placeId'))
        ? this.loadOffer = this.placesSvc.offerById(p.get('placeId'))
        : this.navCtrl.navigateBack('/places/tabs/offers');
    });
  }

  public async cancelEdit() {
    const alert = await this.alertCrl.create({
      header: 'Confirm',
      message: 'Do you want to go out without save cahnges?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            this.navCtrl.navigateBack(`/places/tabs/offers/${this.loadOffer.id}`);
          }
        }
      ]
    });
    await alert.present();
  }
}
