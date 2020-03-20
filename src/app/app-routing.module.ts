import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MyWishComponent } from './wishlist/my-wish/my-wish.component';
import { LoginGuard } from './auth/login.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'wishlist',component:MyWishComponent,canActivate:[LoginGuard]},
  {path:'movies',loadChildren:'./movie/movie.module#MovieModule'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
