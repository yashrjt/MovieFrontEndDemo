import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { BehaviorSubject ,Observable} from 'rxjs';
import {Movie}  from '../movie';

@Injectable({
  providedIn: 'root'
})
export class ListmovieService {


  headers=new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }


  getAllMovies():Observable<Movie[]>{
    return <Observable<Movie[]>>this.http.get('http://localhost:80/api/movies/getAllMovies',{headers:this.headers}).pipe(
      map((response)=>{
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }
}
