import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { registerations} from '../models/registeration';
import { RegisterationService} from '../services/registerationservice';
import { ConfirmedValidator } from '../confirmed.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalregisteration',
  templateUrl: './finalregisteration.component.html',
  styleUrls: ['./finalregisteration.component.css']
})
export class FinalregisterationComponent implements OnInit {
  data = false;    
  UserForm: any;    
  massage:string;

  constructor(private formbulider: FormBuilder,public registerationservice:RegisterationService, private router:Router) { }
  pass;
  ngOnInit(): void {
    this.UserForm = this.formbulider.group({    
      CustomerName:['', [Validators.required,Validators.pattern("[a-zA-Z]+[ ][a-zA-Z]+")]],      
      Email: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$")]],     
      Password:['', [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      DateOfBirth: ['', [Validators.required]],    
      ContactNumber: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],    
      Address: ['', [Validators.required]],
      City:['', [Validators.required]],
      Country:['', [Validators.required]],
      State:['', [Validators.required]],
      Pincode:['', [Validators.required,Validators.pattern('^[0-9]{6}$')]],
      ConfirmPassword:['', [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]
    },{
      validator: ConfirmedValidator('Password', 'ConfirmPassword')
    }
    )
  }
 
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  get CustomerName(){
    return this.UserForm.get("CustomerName");
  }
  get Password(){
    return this.UserForm.get("Password");
  }
  get Email(){
    return this.UserForm.get("Email");
  }
  get DateOfBirth(){
    return this.UserForm.get("DateOfBirth");
  }
  get ContactNumber(){
    return this.UserForm.get("ContactNumber");
  }   
  get State(){
    return this.UserForm.get("State");
  }   
  get Address(){
    return this.UserForm.get("Address");
  }   
  get Pincode(){
    return this.UserForm.get("Pincode");
  }
  get City(){
    return this.UserForm.get("City");
  }
  get ConfirmPassword(){
    return this.UserForm.get("ConfirmPassword");
  }
  get Country(){
    return this.UserForm.get("Country");
  }
 

  onFormSubmit()    
  {    
    debugger
    const user = this.UserForm.value;   
    console.log(user); 
    this.Createemployee(user);   
     
  } 
  Createemployee(register:registerations)    
  {    
    console.log(register);
    debugger
  this.registerationservice.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
      this.router.navigate(['Login']);
    });    
  } 
}