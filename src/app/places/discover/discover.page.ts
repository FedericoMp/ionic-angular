import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  public loadedPlaces: Place[];
  public toogleSegment: boolean = true;

  constructor(
    private placesSvc: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesSvc.places;
  }

  public segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    this.toogleSegment = (event.detail.value === 'all') ? true : false;
  }

}
