import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn:boolean;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  
    this.auth.isLoggedInObservable.subscribe(value=>{
      this.isUserLoggedIn=value;
        })
     this.checkLocalStorage();  
  }

    checkLocalStorage(){
      //logic to login,logout on multiple tabs
      window.addEventListener('storage', (event) => {
        if (event.storageArea == localStorage) {
          let token = localStorage.getItem('token');
          if(token == undefined) { 
            // you can update this as per your key
              // DO LOGOUT FROM THIS TAB AS WELL
              this.router.navigate(['/login']); // If you are using router
              this.isUserLoggedIn=false;
              
          }
          else{
            this.isUserLoggedIn=true;
            this.router.navigate(['/']);
          }
        }
      }, false);
    }

  logout(){
  this.router.navigate(['/login']);
  this.auth.logout().subscribe((res)=>{
  console.log("HeaderComponent -> logout -> res", res)
  },
  (err)=>{
  console.log("HeaderComponent -> logout -> err", err)
  });
  }

}
