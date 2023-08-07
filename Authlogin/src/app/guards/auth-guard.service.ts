import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../authservices/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  
    if (this.authService.isLoggedIn()) {

      return true;
    }

   // window.location.href = environment.identityLoginUrl;
    return false;
  }
}
