import { Component } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { Address } from '../model/Address';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent {
  address = new Address('', '', '', '', '');
  rating = new Rating(0, '');

  restaurant = new Restaurant('', this.address, this.rating);

  addRestaurant(): void {
    console.log("Restaurant details:", this.restaurant);
  }
}
