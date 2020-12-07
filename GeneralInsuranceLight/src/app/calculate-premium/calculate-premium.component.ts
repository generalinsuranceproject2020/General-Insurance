import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { param } from 'jquery';

@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css']
})
export class CalculatePremiumComponent implements OnInit {
  customForm:FormGroup;
  isSubmitted: boolean= false;
  Age: any;
  car: any;
  cc: any;
  third: any; 
  cars= [
    { id:1, name: "SUV" , cost: 800000, cc: 1500},
    { id:2, name: "Crossover", cost: 500000, cc: 1248},
    { id:3, name: "Sedan", cost: 700000, cc: 1199},
    { id:4, name: "Hatchback", cost: 650000, cc: 1200}
  ];
  constructor(private fb:FormBuilder) { 
    this.customForm = this.fb.group({
      car: new FormControl(null, [Validators.required]),
      Age: new FormControl(null, [Validators.required]),
      CC: new FormControl(),
      third: new FormControl(null, [Validators.required]),
      vehicle: new FormControl()
    });
  }
  get f(){
    return this.customForm.controls;
  }
  ngOnInit(): void {
  }

  totalPremium(lbl:string)
  {
    this.isSubmitted=true;
    if(!this.customForm.valid)
    {
      return false;
    }
    else
    {
      if(this.customForm.get('third').value == "comprehensive")
        document.getElementById(lbl).innerHTML = this.premiumCalculate().toString();
      else
        document.getElementById(lbl).innerHTML = (this.premiumCalculate()-1000).toString();
    }
  }

  premiumCalculate(){
    var premium;
    var Price = this.customForm.get('car').value;
    console.log(Price);
    var age = this.customForm.get('Age').value;
    console.log(age);
    var vehicle = this.customForm.get('vehicle').value;
    if(vehicle == "four")
      var basic = this.basicPremium(Price);
    else
      var basic = this.basicPremium(Price);
    console.log(basic);
    if(age <= 0.6){
      premium = (Price - (Price * 0.05))/12;
      //console.log(this.premium);
    }
    else if(age <= 1){
      premium = (Price - (Price * 0.15))/12;
      //console.log(this.premium);
    }
    else if(age <= 2){
      premium = (Price - (Price * 0.20))/12;
      //console.log(this.premium);
    }
    else if(age <= 3){
      premium = (Price - (Price * 0.30))/12;
      //console.log(this.premium);
    }
    else if(age <= 4){
      premium = (Price - (Price * 0.40))/12;
      //console.log(this.premium);
    }
    else {
      premium = (Price - (Price * 0.50))/12;
      //console.log(this.premium);
    }
    console.log(premium);
    console.log(premium*basic);
    var calculate = ((3 * basic)+1110);
    var total = calculate + (calculate * 0.18);
    console.log(total);
    return total;
  }

  basicPremium(price: number)
  {
    for (let index = 0; index < this.cars.length; index++) {
      const element = this.cars[index].cc;
      if(element < 1200 && this.cars[index].cost == price)
      {
        var basicpremium = 500;
      }
      else if(element >= 1200 && element < 1400  && this.cars[index].cost == price)
      {
        var basicpremium = 1000;
      }
      else if(element >=1400 && this.cars[index].cost == price)
      {
        var basicpremium = 1500;
      }
    }
    
    return basicpremium;
  }

  basicPremium1(price: number)
  {
    for (let index = 0; index < this.cars.length; index++) {
      const element = this.cars[index].cc;
      if(element < 150 && this.cars[index].cost == price)
      {
        var basicpremium = 300;
      }
      else if(element >= 150 && element < 500  && this.cars[index].cost == price)
      {
        var basicpremium = 800;
      }
      else if(element >=500 && this.cars[index].cost == price)
      {
        var basicpremium = 1300;
      }
    }
    
    return basicpremium;
  }

  changeCar(e) {
    if(e.target.value == "four")
    {
      this.cars = [
        { id:1, name: "SUV" , cost: 800000, cc: 1500},
        { id:2, name: "Crossover", cost: 500000, cc: 1248},
        { id:3, name: "Sedan", cost: 700000, cc: 1199},
        { id:4, name: "Hatchback", cost: 650000, cc: 1200}
      ]
    }
    else if(e.target.value == "two")
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
