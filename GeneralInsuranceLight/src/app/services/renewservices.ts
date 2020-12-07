import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
@Injectable()
export class RenewService
{
    constructor(private http:HttpClient)
    {

    }
    postFile(policyno:string, period:string) {
        const endpoint = "http://localhost:20481/API/Demo/AddRenewDetails";
        const formData: FormData = new FormData();
        formData.append('policyno', policyno);
        formData.append('period', period);
        return this.http.post(endpoint, formData);
    }
}