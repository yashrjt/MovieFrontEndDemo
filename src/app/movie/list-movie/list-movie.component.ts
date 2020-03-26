import { Component, OnInit,Input } from '@angular/core';
import {ListmovieService}  from '../services/listmovie.service';
import {Movie}  from '../movie';
import { DeletemovieService } from '../services/deletemovie.service';


@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  moviesList:Array<Movie>=[];
  constructor(private list:ListmovieService,private del:DeletemovieService) { }
  
  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.list.getAllMovies().subscribe((res)=>{
      this.moviesList=res;
    },
    (err)=>{
    console.log("ListMovieComponent -> ngOnInit -> err", err)
      
    })
  }

  delMovie($event){
   
    this.del.deleteMovie($event).subscribe((res)=>{
    this.getMovies();
    console.log("ListMovieComponent -> delMovie -> res", res)
      
    },
    (err)=>{
    console.log("ListMovieComponent -> ngOnInit -> err", err)
      
    })
  }

  editMovie($event){
    
  }
}
