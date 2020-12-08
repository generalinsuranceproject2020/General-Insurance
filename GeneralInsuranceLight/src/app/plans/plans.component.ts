import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from '../models/Plans';
import { PlansService } from '../services/planservice';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  isSubmitted:boolean = false;
  cars= [
    { id:1, name: "SUV" , cost: 800000, cc: 1500},
    { id:2, name: "Crossover", cost: 500000, cc: 1248},
    { id:3, name: "Sedan", cost: 700000, cc: 1199},
    { id:4, name: "Hatchback", cost: 650000, cc: 1200}
  ];
  bikes = [
    { id:1, name: "Touring Bikes" , cost: 150000, cc: 220},
    { id:2, name: "Scooters", cost: 50000, cc: 124},
    { id:3, name: "Sports", cost: 1400000, cc: 800},
    { id:4, name: "Dirt Bikes", cost: 600000, cc: 250}
  ];
  constructor(private router:Router, private plans:PlansService) { }
  plan:Plans={
    policy: null,
    period: null
  }
  ngOnInit(): void {
  }
  
  totalPremium(lbl, policy, period)
  {
    const cpolicy = this.premiumCalculate().toString();
    const tpolicy = (this.premiumCalculate()-1000).toString();
    this.isSubmitted=true;
    if(policy.value == "Comprehensive")
      document.getElementById(lbl).innerHTML = cpolicy;
    else
      document.getElementById(lbl).innerHTML = tpolicy;
    
    const premium = document.getElementById(lbl).textContent;
    const model = sessionStorage.getItem('Model');
    const Email = sessionStorage.getItem('user');
    console.log(premium)
    this.plans.policy(policy.value, period.value, premium, Email, model).subscribe(
      data =>{
        console.log('done');
        alert("Premium is : " + premium);
        this.router.navigate(['/Customer']);
      }
    );
  }

  premiumCalculate(){
    var basic = 0;
    const Model = sessionStorage.getItem('Model');
    const VehicleType = sessionStorage.getItem('VehicleType');
    if(VehicleType == "FourWheeler")
    {
      this.cars.forEach(element => {
        if(Model == element.name)
        {
          basic = this.basicPremium(element.cost);
        }
      });
    }
    else
    {
      this.bikes.forEach(element => {
        if(Model == element.name)
        {
          basic = this.basicPremium1(element.cost);
        }
      });
    }
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
    for (let index = 0; index < this.bikes.length; index++) {
      const element = this.bikes[index].cc;
      if(element < 150 && this.bikes[index].cost == price)
      {
        var basicpremium = 300;
      }
      else if(element >= 150 && element < 500  && this.bikes[index].cost == price)
      {
        var basicpremium = 800;
      }
      else if(element >=500 && this.bikes[index].cost == price)
      {
        var basicpremium = 1300;
      }
    }
    return basicpremium;
  }
}
