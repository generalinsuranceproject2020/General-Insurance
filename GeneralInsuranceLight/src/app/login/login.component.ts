import { Component, OnInit } from '@angular/core';    
import { RegisterationService } from '../services/registerationservice';  
 import { FormsModule } from '@angular/forms';
 import { Router } from '@angular/router';  
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : Login = {
    Email:null,
    Password:null
  };
  errorMessage:string; 
  constructor(private registerationservice:RegisterationService,private router:Router) { }

  ngOnInit(): void {
    /*sessionStorage.removeItem('Email');    
    sessionStorage.clear(); */
  }
  login(Email, Password){    
    debugger;    
    this.registerationservice.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          sessionStorage.setItem('user', Email.value);
          //this.router.navigate(['/Dashboard']); 
          //this.router.navigate(['/home']); 
          if(sessionStorage.getItem('user') == "admin@gmail.com")
          {
            console.log("Success");  
            this.router.navigate(['/Admin']);
          }
          else
          {
            console.log("Success");  
            this.router.navigate(['/Customer']);
          }
          //debugger;    
        }    
        else{    
          alert("Invalid login credential");  
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
      
  }; 
  finalregister(){
    this.router.navigate(['/Register']);
  }
  forgotpassword(){
    this.router.navigate(['/ForgotPassword']);
  }
}