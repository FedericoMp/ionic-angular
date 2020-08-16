import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuth: boolean = true;
  public get userState(): boolean {
    return this._userIsAuth;
  }

  constructor() { }

  public login() {
    this._userIsAuth = true;
  }

  public logout() {
    this._userIsAuth = false;
  }
}
