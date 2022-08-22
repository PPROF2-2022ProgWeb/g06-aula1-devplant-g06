import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/components/contact-us/contact-us.component';
import { HomeComponent } from './pages/components/home/home.component';
import { TiendaComponent } from './e-commerce/tienda/tienda.component';
import { CartComponent } from './e-commerce/cart/cart.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'cart', component: CartComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
