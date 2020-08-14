import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { NavController } from '@ionic/angular';

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
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      (p.has('placeId'))
        ? this.loadPlace = this.placesSvc.placeById(p.get('placeId'))
        : this.navCtrl.navigateBack('/places/tabs/discover');
    })
  }

  public onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
