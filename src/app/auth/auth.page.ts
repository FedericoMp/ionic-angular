import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authSvc: AuthService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  public onLogin() {
    this.authSvc.login();
    this.loadingCtrl.create({
      duration: 1500,
      message: 'Please wait...',
      spinner: "bubbles"
    })
    .then( loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.navCtrl.navigateForward('/places/tabs/discover');
      }, 2000);
    });
  }

}
