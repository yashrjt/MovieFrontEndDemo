import { Component, OnInit} from '@angular/core';
import { Router  } from '@angular/router';
import {FormBuilder,FormGroup} from '@angular/forms';

import { debounceTime, distinctUntilChanged, } from 'rxjs/operators';
import { ListmovieService } from '../services/listmovie.service';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent implements OnInit {

  searchForm:FormGroup;
  movieList=[];
  
  constructor(private formbuilder:FormBuilder,private router:Router,private movies:ListmovieService,) { }

  ngOnInit() {
    this.movieList=[];
    this.searchForm=this.formbuilder.group({
      inputSearch:[''] 
    })
    this.triggerSearch();
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
