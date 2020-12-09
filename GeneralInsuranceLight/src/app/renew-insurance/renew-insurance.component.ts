import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Renew } from '../models/renew';
import { RenewService } from '../services/renewservices';

@Component({
  selector: 'app-renew-insurance',
  templateUrl: './renew-insurance.component.html',
  styleUrls: ['./renew-insurance.component.css']
})
export class RenewInsuranceComponent implements OnInit {

  claimurl: File;
  isSubmitted: boolean = false;
  periods=["1","2","3"]
  constructor(private router:Router, private renewservice: RenewService) { }
  renew: Renew = {
    policyNo : null,
    mobilenumber: null,
    Period: null
  }
  ngOnInit(): void {
    var PolicyID = sessionStorage.getItem("policyid");
    document.getElementById("lbl").innerHTML =PolicyID.toString();
  }
  
  submit(policy, period, mobile){
    const mobileno = sessionStorage.getItem('Mobile');
    if(mobile.value == mobileno)
    {
      this.isSubmitted = true;
      //debugger;  
        this.renewservice.postFile(policy.value, period.value).subscribe(
        data =>{
          console.log('done');
          this.router.navigate(['/Customer']);
        }
      );
    }
    else
    {
      alert("Mobile number is incorrect!")
    }
  }

}
