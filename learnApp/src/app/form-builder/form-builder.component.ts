import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../Product';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})

export class FormBuilderComponent {

  constructor(private formBuilder: FormBuilder){}

  productForm = this.formBuilder.group({
    prodId: [ 0, [Validators.required,  Validators.minLength(3)] ],
    brand: [' '],
    desc: this.formBuilder.group({
      age: [0],
      seasons: [' ']
    }),
    qty: [0],
    price: [0],
    suppliers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  })

  onSubmit(){

    console.log(this.productForm);
    console.log(this.productForm.value);
    console.log(this.productForm.controls['prodId'].value);

    console.log(
      this.productForm.controls['desc'].controls['age'].value
    );

    console.log(this.productForm.controls['suppliers'].controls[0].value);

  }

  get suppliers(){
    return  this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier(){
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }

}
