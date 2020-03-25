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
    // console.log("JWTInterceptor -> intercept -> req", req);

    const token=localStorage.getItem('token');
    if(token){
        const clonedReq=req.clone({
            headers:req.headers.set('x-access-token',token)
        })
        return next.handle(clonedReq);
    }
    else{
        return next.handle(req);
    }
    
        
    }
}