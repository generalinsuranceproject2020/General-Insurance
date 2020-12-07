import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
@Injectable()
export class ClaimService
{
    constructor(private http:HttpClient,private http1:HttpClient)
    {

    }
    getPolicyDetails(){
        //debugger;
        return this.http.get("http://localhost:20481/API/Demo/PolicyDetails");
    }
    getCustomerDetails(){
        return this.http.get("http://localhost:20481/API/Demo/CustomerDetails");   
    }
}