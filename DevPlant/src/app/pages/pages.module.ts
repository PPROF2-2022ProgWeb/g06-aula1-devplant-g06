import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
<<<<<<< HEAD

=======
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
>>>>>>> 06fd021fbeb173b881a655411006b37748893cc1




@NgModule({
  declarations: [
<<<<<<< HEAD
    HomeComponent
   
=======
    HomeComponent,
    ECommerceComponent,
    ContactUsComponent

>>>>>>> 06fd021fbeb173b881a655411006b37748893cc1
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ],
  
  exports: [
    HomeComponent,
<<<<<<< HEAD
    
=======
    ECommerceComponent,
    ContactUsComponent
>>>>>>> 06fd021fbeb173b881a655411006b37748893cc1
  ]
})
export class PagesModule { }
