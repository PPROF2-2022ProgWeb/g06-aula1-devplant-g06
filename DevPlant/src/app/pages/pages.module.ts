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
import { LogOutComponent } from './components/log-out/log-out.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //importamos para poder utilizar los formularios reactivos de angular




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
    LogOutComponent,
    ResetPasswordComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    LayoutsModule,
    ECommerceModule,
    FormsModule,
    ReactiveFormsModule, 


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
    ResetPasswordComponent,
    LogOutComponent



  ],
})
export class PagesModule { }
