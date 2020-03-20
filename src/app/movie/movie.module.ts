import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';
import {MovieRoutingModule}  from './movie-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';


@NgModule({
  declarations: [ShellMovieComponent, AddMovieComponent, ListMovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  exports:[ShellMovieComponent,AddMovieComponent,ListMovieComponent]
})
export class MovieModule { }
