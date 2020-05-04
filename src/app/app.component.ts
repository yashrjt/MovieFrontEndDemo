import { Component, OnInit } from '@angular/core';
import {AuthService}  from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieFrontEndDemo';

  constructor(private auth:AuthService){}
  ngOnInit(){
    if(document.cookie.indexOf('moviejwt')===-1)
        {
          this.auth.isLoggedInSubject.next(true);
        }
  }
}
