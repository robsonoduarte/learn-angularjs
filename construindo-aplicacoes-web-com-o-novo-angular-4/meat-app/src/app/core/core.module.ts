import { OrderService } from '../order/order.service.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurant/restaurants.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers:[ShoppingCartService, OrderService, RestaurantsService]
})

export class CoreModule {}