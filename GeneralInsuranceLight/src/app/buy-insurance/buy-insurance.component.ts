import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyInsurance } from '../models/buyinsurancemodel';
import { BuyInsuranceService } from '../services/buyinsuranceservice';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {
  isSubmitted: boolean= false;
  aadharurl: File;
  drivingurl: File;
  vehicleurl: File;
  cars= [
    { id:1, name: "SUV" , cost: 800000, cc: 1500},
    { id:2, name: "Crossover", cost: 500000, cc: 1248},
    { id:3, name: "Sedan", cost: 700000, cc: 1199},
    { id:4, name: "Hatchback", cost: 650000, cc: 1200}
  ];
  constructor(private router:Router, private buyservice: BuyInsuranceService) { 
  }
  buy : BuyInsurance = {
    vehicle:null,
    manufacturer:null,
    model:null,
    driving:null,
    pdate:null,
    rno:null,
    eno:null,
    cno:null,
    aadharurl:null,
    drivingurl:null,
    vehicleurl:null
  };
  fileToUpload:File=null;
  dummyrequest:any={};

  ngOnInit(): void {
    
  } 
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  handleFileInput(file: FileList) {
    this.aadharurl = file.item(0);
  }
  handleFileInput1(file: FileList) {
    this.vehicleurl = file.item(0);
  }
  handleFileInput2(file: FileList) {
    this.drivingurl = file.item(0);
  }

  submit(vehicle, manufacturer, model, driving, pdate, rno, eno, cno, image1, image2, image3){
    this.isSubmitted = true;
    //debugger;  
    this.buyservice.postFile(vehicle.value, manufacturer.value, model.value, driving.value, pdate.value, rno.value, eno.value, cno.value, this.aadharurl, this.drivingurl, this.vehicleurl).subscribe(
      data =>{
        console.log('done');
        sessionStorage.setItem('Model',model.value);
        sessionStorage.setItem('VehicleType',vehicle.value);
        this.router.navigate(['/Plans']);
      }
    );
  }
  changeCar(e) {
    if(e.target.value == "FourWheeler")
    {
      this.cars = [
        { id:1, name: "SUV" , cost: 800000, cc: 1500},
        { id:2, name: "Crossover", cost: 500000, cc: 1248},
        { id:3, name: "Sedan", cost: 700000, cc: 1199},
        { id:4, name: "Hatchback", cost: 650000, cc: 1200}
      ]
    }
    else if(e.target.value == "TwoWheeler")
    {
      this.cars = [
        { id:1, name: "Touring Bikes" , cost: 150000, cc: 220},
        { id:2, name: "Scooters", cost: 50000, cc: 124},
        { id:3, name: "Sports", cost: 1400000, cc: 800},
        { id:4, name: "Dirt Bikes", cost: 600000, cc: 250}
      ]
    }
  }
}
