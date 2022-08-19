import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent        
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    ECommerceModule,
    AppRoutingModule
  ],
  
  exports: [
    HomeComponent,
    ContactUsComponent
  ]
})
export class PagesModule { }
