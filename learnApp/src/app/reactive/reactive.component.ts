import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent {
  productForm = new FormGroup({
    
    prodId: new FormControl(0,[
      Validators.required,
      Validators.min(1),
      Validators.max(1000)
    ]),

    brand: new  FormControl('',Validators.maxLength(20)),
    desc: new FormControl(''),
    qty: new FormControl(0),
    price: new FormControl(0)

  });

  onSubmit(){
    console.error(this.productForm);
    console.warn(this.productForm.value);
    console.log(this.productForm.controls['price'].value);
  }
}