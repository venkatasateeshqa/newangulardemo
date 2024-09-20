import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MaskDirective } from './mask.directive';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { RatingComponent } from './rating/rating.component';
import { InputChangeDirective } from './input-change.directive';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoansearchComponent } from './loansearch/loansearch.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    ForgotpasswordComponent,
    MaskDirective,
    AddressComponent,
    UserComponent,
    AddrestaurantComponent,
    RatingComponent,
    InputChangeDirective,
    CreateaccountComponent,
    LoansearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
