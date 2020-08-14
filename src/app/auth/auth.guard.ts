import { Injectable } from '@angular/core';
import { Route, Router, CanLoad, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private authSvc: AuthService,
    private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authSvc.userState) {
      this.router.navigateByUrl('/auth');
    }
    return this.authSvc.userState
  }

}
