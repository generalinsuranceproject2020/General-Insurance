import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  constructor(private router:Router) { 
  }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(['/Plans']);
  }
}
