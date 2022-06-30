import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './components/plants/plants.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [
    PlantsComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardModule

  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
