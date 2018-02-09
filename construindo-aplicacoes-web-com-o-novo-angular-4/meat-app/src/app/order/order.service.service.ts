import { MEAT_API } from '../app.api';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http) { }

  
  
  cartItems(){
    return this.cartService.itens
  }
  
  
  itemsValue(){
    return this.cartService.total()
  }
  
  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }
  
  
  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }
  
  remove(item: CartItem){
    this.cartService.removeItem(item)
  }
  
  
  checkOrder(order:Order){
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')  
    return this.http
      .post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
      .map(resp => resp.json())
  }
  
  
  
  clear(){
    this.cartService.clear()
  }
  
}
