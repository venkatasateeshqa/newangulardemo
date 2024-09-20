import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

const routes: Routes = [{
  path:'forgotpassword',
  component:ForgotpasswordComponent
},{
  path:'register',
  component:TemplateDrivenComponentComponent
},
{
  path:'addRestaurant',
  component:AddrestaurantComponent
},{
  path:'createAccount',
  component:CreateaccountComponent
},{
  path:'searchAccount',
  component:LoansearchComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
