import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {SingleSignOnService}  from '../service/single-sign-on.service';
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
  
  loginError:string;
  constructor(private fb:FormBuilder,private auth:AuthService,private sso:SingleSignOnService,private router:Router) { }

  ngOnInit() {
    console.log('Login comp initilaised');
    this.loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    // this.sso.getData().subscribe(
    // (res)=>{
    // console.log("LoginComponent -> ngOnInit -> res", res)
    // this.router.navigate(['/']);
    // },
    // (err)=>{
    // console.log("LoginComponent -> ngOnInit -> err", err)
    // })
  }

  loginFormSubmit(){
   
    this.auth.login(this.loginForm.value).subscribe((res)=>{
    this.router.navigate(['/home']);
    },
    (err)=>{
    if(err.status===401){
      this.loginError='Incorrect Email or password';
    }
    });
    this.loginForm.reset();
   
  }

  googleLogin(){
    // this.sso.sendData('google signin');
   this.auth.googleAuth().subscribe((res)=>{
   console.log("LoginComponent -> googleLogin -> res", res)
     
   },
   (err)=>{
   console.log("LoginComponent -> googleLogin -> err", err)
     
   });
  }
  ngOnDestroy(){
    // this.sso.disconnect();
  }

}
