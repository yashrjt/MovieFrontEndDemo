import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpInterceptor,  HttpResponse ,HttpRequest,HttpHandler, HttpEvent} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class JWTInterceptor implements HttpInterceptor{

    constructor(private auth:AuthService){}

    intercept(req:HttpRequest<any>,next:HttpHandler){
    //required to push cookies to server when making requests
    req=req.clone({
        withCredentials: true
    })

    //Logic to append token to requests if token is stored in web storage
    const token=localStorage.getItem('token');
    if(token){
        const clonedReq=req.clone({
            headers:req.headers.set('x-access-token',token),
        })
        return next.handle(clonedReq);
    }
    else{
        return next.handle(req);
    }
    
        
    }
}