import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../service/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  oldProduct: any;
  newProduct: any;
  id: any;
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id != 0) {
      this.productService.getProductById(this.id).subscribe({
        next: (Response) => {
          this.oldProduct = Response;
          console.log(this.oldProduct);
          if (this.oldProduct) {
            this.ProductNameControl.setValue(this.oldProduct.name);
            this.ProductPriceControl.setValue(this.oldProduct.price);
            this.ProductquantityControl.setValue(this.oldProduct.quantity);
          }
        },
        error: (Error) => {
          console.log('error');
        },
      });
    }
  }
  //end of on init
  productForm = new FormGroup({
    name: new FormControl(``, [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });

  get ProductNameControl() {
    return this.productForm.controls['name'];
  }
  get ProductPriceControl() {
    return this.productForm.controls['price'];
  }
  get ProductquantityControl() {
    return this.productForm.controls.quantity;
  }

  formSubmit() {
    this.newProduct = this.productForm.value;
    if (this.productForm.valid) {
      if (this.oldProduct) {
        this.productService.editeProduct(this.id, this.newProduct).subscribe({
          next: (Response) => {
            alert('updated');
            this.router.navigate(['/product']);
          },
        }); //end of edite
      } //end of if
      else {
        this.productService.addProduct(this.newProduct).subscribe({
          next: (Response) => {
            alert('added successfully');
            this.router.navigate(['/product']);
          },
        }); //end of add
      }
    }
  }
}
