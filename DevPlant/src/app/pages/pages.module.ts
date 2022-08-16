import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';




@NgModule({
  declarations: [
    HomeComponent,
    ECommerceComponent,
    ContactUsComponent

  ],
  imports: [
    CommonModule,
    LayoutsModule
  ],
  exports: [
    HomeComponent,
    ECommerceComponent,
    ContactUsComponent
  ]
})
export class PagesModule { }
