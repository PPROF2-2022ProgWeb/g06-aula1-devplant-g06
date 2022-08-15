import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ProductsComponent } from './eCommerce/products/products.component';
import { ComponentsComponent } from './eCommerce/components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
