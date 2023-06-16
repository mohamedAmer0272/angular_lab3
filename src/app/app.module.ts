import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { ProductComponent } from './componets/product/product.component';
import { NavComponent } from './componets/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './componets/add-product/add-product.component';
import { ProductDetailsComponent } from './componets/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    NavComponent,
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
