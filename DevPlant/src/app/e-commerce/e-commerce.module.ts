import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart/cart.component';
import { TiendaComponent } from './tienda/tienda.component';



@NgModule({
  declarations: [
    CartComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    TiendaComponent
    
  ]
})
export class ECommerceModule { }
