import { Component } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { Address } from '../model/Address';
import { Account } from '../model/account';
import { AddressComponent } from '../address/address.component';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {

[x :string]:any;
accountnumber:string="test"

account= new Account('','',0,'','',new Address('','','','',''));
constructor(private accountService:AccountserviceService){

}
createAccount(custaddress:AddressComponent){
  console.log("custAddress"+JSON.stringify(custaddress));
  this.account.address=custaddress.address;
  console.log(JSON.stringify(this.account));
  this.accountService.createAccount(this.account).subscribe(
    data => {
      this.accountnumber=data.accountNumber;
    }
  )
}

}
