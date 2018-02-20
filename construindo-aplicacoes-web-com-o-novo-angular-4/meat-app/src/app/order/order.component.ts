import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from '../shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service.service';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emialPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  
  numberPattern = /^[0-9]*$/
  
  
  orderForm: FormGroup
  
  
  delivery: number = 8
  
  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value : 'MON'},
    {label: 'Cartão de Débito', value : 'DEB'},
    {label: 'Cartão Refeição', value : 'REF'}
  ]
  
  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emialPattern)]),
      emailConfirmation: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emialPattern)]),
      address: this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('',[Validators.required])
    })
  }

  
  itemsValue(){
    return this.orderService.itemsValue()
  }
  
  cartItems(){
    return this.orderService.cartItems()
  }
  
  
  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }
  
  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }
  
  remove(item: CartItem){
    this.orderService.remove(item)
  }
  
  
  
  checkOrder(order: Order){    
    order.orderItems = 
      this.cartItems()
        .map(item => new OrderItem(item.quantity, item.nenuItem.id))
    
    this.orderService.checkOrder(order).subscribe(orderId => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    
  }
  
  
  
}
