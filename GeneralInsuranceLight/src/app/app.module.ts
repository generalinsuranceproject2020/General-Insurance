import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { PlansComponent } from './plans/plans.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    RegisterComponent,
    BuyInsuranceComponent,
    ClaimInsuranceComponent,
    RenewInsuranceComponent,
    PlansComponent,
    FaqComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
