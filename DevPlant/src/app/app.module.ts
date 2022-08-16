import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { CartComponent } from './e-commerce/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ECommerceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
