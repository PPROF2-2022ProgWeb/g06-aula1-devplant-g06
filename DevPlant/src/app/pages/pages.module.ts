import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from '../layouts/layouts.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactUsComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    LayoutsModule,
    ECommerceModule,
    

    //Se importa el approutingmodule asi funciona en pages module
    RouterModule
  ],

  exports: [
    ContactUsComponent,
   


  ],
})
export class PagesModule { }
