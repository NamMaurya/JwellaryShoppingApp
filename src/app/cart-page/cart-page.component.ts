import { Component , OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { JewellService } from '../services/jewells/jewell.service';
import { cart } from '../shared/models/cart';
import { cartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  c!: cart;


  constructor(private cs : CartService, private js:JewellService){
    // let j = js.getAll();
    // cs.addToCart(j[1]);
    // cs.addToCart(j[2]);
    // cs.addToCart(j[3]);

    this.setCart();

  }

  ngOnInit(): void {
    
  }

  setCart(){
    this.c=this.cs.getCart();
  }

  removeFromCart(ci:cartItem){
    this.cs.removeFromCart(ci.jewell.id);
    this.setCart();
  }

  changeQuantity(ci:cartItem, quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cs.changeQuantity(ci.jewell.id, quantity);
    this.setCart();
  }

}
