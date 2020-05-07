import { Injectable } from '@angular/core';
import { HttpInterceptor,  HttpErrorResponse,HttpResponse ,HttpRequest,HttpHandler, HttpEvent} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import {throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';



@Injectable({
  providedIn: 'root'
})

export class JWTInterceptor implements HttpInterceptor{

    constructor(private auth:AuthService){}

    
    intercept(req:HttpRequest<any>,next:HttpHandler){
    const token=localStorage.getItem('token');
    
    //required to push cookies to server when making requests from clientside
    req=req.clone({
        withCredentials: true
    })
    
    //Logic to append token to requests if token is stored in web storage

        // if(token){
        //         req=req.clone({
        //         headers:req.headers.set('x-access-token',token),
        //     })
        // }
       
       
     return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
               //logic to work with rsponses globally
            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            if(error['status']===403 || error['status']===401){
               this.auth.logout();
            }
            return throwError(error);
        }));
        
    }
}