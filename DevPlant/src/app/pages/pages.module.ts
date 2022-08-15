import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';



@NgModule({
  declarations: [
    HomeComponent,
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ],
  exports: [
    HomeComponent,
    ECommerceComponent
  ]
})
export class PagesModule { }
