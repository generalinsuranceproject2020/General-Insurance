import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{ContactSc} from '../services/contactservice';
import{Contact} from '../models/Contact';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  UserForm: any;
  constructor(private formbulider: FormBuilder,public registerationservice:ContactSc) { }

  ngOnInit(): void {
    this.UserForm = this.formbulider.group({    
      CustomerName:['', [Validators.required,Validators.pattern("[a-zA-Z]+[ ][a-zA-Z]+")]],      
      Email: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$")]],      
      ContactNumber: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],    
      Subject: ['', [Validators.required]],
      Message:['', [Validators.required]]
    },
    )
  }
  get CustomerName(){
    return this.UserForm.get("CustomerName");
  }
  get Email(){
    return this.UserForm.get("Email");
  }
  get ContactNumber(){
    return this.UserForm.get("ContactNumber");
  }
  get Subject(){
    return this.UserForm.get("Subject");
  }
  get Message(){
    return this.UserForm.get("Message");
  }
  onFormSubmit()    
  {    
    debugger
    const user = this.UserForm.value;   
    console.log(user); 
    this.Createemployee(user);   
     
  } 
  Createemployee(register:Contact)    
  {    
    console.log(register);
    debugger
  this.registerationservice.CreateUser(register).subscribe(    
    ()=>    
    {       
      this.UserForm.reset();    
    });    
  } 
  

}