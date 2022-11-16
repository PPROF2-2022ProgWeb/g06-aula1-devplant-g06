import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';



@NgModule({
  declarations: [
    ShopComponent,
    CartComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [

  ]
})
export class ECommerceModule { }
