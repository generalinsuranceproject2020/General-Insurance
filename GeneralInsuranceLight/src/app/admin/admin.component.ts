import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../services/adminservice';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  empdetails:any=[];
  empdetails1:any=[];
  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {

    this.fetchClaim();
    this.fetchEmployee();
    
  }
  fetchEmployee(){
    //debugger
    this.empdetails=this.empservice.getEmployee().subscribe((data)=>
    {this.empdetails=data;console.log(data)})
    console.log(this.empdetails);
  }
  Approve(id:number){
    this.empservice.getTax(id).subscribe((data)=>
    {
      console.log(data)
      if(data=1){
        alert("Request Approved");
      }
    })
  }
  fetchClaim(){
    debugger
    this.empdetails1=this.empservice.getClaimDetails().subscribe((data)=>
    {this.empdetails1=data;console.log(data)})
    console.log(this.empdetails1);
  }
  ApproveClaim(id:number){
    debugger
    this.empservice.getClaim(id).subscribe((data)=>
    {
      debugger
      console.log(data)
      if(data="1"){
        alert("Request Approved");
      }
    })
  }


}