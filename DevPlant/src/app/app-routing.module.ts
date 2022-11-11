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
import { ResetPasswordComponent } from './pages/components/reset-password/reset-password.component';
import { AdminComponent } from './pages/components/admin/admin.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact-us', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'shop', component: ShopComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'faqs', component: FaqsComponent, pathMatch: 'full' },
  { path: 'blog', component: BlogComponent, pathMatch: 'full' },
  { path: 'account', component: AccountComponent, pathMatch: 'full' },
  { path: 'LogIn', component: LogInComponent, pathMatch: 'full' },
  { path: 'CheckIn', component: CheckInComponent, pathMatch: 'full' },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
