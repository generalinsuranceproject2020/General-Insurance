import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from '../models/Claim';
import { ClaimSc } from '../services/claimsc';
import { ClaimService } from '../services/claimservice';

@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {
  claimurl: File;
  isSubmitted: boolean = false;
  reasons=['Road Accident','Natural Disaster','Man-made Disaster','Theft']
  constructor(private router:Router, private claimservice: ClaimSc) { }
  claim: Claim = {
    policyNo : null,
    mobilenumber: null,
    Period: null,
    Amount: null,
    reason : null,
    claimurl: null
  }
  handleFileInput(file: FileList) {
    this.claimurl = file.item(0);
  }
  ngOnInit(): void {
    var PolicyID = sessionStorage.getItem("policyid");
    document.getElementById("lbl").innerHTML =PolicyID.toString();
  }
  calculateClaimAmount(reason: string)
  {
    var premium = 0;
    const Amount = sessionStorage.getItem("amount");
    const Period = sessionStorage.getItem("period");
    if(reason=="Road Accident")
    {
        premium = Number(Amount)*12*Number(Period)*0.20;
    }
    else if(reason=="Natural Disaster")
    {
        premium = Number(Amount)*12*Number(Period)*0.30;
    }
    else if(reason=="Man-made Disaster")
    {
        premium = Number(Amount)*12*Number(Period)*0.40;
    }
    else if(reason=="Theft")
    {
        premium = Number(Amount)*12*Number(Period)*0.10;
    }
    return premium;
  }
  submit(policy, reason, image, labelName, mobile){
    const mobileno = sessionStorage.getItem('Mobile');
    if(mobile.value == mobileno)
    {
      this.isSubmitted = true;
      var ClaimAmount = this.calculateClaimAmount(reason.value);
      alert("Claim Amount is "+ClaimAmount);
      //debugger;  
      this.claimservice.postFile(policy.value, reason.value, ClaimAmount.toString(), this.claimurl).subscribe(
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
