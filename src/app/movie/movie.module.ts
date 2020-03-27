import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';
import {MovieRoutingModule}  from './movie-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { MovieComponent } from './movie/movie.component';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [ShellMovieComponent, AddMovieComponent, ListMovieComponent, MoviedetailComponent, DisplayMoviesComponent, MovieComponent, StarComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports:[ShellMovieComponent,AddMovieComponent,ListMovieComponent,MoviedetailComponent,DisplayMoviesComponent,MovieComponent]
})
export class MovieModule { }
