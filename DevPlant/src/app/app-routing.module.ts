import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/components/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/components/about-us/about-us.component';
import { HomeComponent } from './pages/components/home/home.component';
import { CartComponent } from './e-commerce/cart/cart.component';
import { ShopComponent } from './e-commerce/shop/shop.component';
import { FaqsComponent } from './pages/components/faqs/faqs.component';
import { BlogComponent } from './pages/components/blog/blog.component';
import { AccountComponent } from './pages/components/account/account.component';
import { LogInComponent } from './pages/components/log-in/log-in.component';
import { CheckInComponent } from './pages/components/check-in/check-in.component';
import { LogOutComponent } from './pages/components/log-out/log-out.component';
import { ResetPasswordComponent } from './pages/components/reset-password/reset-password.component';
import { AdminComponent } from './pages/components/admin/admin.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'account', component: AccountComponent},
  {path: 'LogIn', component:LogInComponent},
  {path: 'logOut', component:LogOutComponent},
  {path: 'CheckIn', component:CheckInComponent},
  {path: 'resetPassword', component:ResetPasswordComponent},
  {path: 'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
