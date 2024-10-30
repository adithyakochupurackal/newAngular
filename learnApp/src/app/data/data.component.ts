import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit{

  productId : number = 1234;
  desc : String = "Smart Phone";
  brand: String = "iPhone";
  price: number = 100000;
  orderQty: number = 0;
  availableQty: number = 100;
  isAvailable: boolean = true;
  freeShipping: String = "green"

  productList : Product[] = [];

  constructor(private service: DataService){
  }

  // getProducts(){
  //   this.productList = this.service.getProducts();
  // }

  ngOnInit(): void{
    //this.getProducts();
  }
  
  Order() : boolean{

    if(this.orderQty <= this.availableQty){
      this.availableQty -= this.orderQty;
    } else{
      this.isAvailable = false;
    }

    if(this.availableQty == 0){
      this.isAvailable = false;
    }
    
    return this.isAvailable;
  }

}
