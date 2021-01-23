import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorizationService} from '../services/authorization.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthorized()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
