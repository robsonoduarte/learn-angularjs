import { OrderService } from '../order/order.service.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurant/restaurants.service';
import { InputComponent } from './input/input.component';
import { NotificationService } from './messages/notification.service';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';


@NgModule({
  declarations:[InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
  imports:[CommonModule,FormsModule,ReactiveFormsModule],
  exports:[InputComponent,RadioComponent,RatingComponent,CommonModule,FormsModule,ReactiveFormsModule,SnackbarComponent]
})

export class SharedModule {
  
  
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService,RestaurantsService, OrderService, NotificationService]
    }
  }
  
}