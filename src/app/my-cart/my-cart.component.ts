import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../DAL/productservice.service'

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(private cart: ProductserviceService) { }
  myCart:any
  total=1;
  ngOnInit() {
    this.myCart = this.cart.getItem();
    console.log(this.myCart)
    for(var i=0; i<this.myCart.length; i++){
      this.total += this.myCart[i].total;
    }
    console.log(this.total)
  }

}
