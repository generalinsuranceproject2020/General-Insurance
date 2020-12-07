import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Plans } from '../models/Plans';

@Injectable({
    providedIn: 'root'
})
export class PlansService{
    Url: string;
    token: string;
    header: any;
    url = 'http://localhost:20481/API/Demo';
    constructor(private http : HttpClient) {
        //this.Url = 'http://localhost:20481/api/BuyInsurance';  
      
        const headerSettings: {[name: string]: string | string[]; } = {};  
        this.header = new HttpHeaders(headerSettings);
    }
      
    policy(policy: string, period:string, premium:string, Email:string, model:string) {
        const endpoint = 'http://localhost:20481/API/Demo/AddPolicyDetails';
        const formData: FormData = new FormData();
        formData.append('Policy', policy);
        formData.append('Period', period);
        formData.append('Premium', premium);
        formData.append('Email', Email);
        formData.append('Model', model);
        return this.http.post(endpoint, formData);
      }
    
    
}