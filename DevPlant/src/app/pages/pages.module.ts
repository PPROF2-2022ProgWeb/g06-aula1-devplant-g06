import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsModule } from '../layouts/layouts.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { TiendaComponent } from '../e-commerce/tienda/tienda.component';
import { CartComponent } from '../e-commerce/cart/cart.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    HomeComponent,
    TiendaComponent,
    CartComponent

  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    LayoutsModule,
    

    //Se importa el approutingmodule asi funciona en pages module
    RouterModule
  ],

  exports: [
    ContactUsComponent,



  ]
})
export class PagesModule { }
