import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'SFO - City & Pier',
      'In the center of San Francisco',
      'https://www.viajarsanfrancisco.com/img/que-visitar-en-san-francisco.jpg',
      249.99
    ),
    new Place(
      'p2',
      'Manhattan Mansion',
      'In the heart of New York city',
      'https://www.viajesgram.com/uploads/70efdf2ec9b086079795c442636b55fb/images/CURSOS%20DE%20IDIOMAS/tour_img-1931272-146.jpg',
      185.29
    ),
    new Place(
      'p3',
      'Yosemite Camp',
      'Adventure in the nature',
      'https://www.visittheusa.cl/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2016-10/Yosemite_CROPPED_Web72DPI.jpg?itok=sk3LZtxL',
      49.99
    )
  ];

  public get places(): Place[] {
    return [...this._places];
  }

  constructor() { }

  public placeById(placeId: string): Place {
    return [...this._places].filter((p: Place) => p.id === placeId)[0];
  }
}
