import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../DAL/productservice.service'
@Component({
  selector: 'app-checkou',
  templateUrl: './checkou.component.html',
  styleUrls: ['./checkou.component.css']
})
export class CheckouComponent implements OnInit {

  constructor(private cart :  ProductserviceService) { }
  myCart : any;
  showOrder : boolean = false;
  address:any;
  cardNumber : any;
  tax = 80.25;
  ship = 10;
  subTotal = 1;
  ngOnInit() {
    this.myCart = this.cart.getItem()
    for(var i=0; i<this.myCart.length; i++){
      this.subTotal += this.myCart[i].total;
    }
  }
  buttonShowOrder(){
    this.showOrder = true;
  }
  getTotal(){
    return this.subTotal + this.tax + this.ship;
  }
}
