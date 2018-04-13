import { Component, Input } from '@angular/core';
import { ForecastDay } from '@app/shared/classes/weather';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {

  @Input() iconURL: string;
  @Input() day: string;

}
