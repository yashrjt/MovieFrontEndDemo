import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';

import {environment}  from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DeletemovieService {

  headers=new HttpHeaders({'Content-Type':'application/json'});
  public apiUrl=environment.API_URL;
  constructor(private http:HttpClient) { }


  deleteMovie(id){
    return this.http.delete(`${this.apiUrl}/api/movies/deleteMovie/${id}`,{headers:this.headers}).pipe(
      map((response)=>{
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }
}
