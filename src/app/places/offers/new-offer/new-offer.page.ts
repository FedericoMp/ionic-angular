import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  public newOfferForm: FormGroup;

  public get title(): any {
    return this.newOfferForm.get('title');
  }
  public descMaxLen: number = 180;
  public get description(): any {
    return this.newOfferForm.get('description');
  }
  public get price(): any {
    return this.newOfferForm.get('price');
  }
  public get dateFrom(): any {
    return this.newOfferForm.get('dateFrom');
  }
  public get dateTo(): any {
    return this.newOfferForm.get('dateTo');
  }

  constructor(
    private navCtrl: NavController) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.newOfferForm = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(this.descMaxLen)]
      }),
      price: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
    });
  }

  public onCreateOffer() {
    console.log(this.newOfferForm);
    this.navCtrl.navigateBack('/places/tabs/offers');
  }

}
