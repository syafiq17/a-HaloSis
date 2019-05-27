import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IAuth } from './auth';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  // private isLogin = JSON.parse(localStorage.getItem("loginIs") || 'false');
  private isLogin = false;

  constructor (private router: Router){};

  getLogin(){
    // return JSON.parse(localStorage.getItem("loginIs") || 'false') ||this.isLogin.toString();
    return this.isLogin;
  }

  setLogin(log){
      this.isLogin  =log;
      localStorage.setItem('loginIs','true');
  }

canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLogin){
      return  true
    }else {
      this.router.navigate(['/login']);
      return  false
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }

}
