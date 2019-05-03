import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { TestingComponent } from './Test1/testing/testing.component';

export const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent },
{ path: 'test', component: TestingComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{
  preloadingStrategy: PreloadAllModules,
})