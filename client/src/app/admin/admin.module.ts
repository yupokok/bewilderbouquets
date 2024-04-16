import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminanalyticsComponent } from './components/adminanalytics/adminanalytics.component';
import { AdminordersComponent } from './components/adminorders/adminorders.component';
import { AdminproductsComponent } from './components/adminproducts/adminproducts.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { CreatebouquetComponent } from './components/createbouquet/createbouquet.component';


const appRoutes: Routes = [
  {path:'', component:LandingpageComponent},
]

@NgModule({
  declarations: [
    AdminanalyticsComponent,
    AdminordersComponent,
    AdminproductsComponent,
    CreatebouquetComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(appRoutes)
  ]
})
export class AdminModule { }
