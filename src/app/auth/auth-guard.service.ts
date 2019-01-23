import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate() {
    return this.authService.getToken() != null;
  }
}