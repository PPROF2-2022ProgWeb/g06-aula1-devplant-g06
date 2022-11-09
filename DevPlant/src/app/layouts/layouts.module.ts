import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { GaleryComponent } from './components/galery/galery.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContentComponent,
    GaleryComponent,

  ],
  imports: [
    CommonModule,
    //Se importa el approutingmodule asi funciona en layouts module
    RouterModule,

  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    GaleryComponent
  ]
})
export class LayoutsModule { }
