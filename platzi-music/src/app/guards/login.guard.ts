import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/Storage';
import { Router } from '@angular/Router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor (private storage: Storage, private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
      if (isUserLoggedIn){
        return true;
      } else {
        this.router.navigateByUrl('/login');
      }
      
  }
  
}
