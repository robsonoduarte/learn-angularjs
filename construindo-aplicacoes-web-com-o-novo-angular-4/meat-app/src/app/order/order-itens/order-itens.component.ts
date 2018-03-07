import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() itens: CartItem[]
  
  @Output() increseQty = new EventEmitter<CartItem>()
  @Output() decreseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()
  
  constructor() { }

  ngOnInit() {
  }

  
  emitIncreaseQty(item: CartItem){
    this.increseQty.emit(item)
  }
  
  
  emitDecreaseQty(item: CartItem){
    this.decreseQty.emit(item)
  }
  
  emitRemove(item: CartItem){
    this.remove.emit(item)
  }
}
