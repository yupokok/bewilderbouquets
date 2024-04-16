import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminanalyticsComponent } from './components/adminanalytics/adminanalytics.component';
import { AdminordersComponent } from './components/adminorders/adminorders.component';
import { AdminproductsComponent } from './components/adminproducts/adminproducts.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { CreatebouquetComponent } from './components/createbouquet/createbouquet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminpreviewbouquetComponent } from './components/adminpreviewbouquet/adminpreviewbouquet.component';


const appRoutes: Routes = [
  {path:'', component:LandingpageComponent},
  {path:'admin/manage-products', component:AdminproductsComponent},

]

@NgModule({
  declarations: [
    AdminanalyticsComponent,
    AdminordersComponent,
    AdminproductsComponent,
    CreatebouquetComponent,
    AdminpreviewbouquetComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(appRoutes), ReactiveFormsModule, FormsModule
  ]
})
export class AdminModule { }
