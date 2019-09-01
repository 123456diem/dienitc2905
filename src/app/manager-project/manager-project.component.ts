import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-project',
  templateUrl: './manager-project.component.html',
  styleUrls: ['./manager-project.component.css']
})
export class ManagerProjectComponent implements OnInit {

  constructor() { }

  listproduct=[
    {"productID":"pd100","productName":"Laptop","Price":30000,"productQuality":"3"},
    {"productID":"pd101","productName":"Mobile","Price":54000,"productQuality":"5"},
    {"productID":"pd102","productName":"Television","Price":22000,"productQuality":"6"},
    {"productID":"pd103","productName":"Headphone","Price":1300,"productQuality":"13"}
  ]
  TongTien(){
    let s=0;
    this.listproduct.forEach(function(item){
      s= s+ item.Price;
    })
    return s;
  }

  ngOnInit() {
  }

}
