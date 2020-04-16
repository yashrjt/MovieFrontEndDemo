import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  loginError:string;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    console.log('Login comp initilaised');
    this.loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  loginFormSubmit(){
   
    this.auth.login(this.loginForm.value).subscribe((res)=>{
   // console.log("LoginComponent -> loginFormSubmit -> res", res)
    this.router.navigate(['/home']);
    },
    (err)=>{
   // console.log("LoginComponent -> loginFormSubmit -> err", err)
    if(err.status===401){
      this.loginError='Incorrect Email or password';
    }
    });
    this.loginForm.reset();
   
  }
  ngOnDestroy(){
    console.log('Login comp destroyed');
  }

}
