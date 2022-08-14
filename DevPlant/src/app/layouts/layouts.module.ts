import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { GaleryComponent } from './components/galery/galery.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContentComponent,
    GaleryComponent
  ],
  imports: [
    CommonModule
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
