import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authSvc: AuthService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  onLogin() {
    this.authSvc.login();
    this.navCtrl.navigateForward('/places/tabs/discover')
  }

}
