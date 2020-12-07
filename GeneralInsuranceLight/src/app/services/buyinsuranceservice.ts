import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { BuyInsurance } from '../models/buyinsurancemodel';

@Injectable({
    providedIn: 'root'
})
export class BuyInsuranceService{
    Url: string;
    token: string;
    header: any;
    url = 'http://localhost:20481/API/Demo';
    constructor(private http : HttpClient) {
        //this.Url = 'http://localhost:20481/api/BuyInsurance';  
      
        const headerSettings: {[name: string]: string | string[]; } = {};  
        this.header = new HttpHeaders(headerSettings);
    }
      
    postFile(vehicle:string, manufacturer: string, model:string, driving:string, pdate:string, rno:string, eno:string, cno:string, aadharurl: File, drivingurl: File, vehicleurl: File) {
        const endpoint = 'http://localhost:20481/API/Demo/AddFileDetails';
        const formData: FormData = new FormData();
        const email = sessionStorage.getItem('user');
        formData.append('Image0', aadharurl, aadharurl.name);
        formData.append('Image1', drivingurl, drivingurl.name);
        formData.append('Image2', vehicleurl, vehicleurl.name);
        formData.append('vehicle', vehicle);
        formData.append('manufacturer', manufacturer);
        formData.append('model', model);
        formData.append('driving', driving);
        formData.append('pdate', pdate);
        formData.append('rno', rno);
        formData.append('eno', eno);
        formData.append('cno', cno);
        formData.append('Email', email);
        return this.http.post(endpoint, formData);
      }
    
    
}