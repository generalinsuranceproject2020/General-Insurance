import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
@Injectable()
export class ClaimSc
{
    constructor(private http:HttpClient,private http1:HttpClient)
    {

    }
    postFile(policyno:string, reason:string, claimAmount:string, claimurl: File) {
        const endpoint = "http://localhost:20481/API/Demo/AddClaimDetails";
        const formData: FormData = new FormData();
        formData.append('Image', claimurl, claimurl.name);
        formData.append('policyno', policyno);
        formData.append('reason', reason);
        formData.append('claim', claimAmount);
        return this.http.post(endpoint, formData);
    }
}