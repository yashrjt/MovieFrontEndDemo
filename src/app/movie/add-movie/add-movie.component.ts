import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  addMovieForm:FormGroup;

  @Output() formValues:EventEmitter<any>=new EventEmitter();
  constructor(private fb:FormBuilder) { }
  formValue;
  ngOnInit() {

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
       this.formValues.emit(value);
    // console.log("AddMovieComponent -> addMovieFormSubmit -> value", value)
  
   this.addMovieForm.reset();
  }
}
