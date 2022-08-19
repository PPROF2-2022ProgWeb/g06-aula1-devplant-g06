import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './e-commerce/tienda/tienda.component';
import { CartComponent } from './e-commerce/cart/cart.component';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'cart', component: CartComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
