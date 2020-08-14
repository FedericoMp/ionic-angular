import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  public loadPlace: Place;

  constructor(
    private placesSvc: PlacesService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      (p.has('placeId'))
        ? this.loadPlace = this.placesSvc.placeById(p.get('placeId'))
        : this.navCtrl.navigateBack('/places/tabs/discover');
    })
  }

  public onBookPlace() {
    this.modalCtrl.create({
      component: CreateBookingComponent,
      id: 'placeToBook',
      componentProps: {
        selectedPlace: this.loadPlace
      }
    })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onWillDismiss();
      })
      .then(r => {
        if (r.role === 'confirm') {
          console.log(r.data);
        }
      });
  }

}
