import { Component, Input } from '@angular/core';
import { Temperature } from '@app/shared/classes/weather';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  @Input() temperature: Temperature;
  @Input() isVisible : boolean;

}
