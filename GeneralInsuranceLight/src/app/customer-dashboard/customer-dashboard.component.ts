import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimService } from '../services/claimservice';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  empdetails: any=[];
  custdetails: any=[];
  constructor(private empservice:ClaimService, private router:Router) { }

  ngOnInit(): void {

    this.fetchCustomers();
    this.fetchEmployee();
    
  }
  submit(policyid: any, period: number, amount: any){
    sessionStorage.setItem("policyid", policyid);
    sessionStorage.setItem("period", period.toString());
    sessionStorage.setItem("amount", amount);
    this.router.navigate(['/Claim']);
  }
  submit1(policyid: any, ExpiryDate: Date){
    sessionStorage.setItem("policyid", policyid);
    sessionStorage.setItem("expiry", ExpiryDate.toString());
    let dateTime = new Date();
    let edate = new Date(ExpiryDate.toString());
    console.log(dateTime);
    console.log(edate);
    console.log(dateTime.getFullYear());
    var Difference_In_Time = edate.getTime() - dateTime.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    /*alert(dateTime);
    var months = (edate.getFullYear() - dateTime.getFullYear());
    months += Math.abs(edate.getMonth() - dateTime.getMonth()); 
    if(edate.getDate() - dateTime.getDate())
    {
      months--;
    }*/
    console.log(Difference_In_Days);
    if(Difference_In_Days < 30)
    {
      this.router.navigate(['/Renew']);
    }
    else
    {
      var d = edate;
      d.setMonth(d.getMonth() - 1);
      alert("Sorry you can't renew this policy "+ d);
    }
  }
  fetchCustomers(){
    this.custdetails=this.empservice.getCustomerDetails().subscribe((data)=>
    {this.custdetails=data;console.log(data);
      console.log(this.custdetails);
      sessionStorage.setItem("Mobile", this.custdetails[0].MobileNumber);
    })
  }
  fetchEmployee(){
    //debugger
    this.empdetails=this.empservice.getPolicyDetails().subscribe((data)=>
    {this.empdetails=data;console.log(data)
    })
    console.log(this.empdetails);
    
  }
  Approve(id:number){
        
  }

}
