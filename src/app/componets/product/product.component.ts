import { Component } from '@angular/core';
import { arrProduct } from '../ProductList';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   productList:any[]=arrProduct
   
}
