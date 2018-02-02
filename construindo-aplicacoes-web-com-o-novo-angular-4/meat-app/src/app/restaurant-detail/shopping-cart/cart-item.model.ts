import { MenuItem } from '../menu-item/menu-item.model';
export class CartItem {
  
  constructor(public nenuItem: MenuItem, public quantity: number = 1){}
  
  value(): number{
    return this.nenuItem.price * this.quantity
  }
  
  
  
}