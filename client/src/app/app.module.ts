import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomiseformComponent } from './components/customiseform/customiseform.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BouquetService } from './bouquet.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PreviewbouquetComponent } from './components/previewbouquet/previewbouquet.component';
import { DeliverydetailsComponent } from './components/deliverydetails/deliverydetails.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartStore } from './cart.store';
import { AuthService } from './services/auth.service';
import { UserStorage } from './user.storage';
import { CustnavbarComponent } from './components/custnavbar/custnavbar.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';

const appRoutes: Routes = [
  {path:'', component:LandingpageComponent},
  {path:'customise', component:CustomiseformComponent},
  {path:'bouquets', component:ProductsComponent},
  {path:'signin', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'preview', component: PreviewbouquetComponent},
  {path:'add-details', component: DeliverydetailsComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    CustomiseformComponent,
    ProductsComponent,
    NavbarComponent,
    PreviewbouquetComponent,
    DeliverydetailsComponent,
    LoginComponent,
    RegisterComponent,
    CustnavbarComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [BouquetService, CartStore, AuthService, UserStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
