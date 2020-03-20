import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent]
  // providers:[LoginGuard]
})
export class AuthModule { }
