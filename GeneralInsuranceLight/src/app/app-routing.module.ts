import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { PlansComponent } from './plans/plans.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { CalculatePremiumComponent} from './calculate-premium/calculate-premium.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FinalregisterationComponent } from './finalregisteration/finalregisteration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home' , component:HomeComponent},
  {path:'About', component:AboutUsComponent},
  {path:'Buy', component:BuyInsuranceComponent},
  {path:'Login', component:LoginComponent},
  {path:'Register', component:FinalregisterationComponent},
  {path:'Renew', component:RenewInsuranceComponent},
  {path:'Claim', component:ClaimInsuranceComponent},
  {path:'Plans', component:PlansComponent},
  {path:'Contact', component:ContactUsComponent},
  {path:'FAQ', component:FaqComponent},
  {path:'Calculate', component:CalculatePremiumComponent},
  {path:'ForgotPassword', component:ForgotpasswordComponent},
  {path:'Customer', component:CustomerDashboardComponent},
  {path:'Admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
