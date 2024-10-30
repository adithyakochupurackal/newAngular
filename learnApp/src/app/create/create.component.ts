import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  product: Product = new Product(0,'','',0,0);

  onSubmit(){
    console.warn(this.product);
  }
}