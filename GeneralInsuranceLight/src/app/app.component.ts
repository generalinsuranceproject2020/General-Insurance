import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeneralInsuranceLight';
  loginsessionuser;
  loginsessionadmin;
  adminemail;
  username;
  ngOnInit() {

    let checklogin = sessionStorage.getItem('user')
    //not empty
    if (checklogin!=null && checklogin == "admin@gmail.com") //enter role in api 
    {
      this.router.navigate(['/Admin']);
    } else if (checklogin!=null && checklogin != "admin@gmail.com") {
      this.router.navigate(['/Customer']);
    } else {
      this.router.navigate(['/Home']);
    }
  }
  constructor(private router: Router) {

  }
  ngDoCheck() {
    if (sessionStorage.getItem('user')) //localStorage.getItem('email'))
    {
      this.username = sessionStorage.getItem('user');
      if (this.username == "admin@gmail.com") {
        this.loginsessionadmin = true;
        
      } else {
        this.loginsessionuser = true;
      }

    } else {
      this.loginsessionadmin = false;
      this.loginsessionuser = false;
    }
  }

 logOff() {

    //localStorage.clear();
    //this.loginsession=false;
    sessionStorage.clear();
    this.loginsessionadmin = false;
    this.loginsessionuser = false;
    this.router.navigate(['/Home']);

  }
}
