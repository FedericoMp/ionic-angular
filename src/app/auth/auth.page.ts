import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NavController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public isLogin: boolean = true;

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

  public onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  public onSubmit(form: NgForm) {
    if (!form.valid) { return; }
    
    const {email, password} = form.value;
    console.log({email, password});
    if (this.isLogin) {
      // send request to login server
      this.onLogin();
    } else {
      // send request to signup server
    }
  }
}
