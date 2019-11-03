import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  item= [];
  addToCart(product){
    this.item.push(product)
  }

  getItem(){
    return this.item;
  }
  clearCart(){
    this.item = [];
    return this.item;
  }

  constructor() { }
  
}

