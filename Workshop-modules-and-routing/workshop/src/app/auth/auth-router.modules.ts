import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NoLoginGuard } from './guards/no-login.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [NoLoginGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [NoLoginGuard],
    component: RegisterComponent
  },
  {
    path: 'profile',
    canActivate: [LoginGuard],
    component: ProfileComponent
  }
];

export const AuthRoutingModule = RouterModule.forRoot(routes);
