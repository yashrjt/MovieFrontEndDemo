import { Component, OnInit, Output ,EventEmitter, Input, OnChanges} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit,OnChanges {

  addMovieForm:FormGroup;
  currentpath:boolean;
  @Input() currentMovieDetail:Movie;

  @Output() updateformValues:EventEmitter<any>=new EventEmitter();
  @Output() formValues:EventEmitter<any>=new EventEmitter();
  @Output() currentMovieId:EventEmitter<any>=new EventEmitter();
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router) { }
  formValue;
  ngOnInit() {
    if( this.router.url=='/movies/add'){
      this.currentpath=true;
    }
    else{
      this.currentpath=false;
    }
   
   this.addMovieForm=this.fb.group({
        director:[''],
        movieid:[''],
        description:[''],
        mpaa:[''],
        relaseDate:[''],
        title:[''],
        price:[''],
        starRating:[''],
        approvalRating:[''],
        category:['']
      })
   
    this.currentMovieId.emit(this.route.snapshot.params['id']);
  }

  ngOnChanges(){
    //triggers when @input recives data
    console.log("AddMovieComponent -> currentMovieDetail", this.currentMovieDetail);
      if(!!this.currentMovieDetail){
        this.addMovieForm=this.fb.group({
          director:[this.currentMovieDetail.director],
          movieid:[this.currentMovieDetail.movieid],
          description:[this.currentMovieDetail.description],
          mpaa:[this.currentMovieDetail.mpaa],
          relaseDate:[this.currentMovieDetail.releaseDate],
          title:[this.currentMovieDetail.title],
          price:[this.currentMovieDetail.price],
          starRating:[this.currentMovieDetail.starRating],
          approvalRating:[this.currentMovieDetail.approvalRating],
          category:[this.currentMovieDetail.category]
        })
      }
     
    
  }

  addMovieFormSubmit(){
  // to create a clone and convert a string value to number by adding a + sign
  // const x={
  //   id:'101',
  //   name:'yash'
  // }
  // const cloneofx={...x,id:+x['id']};
  
  // console.log( cloneofx);
    const value = { ...this.addMovieForm.value, movieid: +this.addMovieForm.value.movieid };
    if( this.router.url=='/movies/add'){   
    this.formValues.emit(value);
    }
    else{
      this.updateformValues.emit(value);
    }
    // console.log("AddMovieComponent -> addMovieFormSubmit -> value", value)
  
   this.addMovieForm.reset();
  }
}
