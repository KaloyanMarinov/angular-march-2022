import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guards/login.guard';
import { NewThemeComponent } from './components/new-theme/new-theme.component';
import { ThemeDetailsComponent } from './components/theme-details/theme-details.component';
import { ThemesComponent } from './components/themes/themes.component';

const routes: Routes = [
  {
    path: 'themes',
    component: ThemesComponent
  },
  {
    path: 'themes/new',
    canActivate: [LoginGuard],
    component: NewThemeComponent
  },
  {
    path: 'themes/:themeId',
    component: ThemeDetailsComponent
  }
];

export const ThemesRoutingModule = RouterModule.forChild(routes);
