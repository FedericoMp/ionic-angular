import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Painted Ladys Hotel',
      'In the bay of San Francisco, near the pier',
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

  private _offers: Place[] = [
    new Place(
      'p4',
      'Stockholm City',
      'In the heart of Sweden',
      'https://www.telegraph.co.uk/content/dam/Travel/2019/January/Old-Town-Stockholm-iStock-497344880.jpg',
      200.99
    ),
    new Place(
      'p5',
      'Queensland Apart',
      'Nears the beach of New Zeland',
      'https://assets.eharmony.com/files/marketing/images/landing/queensland-1024x683.jpg',
      105.79
    ),
    new Place(
      'p6',
      'Mendoza',
      'Adventure in the nature',
      'https://www.mdzol.com/u/fotografias/m/2020/7/8/f608x342-60380_90103_0.jpg',
      78.92
    )
  ];

  public get places(): Place[] {
    return [...this._places];
  }

  public get offers(): Place[] {
    return [...this._offers];
  }

  constructor() { }

  public placeById(placeId: string): Place {
    return [...this._places].filter((p: Place) => p.id === placeId)[0];
  }

  public offerById(placeId: string): Place {
    return [...this._offers].filter((p: Place) => p.id === placeId)[0];
  }
}
