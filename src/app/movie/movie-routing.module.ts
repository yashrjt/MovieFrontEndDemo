import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';
import { MovieComponent } from './movie/movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';



const routes: Routes = [
{path:'',component:ShellMovieComponent,
   children:[    
        {path:'add',component:MovieComponent},
        {path:'search',component:SearchmovieComponent},
        {path:'viewall',component:ListMovieComponent},
        {path:'edit/:id',component:MovieComponent}
    ]
},
{path:':id',component:MoviedetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
