import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.city)
  }
  @Input() city: string;

}
