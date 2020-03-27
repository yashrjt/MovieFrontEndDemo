import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { BehaviorSubject ,Observable} from 'rxjs';
import {Movie}  from '../movie';
import {environment}  from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListmovieService {


  headers=new HttpHeaders({'Content-Type':'application/json'});
  public apiUrl=environment.API_URL;
  constructor(private http:HttpClient) { }


  getAllMovies():Observable<Movie[]>{
    return <Observable<Movie[]>>this.http.get(`${this.apiUrl}/api/movies/getAllMovies`,{headers:this.headers}).pipe(
      map((response)=>{
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }

  getMovieDetail(id){
    return <Observable<Movie[]>>this.http.get(`${this.apiUrl}/api/movies/getMovie/${id}`,{headers:this.headers}).pipe(
      map((response)=>{
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }
}
