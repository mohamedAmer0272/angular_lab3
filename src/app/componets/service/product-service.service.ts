import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl:string='http://localhost:3000/product'
  ProductId:number|any
  constructor(private httpClient:HttpClient) { }

  getProductsAll(){
    return this.httpClient.get(this.apiUrl);
  }
  getProductById(productid:number){
    return this.httpClient.get(`${this.apiUrl}/${productid}`);
  }
  addProduct(product:any){
    return this.httpClient.post(this.apiUrl,product);
  }
  editeProduct(productid:number,product:any){
    return this.httpClient.put(`${this.apiUrl}/${productid}`,product);
  }
  deleteProduct(productid:number){
    return this.httpClient.delete(`${this.apiUrl}/${productid}`);
  }

}
