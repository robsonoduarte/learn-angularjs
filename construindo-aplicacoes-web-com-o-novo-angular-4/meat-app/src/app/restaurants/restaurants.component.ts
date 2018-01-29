import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurant/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] 
  
  constructor(private restaurantService: RestaurantsService) {}

  ngOnInit() {
    this.restaurants = this.restaurantService.restaurants()
  }

}
