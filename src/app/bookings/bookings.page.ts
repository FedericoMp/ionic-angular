import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  public loadedBookings: Booking[];

  constructor(
    private bookingsSvc: BookingsService
  ) { }

  ngOnInit() {
    this.loadedBookings = this.bookingsSvc.bookings;
  }

  public onCancelBooking(bookingId: string, ionItemBooking: IonItemSliding) {
    ionItemBooking.close();
    // Delete booking item by [bookingId]
  }
}
