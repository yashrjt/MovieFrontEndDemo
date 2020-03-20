import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router:Router){

  }
  loggedIn:boolean=true;
  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     
      return this.isUserLoggedIn();
  }

  isUserLoggedIn(){
    if(this.loggedIn){
        return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
