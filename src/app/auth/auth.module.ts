import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import {ReactiveFormsModule, FormsModule}  from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './interceptors/jwt.interceptor';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[LoginComponent,RegisterComponent],
   providers:[{provide:HTTP_INTERCEPTORS,useClass:JWTInterceptor,multi:true}]
})
export class AuthModule { }
