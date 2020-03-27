import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ListmovieService}  from '../services/listmovie.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private list:ListmovieService,private router:Router) { }
  movie:Movie;

  ngOnInit() {
   const movieid= this.route.snapshot.params.id
    this.getMovieDetail(movieid);
  }
  getMovieDetail(movieid){

    this.list.getMovieDetail(movieid).subscribe((res)=>{
   
      this.movie=res['data'];
     
    },
    (err)=>{
    console.log("ListMovieComponent -> ngOnInit -> err", err)
      
    })
  }

  onBack(){
    this.router.navigate(['movies/viewall']);
  }

}
