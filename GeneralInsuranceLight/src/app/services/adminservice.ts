import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
@Injectable()
export class EmployeeService
{
    constructor(private http:HttpClient,private http1:HttpClient)
    {

    }
    getEmployee(){
        //debugger;
        return this.http.get("http://localhost:20481/api/Admin");
    }
    getTax(id:number){
        console.log(id);
        return this.http1.get("http://localhost:20481/api/Admin/"+id);
    }

    getClaimDetails(){
        debugger
        return this.http.get("http://localhost:20481/api/AdminClaim");
    }
    getClaim(id:number){
        debugger
        console.log(id);
        return this.http1.get("http://localhost:20481/api/AdminClaim/"+id);
      
    }

}