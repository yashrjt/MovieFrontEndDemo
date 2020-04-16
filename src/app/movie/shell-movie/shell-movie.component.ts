import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {FormBuilder, FormGroup}  from '@angular/forms';
import { ListmovieService } from '../services/listmovie.service';

import {Movie}  from '../movie';



import { debounceTime, distinctUntilChanged, } from 'rxjs/operators';
import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-shell-movie',
  templateUrl: './shell-movie.component.html',
  styleUrls: ['./shell-movie.component.css']
})
export class ShellMovieComponent implements OnInit {

  showSearch:boolean=true;
  currenturl:string;
  searchForm:FormGroup;

   movieList=[];

  movieList$:Observable<Movie[]>;
  constructor(private router:Router,private formbuilder:FormBuilder,private movies:ListmovieService,private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.movieList=[];
    
    this.searchForm=this.formbuilder.group({
      inputSearch:['']
    })

     this.getcurrentURL();
    
     this.triggerSearch();
  
  }
   
 

 

 getcurrentURL(){
  this.router.events.subscribe((eve)=>{
  console.log("ShellMovieComponent -> getcurrentURL -> eve", eve)
    if(eve instanceof NavigationEnd){
      console.log(this.router.url);
      this.currenturl=this.router.url;
      if(this.currenturl==='/movies'){
       this.showSearch=true;
       }
     else{
       this.showSearch=false;
          }
    }
   })
 }

 triggerSearch(){
  let inputBox=this.searchForm['controls'].inputSearch;

  
  inputBox.valueChanges.pipe(debounceTime(300),distinctUntilChanged()).subscribe(
    (char)=>{
      if(char===''){
        this.movieList=[];
      }
      this.searchMovies(char);
  })
 }

  searchMovies(term) {
  
     this.movies.searchMovies(term).subscribe((res)=>{
   
        res['data'].forEach(element => {    
          if (!(this.movieList.filter(e => e.title === element['title']).length > 0) ){
            this.movieList.push({title:element['title'],movieid:element['movieid']});
            console.log("ShellMovieComponent -> searchMovies ->  this.movieList",  this.movieList)
            
          }        
      });
    },
    (err)=>{
    console.log("ShellMovieComponent -> searchMovies -> err", err);    
    })
  }

  onSelect($event){
  console.log("ShellMovieComponent -> onSelect -> $event", $event.item)
    
  }



}
