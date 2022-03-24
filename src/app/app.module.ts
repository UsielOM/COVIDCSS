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
import { PruebasComponent } from './components/Pages/pruebas/pruebas.component';
import { ContainerComponent } from './components/PracticasB/container/container.component';
import { GridComponent } from './components/PracticasB/grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    InfoCovidComponent,
    LoginComponent,
    Login2Component,
    PruebasComponent,
    ContainerComponent,
    GridComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
