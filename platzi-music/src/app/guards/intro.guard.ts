import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/Storage';
import { Router } from '@angular/Router';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor (private storage: Storage, private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise <boolean> {
      const isIntroShowed = await this.storage.get('isIntroShowed');
      if (isIntroShowed){
        return true;
      } else {
        this.router.navigateByUrl('/intro');
      }
      
  }
  
}
