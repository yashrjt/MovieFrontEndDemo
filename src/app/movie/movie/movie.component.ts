import { Component, OnInit } from '@angular/core';
import { AddmovieService } from '../services/addmovie.service';
import {ListmovieService}  from '../services/listmovie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private addMovie:AddmovieService,private list:ListmovieService,private router:Router) { }
  movieDetail:Movie;
  ngOnInit() {
  }

  formData($event){
  console.log("MovieComponent -> formData -> $event", )
   this.addMovie.createMovies($event).subscribe(res=>{
      console.log("AddMovieComponent -> addMovieFormSubmit -> res", res)
      },
      (err)=>{
      console.log("AddMovieComponent -> addMovieFormSubmit -> err", err)
      });
  }

  updateFormData(movie){
    console.log("MovieComponent -> updateFormData -> movie", movie,movie.movieid)
    this.addMovie.updateMovie(movie,movie.movieid).subscribe(res=>{
      console.log("AddMovieComponent -> addMovieFormSubmit -> res", res)
      this.router.navigate(['/movies/viewall']);
      },
      (err)=>{
      console.log("AddMovieComponent -> addMovieFormSubmit -> err", err)
      });
  }
  getMovieDetail($event){
    this.list.getMovieDetail($event).subscribe(res=>{
      this.movieDetail=res['data'];
     
      },
      (err)=>{
      console.log("AddMovieComponent -> addMovieFormSubmit -> err", err)
      });
  }
}
