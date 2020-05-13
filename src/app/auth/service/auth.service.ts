import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import {environment}  from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers=new HttpHeaders({'Content-Type':'application/json'});
  public apiUrl=environment.API_URL;
  private tokenTimer:any;

  constructor(private http:HttpClient,private router:Router) { }
  //observable---stream of data
  //subject---both observable and observer  
  isLoggedIn:boolean=false;
  isLoggedInSubject:BehaviorSubject<boolean>=new BehaviorSubject(this.isLoggedIn);
  isLoggedInObservable=this.isLoggedInSubject.asObservable();

  login(loginData){
    return this.http.post(`${this.apiUrl}/api/login`,loginData,{headers:this.headers}).pipe(
      map((response)=>{
        localStorage.setItem('token',response['token']);
        this.isLoggedInSubject.next(true);  

        //logout of app after token expires logic
        if(response['expiresIn']){
          const expiresInDuration=response['expiresIn'];
          this.tokenTimer=setTimeout(()=>{
              this.logout();
              alert('Your session expired');
          },expiresInDuration*1000)
        }
          return response;
      }),
      catchError((err)=>{
        throw (err);
      })
    );
  }


  logout(){
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    clearTimeout(this.tokenTimer);
    this.router.navigate(['/login']);
    //clear cookie in browser after logout
    document.cookie = "moviejwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    //Makes logout call to server to clear cookies
    return  this.http.get(`${this.apiUrl}/api/logout`).pipe(
      map((res)=>{  
          return res;    
      }),
      catchError((err)=>{
        throw (err);
      })
    );
  }

  register(registerData){
    return this.http.post(`${this.apiUrl}/api/register`,registerData,{headers:this.headers}).pipe(
      map((response)=>{ 
          return response;
      }),
      catchError((err)=>{
        throw (err);
      })
    );
  }

  googleAuth(){
   return  this.http.get(`${this.apiUrl}/api/googleAuth`).pipe(
      map((res)=>{
      console.log("AuthService -> googleAuth -> res", res)
          return res;
      }),
      catchError((err)=>{
        throw (err);
      })
    );
  }

}
