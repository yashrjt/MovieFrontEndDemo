import { Component, OnInit } from '@angular/core';
import {AuthService}  from './auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private auth:AuthService,private router:Router){}

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.loggedIn();
     }
     
     if(document.cookie.indexOf('moviejwt')!==-1)
      { 
        this.loggedIn();
      }

    this.checkStorage();  
    this.checkCookie();
  }

  loggedIn(){
    this.auth.isLoggedInSubject.next(true);
  }

  loggedOut(){ 
    this.auth.isLoggedInSubject.next(false);
  }

  //logic to login,logout on multiple tabs with cookies
  checkCookie(){
   
    window.setInterval(()=>{
      if(document.cookie.indexOf('moviejwt')===-1)
      { 
        this.loggedOut();
      }
    },300000);  
    
  }


  // logic to login,logout on multiple tabs with localstorage changes
  checkStorage(){

    window.addEventListener('storage', (event) => {  
        if(event.newValue===null ) { 
         this.loggedOut();
        }
        else{   
       this.loggedIn();
        }
    }, false);    
    }
}
