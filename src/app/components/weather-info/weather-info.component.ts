import { Component, Input } from '@angular/core';
import { WeatherInfo } from '@app/shared/classes/weather';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent  {

  @Input() weatherInfo : WeatherInfo;

}
