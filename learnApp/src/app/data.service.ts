import { Injectable } from '@angular/core';
import { Product } from '../app/Product';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  //private products: Product[] = [];

  constructor(private http: HttpClient) {

    // this.products[0] = new Product(104,'Tata','Dishwasher',10,40000);
    // this.products[1] = new Product(105,'Samsung','Washing Machine',7,60000);
    // this.products[2] = new Product(106,'Tata','Car',3,600000);
    // this.products[3] = new Product(107,'Bosch','Dishwasher',5,54000);

  }

  // getProducts(){
  //   return this.products;
  // }

  fetchAllProducts(): Observable<any>{
    return this.http.get('http://localhost:9009/product/api/info');
  }

  addProduct(product: Product): Observable<any>{
    return this.http.post('http://localhost:9009/product/api/add',product);
  }

  updateProduct(product: Product): Observable<any>{
    return this.http.put('http://localhost:9009/product/api/modify',product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete('http://localhost:9009/product/api/delete/');
  }

}