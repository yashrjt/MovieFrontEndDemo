import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  
  
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    console.log('Login comp initilaised');
    this.registerForm=this.fb.group({
      email:[''],
      password:[''],
      name:[''],
      passwordConfirm:['']
    })
  }

  registerFormSubmit(){
   
    this.auth.register(this.registerForm.value).subscribe((res)=>{
   // console.log("LoginComponent -> loginFormSubmit -> res", res)
    this.router.navigate(['/login']);
    },
    (err)=>{
   // console.log("LoginComponent -> loginFormSubmit -> err", err)
    
    });
    this.registerForm.reset();
   
  }

}
