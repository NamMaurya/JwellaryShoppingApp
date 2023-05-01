import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { cartItem } from '../shared/models/cartItem';
import { Jewells } from '../shared/models/jewells';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:cart = new cart();

  constructor() { }

  addToCart(jewell:Jewells):void{
    let cartitem = this.cart.items.find(item => item.jewell.id === jewell.id)
    if(cartitem){
      this.changeQuantity(jewell.id, cartitem.quantity+1)
      return;
    }
    this.cart.items.push(new cartItem(jewell));
  }

  removeFromCart(jId:number):void{
    this.cart.items=this.cart.items.filter(item => item.jewell.id != jId)
  }

  changeQuantity(jId:number,q:number){
    let cartitem = this.cart.items.find(item => item.jewell.id === jId);
    if(!cartitem) return;
    cartitem.quantity = q;
  }

  getCart(){
    return this.cart;
  }
}
