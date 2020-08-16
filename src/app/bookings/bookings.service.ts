import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
    providedIn: 'root'
})
export class BookingsService {

    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p2',
            userId: 'abc',
            placeTitle: 'Manhattan Mansion',
            guestNumber: 2,
        }
    ];

    public get bookings(): Booking[] {
        return [...this._bookings];
    }
}