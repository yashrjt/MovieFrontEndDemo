import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddmovieService {

  headers=new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }


  createMovies(movie){
    return this.http.post('http://localhost:80/api/movies/createMovie',movie,{headers:this.headers}).pipe(
      map((response)=>{
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }
}
