import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../model/Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input() address: Address = new Address('', '', '', '', '');
  @Output() addressChange = new EventEmitter<Address>();

  onAddressChange() {
    this.addressChange.emit(this.address);
  }
}
