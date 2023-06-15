import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { arrProduct } from '../ProductList';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 nam:string =''
 quantity? : number|string
 price?:number
 img?:string
 id:any
 product:any

  constructor(private route:Router,private activRoute: ActivatedRoute) {
    this.id = this.activRoute.snapshot.paramMap.get('id')
    this.product = arrProduct.find(prod => prod.id==this.id );
  }
   ngOnInit(): void {
    console.log(this.id);
    console.log(this.product)
    if(this.product){
      this.nam=this.product.name;
      this.price=this.product.price;
      this.quantity=this.product.quantity;
      this.img=this.product.img;
    }

  }



}
