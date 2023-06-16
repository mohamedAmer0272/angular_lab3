import { Component, OnInit } from '@angular/core';
import { arrProduct } from '../ProductList';
import { ProductService } from '../service/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: any = [];
  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.productService.getProductsAll().subscribe({
      next: (Response) => {
        this.productList = Response;
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }

  remove(id: number) {
    if (confirm('are you sure')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.productList = this.productList.filter((element: any) => {
          element.id != id;
        });
      });
    }
  }
}
