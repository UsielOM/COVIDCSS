import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InfoCovidComponent } from './components/HomePage/info-covid/info-covid.component';
import { LoginComponent } from './components/HomePage/login/login.component';
import { Login2Component } from './components/HomePage/login2/login2.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/HomePage/register/register.component';
import { UserpageComponent } from './Pages/userpage/userpage.component';
import { NavbaruserComponent } from './components/User/navbaruser/navbaruser.component';
import { NavbarsideComponent } from './components/User/navbarside/navbarside.component';
import { InfosideComponent } from './components/User/infoside/infoside.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    InfoCovidComponent,
    LoginComponent,
    Login2Component,
    RegisterPageComponent,
    MenuComponent,
    RegisterComponent,
    UserpageComponent,
    NavbaruserComponent,
    NavbarsideComponent,
    InfosideComponent,
 
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
