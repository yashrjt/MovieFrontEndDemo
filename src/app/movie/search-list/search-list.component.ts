import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit,OnChanges {

  @Input() movies;
  
  constructor() { }

  
  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.movies);
  }

}
