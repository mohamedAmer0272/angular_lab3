import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { arrProduct } from '../ProductList';
import { ProductService } from '../service/product-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 id:any
 product:any

  constructor(private route:Router,private activRoute: ActivatedRoute,private productService:ProductService) {
  }
   ngOnInit(): void {
    this.id = this.activRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe({
      next:(Response)=>{
        this.product=Response
      },
      error:(Error)=>{
        console.log(Error)
      }
    })

  }



}
