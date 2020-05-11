import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MyWishComponent } from './wishlist/my-wish/my-wish.component';
import { LoginGuard } from './auth/login.guard';
import {HomeComponent}  from './core/home/home.component';
import {RegisterComponent}  from './auth/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'google/redirect',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'wishlist',component:MyWishComponent,canActivate:[LoginGuard]},
  {path:'movies',loadChildren:'./movie/movie.module#MovieModule',canActivate:[LoginGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
