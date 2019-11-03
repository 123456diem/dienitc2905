import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import {ProductserviceService} from '../DAL/productservice.service'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private rout: ActivatedRoute,private http: HttpClient, private cart: ProductserviceService) { }
  newApp:any;
  myCart:any;
  quantity = 1;
  newProducts: any;
  products:any;
  feature:any;
  id:any;
  yourPrice:any;
  url = './assets/db/guitar.json';
  discount = 0.3;
  yourTotal:any;
  saving: any;
  ngOnInit() {
    const url=this.rout.snapshot.paramMap.get('url');
    this.getProduct().subscribe(data=>{
      this.newProducts = data;
      this.products = this.newProducts.find(p => p.id === this.id);
      this.feature = this.products.newfeature;
    })
    this.rout.paramMap.subscribe(param =>{
      this.id = +param.get('id')
    });
    console.log(this.id)
    
    
    
    console.log(this.feature)
    
  };
  getProduct(){
    return this.http.get(this.url)
  }
  getYourPrice(){
    this.yourPrice  =  (this.products.price - this.products.price * this.discount);
    this.yourTotal = this.yourPrice * this.quantity
    return this.yourTotal
  }
  getSave(){
    this.saving = this.products.price * this.discount;
    return this.saving
  }

  addToCart(){
    this.newApp = Object.assign(this.products,({quantity: this.quantity,yourPrice :  this.yourPrice, total : this.yourTotal,saving : this.saving }))
    this.cart.addToCart(this.newApp);
  }
}
