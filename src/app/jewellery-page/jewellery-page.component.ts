import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { JewellService } from '../services/jewells/jewell.service';
import { Jewells } from '../shared/models/jewells';

@Component({
  selector: 'app-jewellery-page',
  templateUrl: './jewellery-page.component.html',
  styleUrls: ['./jewellery-page.component.css']
})
export class JewelleryPageComponent implements OnInit {

  j !: Jewells;

  constructor(private ar: ActivatedRoute, private js: JewellService, private cs: CartService, private r: Router) {
    ar.params.subscribe((params) => {
      if (params['id'])
        this.j = js.getJewellById(params['id']);
    })
  }

  addToCart() {
    this.cs.addToCart(this.j);
    this.r.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
  }

}
