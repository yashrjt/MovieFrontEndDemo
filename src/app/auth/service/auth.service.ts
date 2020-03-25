import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers=new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }
  //observable---stream of data
  //subject---both observable and observer  
  isLoggedIn:boolean;
  isLoggedInSubject:BehaviorSubject<boolean>=new BehaviorSubject(this.isLoggedIn);
  isLoggedInObservable=this.isLoggedInSubject.asObservable();

  //observer--yash tweeting
  //observables--anh,ellis,rayan are obervables
 //by default observables are lazy..
  login(loginData){
    return this.http.post('http://localhost:80/api/login',loginData,{headers:this.headers}).pipe(
      map((response)=>{
        localStorage.setItem('token',response['token']);
        this.isLoggedInSubject.next(true);
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }


  logout(){
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }
}
