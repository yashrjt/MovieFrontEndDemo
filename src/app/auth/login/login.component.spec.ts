import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import {HttpClientTestingModule}  from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

//Test suite--combination od individual tests
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a loginform craeted',()=>{
      expect(component.loginForm instanceof FormGroup).toBe(true);
  })

  it('should have email and password fields',()=>{
    let email=component.loginForm['controls']['email'];
    let pwd=component.loginForm['controls']['password'];
    console.log("email", email);
    expect(pwd).toBeTruthy();
    expect(email).toBeTruthy();
  })


  it('pwd and email are valid when it gets sonme data',()=>{
    let email=component.loginForm['controls']['email'];
    expect(email.valid).toBeFalsy();
    email.setValue('yash@gmail.com');
    expect(email.valid).toBeTruthy();
    // let pwd=component.loginForm['controls']['password'];
    
    // expect(pwd).toBeTruthy();
  })

  //query dom elements
  it('query button',()=>{
    
  })
});
