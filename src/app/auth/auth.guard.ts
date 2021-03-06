import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AppSettings } from '../utils/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.isLogged()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return true;
  }

  getLoginToken(): string {
    return localStorage.getItem(AppSettings.loginTokenKey);
  }

  setLoginToken(token: string) {
    localStorage.setItem(AppSettings.isLoggedKey, 'true');
    localStorage.setItem(AppSettings.loginTokenKey, token);
  }

  logout() {
    localStorage.setItem(AppSettings.isLoggedKey, 'false');
    localStorage.removeItem(AppSettings.loginTokenKey);
  }

  private isLogged(): boolean {
    const logged = localStorage.getItem(AppSettings.isLoggedKey);
    return logged !== undefined && logged === 'true';
  }
}
