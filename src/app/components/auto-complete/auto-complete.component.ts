import { Component, Input } from '@angular/core';
import { AutoComplete } from '@app/shared/models/auto-complete';
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {

  @Input() city: AutoComplete;

}
