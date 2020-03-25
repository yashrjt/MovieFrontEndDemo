import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddmovieService } from '../services/addmovie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  addMovieForm:FormGroup;

  constructor(private fb:FormBuilder,private addMovie:AddmovieService) { }

  ngOnInit() {

    this.addMovieForm=this.fb.group({
      director:[''],
      movieId:[''],
      description:[''],
      mpaa:[''],
      relaseDate:[''],
      title:[''],
      price:[''],
      starRating:[''],
      approvalRating:[''],
      category:['']
    })
  }

  addMovieFormSubmit(){
    console.log(this.addMovieForm.value);
    this.addMovie.createMovies(this.addMovieForm.value).subscribe(res=>{
    console.log("AddMovieComponent -> addMovieFormSubmit -> res", res)
    },
    (err)=>{
    console.log("AddMovieComponent -> addMovieFormSubmit -> err", err)
    });
   this.addMovieForm.reset();
  }
}
