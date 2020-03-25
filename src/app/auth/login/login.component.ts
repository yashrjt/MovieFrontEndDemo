import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  //form is a group of controls
  //lifecylce hooks
  loginForm:FormGroup;
  

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    console.log('Login comp initilaised');
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
  }

  loginFormSubmit(){
    console.log("LoginComponent -> loginForm", this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe((res)=>{
    console.log("LoginComponent -> loginFormSubmit -> res", res)

    },
    (err)=>{
    console.log("LoginComponent -> loginFormSubmit -> err", err)
      
    });
    this.loginForm.reset();
    this.router.navigate(['/home']);
  }
  ngOnDestroy(){
    console.log('Login comp destroyed');
  }

}
