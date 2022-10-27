import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserDeletComponent } from './components/user-delet/user-delet.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeletComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
