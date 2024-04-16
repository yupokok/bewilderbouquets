import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustordersComponent } from './components/custorders/custorders.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { CartComponent } from '../components/cart/cart.component';

const appRoutes: Routes = [
  {path:'', component:LandingpageComponent},
  {path: 'customer/cart', component:CartComponent},

]

@NgModule({
  declarations: [
    CustordersComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(appRoutes)
  ]
})
export class CustomerModule { }
