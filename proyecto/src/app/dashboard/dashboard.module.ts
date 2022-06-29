import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PruebaComponent } from './components/prueba/prueba.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PruebaComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PruebaComponent

  ]
})
export class DashboardModule { }
