import { OrderService } from '../order/order.service.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurant/restaurants.service';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations:[InputComponent,RadioComponent,RatingComponent],
  imports:[CommonModule,FormsModule,ReactiveFormsModule],
  exports:[InputComponent,RadioComponent,RatingComponent,CommonModule,FormsModule,ReactiveFormsModule]
})

export class SharedModule {
  
  
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService,RestaurantsService, OrderService]
    }
  }
  
}