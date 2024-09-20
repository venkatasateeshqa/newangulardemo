import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../model/Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
 // @Input() address1: Address = new Address('', '', '', '', '');
  //@Output() addressChange = new EventEmitter<Address>();
  //@Output() addressEventEmitter = new EventEmitter<Address>();
  
  address={
    add1:'',
    add2:'',
    city:'',
    state:'',
    pincode:''

  }
  //onAddressChange() {
   // this.addressChange.emit(this.address);
 // }
}
