import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
