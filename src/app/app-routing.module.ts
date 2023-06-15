import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { ProductComponent } from './componets/product/product.component';
import { LoginComponent } from './componets/login/login.component';
import { AddProductComponent } from './componets/add-product/add-product.component';
import { ProductDetailsComponent } from './componets/product-details/product-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'login', component:LoginComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'product/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
