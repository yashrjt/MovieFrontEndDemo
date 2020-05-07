import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  token=localStorage.getItem('token');
  cookie=document.cookie.indexOf('moviejwt');

  constructor(private router:Router){

  }

  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     
      return this.isUserLoggedIn();
  }

  isUserLoggedIn(){
    if((this.token!==undefined) || (this.cookie!==-1)){
        return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
