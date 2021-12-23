import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

    { path: '', component:LoginComponent},
    { path: 'login', component:LoginComponent},

    { path: 'signin',component:SignupComponent},
    { path: 'dashboard',component:EmployeedashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
