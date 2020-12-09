import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { PlansComponent } from './plans/plans.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { CalculatePremiumComponent } from './calculate-premium/calculate-premium.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { BuyInsuranceService } from './services/buyinsuranceservice';
import { FinalregisterationComponent } from './finalregisteration/finalregisteration.component';
import { RegisterationService } from './services/registerationservice';
import { ForgotserviceService } from './services/ForgotserviceService';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ClaimService } from './services/claimservice';
import { ClaimSc } from './services/claimsc';
import { RenewService } from './services/renewservices';
import { AdminComponent } from './admin/admin.component';
import { EmployeeService } from './services/adminservice';
import { ContactSc } from './services/contactservice';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    BuyInsuranceComponent,
    ClaimInsuranceComponent,
    RenewInsuranceComponent,
    PlansComponent,
    FaqComponent,
    LoginComponent,
    CalculatePremiumComponent,
    AboutUsComponent,
    FinalregisterationComponent,
    ForgotpasswordComponent,
    CustomerDashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BuyInsuranceService, ForgotserviceService, RegisterationService, ClaimService, ClaimSc, RenewService, EmployeeService, ContactSc],
  bootstrap: [AppComponent]
})
export class AppModule { }
