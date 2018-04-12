import { Component, Input } from '@angular/core';
import { SunInfo} from '@app/shared/classes/weather';

@Component({
  selector: 'app-sun-info',
  templateUrl: './sun-info.component.html',
  styleUrls: ['./sun-info.component.css']
})
export class SunInfoComponent {

  @Input() sunInfo: SunInfo;

}
