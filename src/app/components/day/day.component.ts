import { Component, Input } from '@angular/core';
import { Date } from '@app/shared/classes/weather';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {

  @Input() day: Date

}
