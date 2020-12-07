import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
import{registerations} from '../models/registeration';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';  
@Injectable()
export class RegisterationService
{
  Url :string;  
  token : string;  
  header : any; 
    baseURL: string = "http://localhost:20481/api/Customer";
    selectedRegisteration:registerations
    constructor(private http:HttpClient)
    {
      this.Url = 'http://localhost:20481/api/Login';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 

    }
    /*postEmployee(emp:registerations):Observable<any>{
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(emp);
        console.log(body)
        return this.http.post(this.baseURL , body,{'headers':headers})
      }*/


      Login(model : any){  
      debugger;  
      var a =this.Url+'UserLogin';  
       return this.http.post<any>("http://localhost:20481/api/Login/UserLogin",model,{ headers: this.header});  
      }  
      CreateUser(register:registerations)  
      {  
        debugger
       const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
       const body=JSON.stringify(register);
       console.log(body);
       return this.http.post("http://localhost:20481/api/Login/createcontact", register, httpOptions) 
      } 
      getEmployee(){
        //debugger;
        return this.http.get("http://localhost:20481/api/login");
    }
      


    
}