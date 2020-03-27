import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import {environment}  from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddmovieService {

  headers=new HttpHeaders({'Content-Type':'application/json'});
  public apiUrl=environment.API_URL;
  constructor(private http:HttpClient) { }


  createMovies(movie){
    return this.http.post(`${this.apiUrl}/api/movies/createMovie`,movie,{headers:this.headers}).pipe(
      map((response)=>{
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }
}
