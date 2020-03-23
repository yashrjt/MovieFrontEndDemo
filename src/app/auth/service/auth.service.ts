import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers=new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

 //by default observables are lazy..
  login(loginData){
    return this.http.post('http://localhost:80/api/login',loginData,{headers:this.headers}).pipe(
      map((response)=>{
        localStorage.setItem('token',response['token']);
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }
}
