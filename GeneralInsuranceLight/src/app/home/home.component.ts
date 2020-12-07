import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit(): void {
    const email = sessionStorage.getItem('user');
  }

  buyInsurance()
  {
    const email = sessionStorage.getItem('user');
    if(email != null)
    {
      this.router.navigate(["/Buy"]);
    }
    else
    {
      this.router.navigate(['/Login'])
    }
  }

  Insurance()
  {
    const email = sessionStorage.getItem('user');
    if(email != null)
    {
      this.router.navigate(["/Customer"]);
    }
    else
    {
      this.router.navigate(['/Login'])
    }
  }

}
