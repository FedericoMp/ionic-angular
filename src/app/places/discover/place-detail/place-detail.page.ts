import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
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
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      (p.has('placeId'))
        ? this.loadPlace = this.placesSvc.placeById(p.get('placeId'))
        : this.navCtrl.navigateBack('/places/tabs/discover');
    })
  }

  public onBookPlace() {
    this.actionSheetCtrl.create({
      header: 'Book this place',
      buttons: [{
        text: 'Selected Date',
        icon: 'disc-outline',
        handler: () => this.openBookModal('select')
      },{
        text: 'Random Date',
        icon: 'trail-sign-outline',
        handler: () => this.openBookModal('random')
      },{
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => console.log('cancel')
      }]
    })
    .then( actionSheetEl => {
      actionSheetEl.present();
    });
  }

  public openBookModal(mode: 'select' | 'random') {
    this.modalCtrl.create({
      component: CreateBookingComponent,
      id: 'placeToBook',
      componentProps: {
        selectedPlace: this.loadPlace,
        mode
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
