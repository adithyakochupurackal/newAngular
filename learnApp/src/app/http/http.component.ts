import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent implements OnInit{

  products1: Product[] = [];
  products2: Product[] = [];
  product: Product = new Product(101,"Phone","Samsung",10,1500000);

  constructor(private service: DataService){

  }

  ngOnInit(): void {
    this.fetch();
    this.addProduct();
    this.updateProd();
    this.deleteProd();
  }

  fetch() {
    this.service.fetchAllProducts().subscribe(
      (data) => {
        this.products1 = data;
      }
    );
  }

  addProduct() {
    this.service.addProduct(this.product).subscribe(
      { next: (data) => {this.product},
        error: (err) => {console.error(err.error.error)}
      }
    );
  }

  updateProd(){
    this.service.updateProduct({"prodId":104,"desc":"Laptop","brand":"Dell",qty:5,price:100})
  }

  deleteProd(){
    this.service.deleteProduct(0);
  }
}