import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpService } from './shared/services/http.service';
import { CityUtilService} from './shared/util/city-util.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LogoComponent } from './components/logo/logo.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { WeekComponent } from './components/week/week.component';
import { SearchInputComponent } from './containers/search-input/search-input.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { IconComponent } from './components/icon/icon.component';
import { SunInfoComponent } from './components/sun-info/sun-info.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { FocusDirective } from './directives/focus.directive';
import { DayComponent } from './components/day/day.component';
import { BackgroundDirective } from './directives/background.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LogoComponent,
    WeatherComponent,
    WeekComponent,
    SearchInputComponent,
    AutoCompleteComponent,
    IconComponent,
    SunInfoComponent,
    TemperatureComponent,
    WeatherInfoComponent,
    FocusDirective,
    DayComponent,
    BackgroundDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService,
    CityUtilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
