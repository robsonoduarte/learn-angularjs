import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  
  itens(): CartItem[]{
    return this.shoppingCartService.itens
  }
  
  total(): number{
    return this.shoppingCartService.total()
  }
  
  clear(){
    this.shoppingCartService.clear()
  }
  
  
  removeItem(item: CartItem){
    this.shoppingCartService.removeItem(item)
  }
  
  
  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item)
  }
  
}

