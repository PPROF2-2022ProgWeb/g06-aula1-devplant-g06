/* MODULO DE COMPONENTES UTILIZABLES VARIAS VECES */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';






@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GaleriaComponent,
 

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GaleriaComponent


  ]
})
export class DashboardModule { }
