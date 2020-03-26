import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';
import { MovieComponent } from './movie/movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';



const routes: Routes = [
  {path:'',component:ShellMovieComponent,
 
   children:[
        {path:'add',component:MovieComponent},
        {path:'viewall',component:ListMovieComponent},
        {path:'edit/:id',component:MovieComponent}
    ]
},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
