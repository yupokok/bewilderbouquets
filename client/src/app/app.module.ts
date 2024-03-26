import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomiseformComponent } from './components/customiseform/customiseform.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  {path:'', component:LandingpageComponent},
  {path:'customise', component:CustomiseformComponent},
  {path:'bouquets', component:ProductsComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    CustomiseformComponent,
    ProductsComponent,
    NavbarComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
