import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from '../layouts/layouts.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { BlogComponent } from './components/blog/blog.component';
import { AccountComponent } from './components/account/account.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component'; //importamos para poder utilizar los formularios reactivos de angular
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { NormalComponent } from './components/normal/normal.component';
import { ListaProductoComponent } from './components/producto/lista-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto.component';






@NgModule({
  declarations: [
    ContactUsComponent,
    HomeComponent,
    AboutUsComponent,
    FaqsComponent,
    BlogComponent,
    AccountComponent,
    LogInComponent,
    CheckInComponent,
    AdminComponent,
    NormalComponent,
    ListaProductoComponent,
    CrearProductoComponent,




  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    LayoutsModule,
    ECommerceModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule,



    //Se importa el approutingmodule asi funciona en pages module
    RouterModule
  ],

  exports: [
    ContactUsComponent,
    AboutUsComponent,
    FaqsComponent,
    BlogComponent,
    AccountComponent,
    LogInComponent,
    CheckInComponent,
    AdminComponent,
    ListaProductoComponent




  ],
  providers: []
})
export class PagesModule { }
