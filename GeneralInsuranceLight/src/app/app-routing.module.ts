import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { PlansComponent } from './plans/plans.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home' , component:HomeComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Login', component:LoginComponent},
  {path:'Buy', component:BuyInsuranceComponent},
  {path:'Renew', component:RenewInsuranceComponent},
  {path:'Claim', component:ClaimInsuranceComponent},
  {path:'Plans', component:PlansComponent},
  {path:'Contact', component:ContactUsComponent},
  {path:'FAQ', component:FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
