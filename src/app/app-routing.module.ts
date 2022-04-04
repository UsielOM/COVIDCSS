import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RegisterComponent } from './components/HomePage/register/register.component';
import { UserpageComponent } from './Pages/userpage/userpage.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'registro', component:RegisterPageComponent},
  {path:'formR', component: RegisterComponent},
  {path:'user', component: UserpageComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
