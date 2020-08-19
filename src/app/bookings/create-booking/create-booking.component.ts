import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;
  @Input() mode: 'select' | 'random';

  public get chipLabel(): string {
    switch (this.mode) {
      case 'select':
        return 'selected-date';
      case 'random':
        return 'random-date';
    }
  }

  public get chipColor(): string {
    switch (this.mode) {
      case 'select':
        return 'success';
      case 'random':
        return 'warning';
    }
  }

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  public onCancel() {
    this.modalCtrl.dismiss(null, 'cancel', 'placeToBook');
  }

  public onBookPlace() {
    const msj: any = { msj: 'Data from modal component' };
    this.modalCtrl.dismiss(msj, 'confirm', 'placeToBook');
  }

}
