import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from './service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  token=localStorage.getItem('token');
  cookie=document.cookie.indexOf('moviejwt');

  constructor(private router:Router,private auth:AuthService){
      this.auth.isLoggedInObservable.subscribe((loggedIn)=>
      {
              if(!loggedIn){
                return false;
              }
      })
  }

  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     
      return this.isUserLoggedIn();
  }

  isUserLoggedIn(){
    
    let loggedIn:boolean;
    this.auth.isLoggedInObservable.subscribe((res)=>
    {
          loggedIn=res;  
    })
    if(!loggedIn){
      return false;
    }
    else{
      return true;
    }
  }
}
