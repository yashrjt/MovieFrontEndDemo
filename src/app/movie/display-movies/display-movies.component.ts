import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {Movie}  from '../movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit,OnChanges {

  @Input() movies:Movie[]=[];
 
  @Output() movieDelId:EventEmitter<number>=new EventEmitter();
  @Output() movieEditId:EventEmitter<number>=new EventEmitter();
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   
  }

  ngOnChanges(){
    console.log("DisplayMoviesComponent -> movies", this.movies)
  }
  deleteMovie(id){
  console.log("DisplayMoviesComponent -> deleteMovie -> id", id)
    this.movieDelId.emit(id);
  }

  edit(id){
      console.log(this.route.snapshot);
      this.movieEditId.emit(id);
      this.router.navigate([`movies/edit/${id}`]);
  }

  openDetail(id){
  console.log("DisplayMoviesComponent -> openDetail -> id", id)

  }
}
