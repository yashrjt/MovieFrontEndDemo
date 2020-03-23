import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';



const routes: Routes = [
  {path:'',component:ShellMovieComponent,
   children:[
        {path:'add',component:AddMovieComponent},
        {path:'viewall',component:ListMovieComponent}
    ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
