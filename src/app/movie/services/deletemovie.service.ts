import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeletemovieService {

  headers=new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }


  deleteMovie(id){
    return this.http.delete(`http://localhost:80/api/movies/deleteMovie/${id}`,{headers:this.headers}).pipe(
      map((response)=>{
          return response;
      }),
      catchError((err)=>{
        return err;
      })
    );
  }
}
