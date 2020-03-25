import { Component, OnInit } from '@angular/core';
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
  }

  logout(){
  this.router.navigate(['/login']);
  this.auth.logout();
  }

}
