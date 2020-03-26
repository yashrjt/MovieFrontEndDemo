import { Component, OnInit } from '@angular/core';
import { AddmovieService } from '../services/addmovie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private addMovie:AddmovieService) { }

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

}
