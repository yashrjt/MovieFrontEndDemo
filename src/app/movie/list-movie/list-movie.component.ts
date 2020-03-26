import { Component, OnInit } from '@angular/core';
import {ListmovieService}  from '../services/listmovie.service';
import {Movie}  from '../movie';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  constructor(private list:ListmovieService) { }
  moviesList:Movie[]=[];
  ngOnInit() {
    this.list.getAllMovies().subscribe((res)=>{
      this.moviesList=res;
    },
    (err)=>{
    console.log("ListMovieComponent -> ngOnInit -> err", err)
      
    })
  }

}
