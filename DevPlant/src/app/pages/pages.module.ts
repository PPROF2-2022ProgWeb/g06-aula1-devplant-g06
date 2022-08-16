import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ],
  
  exports: [
    HomeComponent,
    ContactUsComponent
  ]
})
export class PagesModule { }
