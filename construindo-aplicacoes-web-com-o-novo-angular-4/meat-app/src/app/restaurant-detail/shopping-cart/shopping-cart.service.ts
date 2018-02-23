import { NotificationService } from '../../shared/messages/notification.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  
  itens: CartItem[] = []
  
  
  constructor(private notificationService: NotificationService) { }

  
  clear(){
    this.itens = []
  }
  
  
  addItem(item:MenuItem){
    let foundItem = this.itens.find(mItem => mItem.nenuItem.id === item.id)
    if(foundItem){
      this.increaseQty(foundItem)
    }else{
      this.itens.push(new CartItem(item))
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`)
  }
  
  
  removeItem(item:CartItem){
    this.itens.splice(this.itens.indexOf(item), 1)
    this.notificationService.notify(`Você adicionou o item ${item.nenuItem.name}`)
  }
  
  
  total(): number{
    return this.itens
      .map(item => item.value())
      .reduce((prev,value) => prev + value, 0)
  }
  
 
  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1
  }
 
 
  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1 
    if(item.quantity === 0){
      this.removeItem(item)
    }  
  }
 
}
