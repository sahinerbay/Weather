
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';

const appRoutes: Routes = [
  { path: 'weather', component: WeatherComponent }, //remember path cannot start with a slash!
  { path: '', component: HomeComponent }, //remember path cannot start with a slash!
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
