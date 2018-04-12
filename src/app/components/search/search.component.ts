import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() searchTerm: string;

  @Output() onClickCity: EventEmitter<string> = new EventEmitter<string>();
  @Input() cities: Array<string>;

  visible: boolean = false;
  searchTerm$ = new Subject<string>();

  constructor() {
    this.searchTermChange = <any>this.searchTerm$.asObservable()
      .debounceTime(200)
      .distinctUntilChanged();
  }

  onKeyupFindCity(currentSearchQuery: string) {
    this.visible = !currentSearchQuery ? false : true;
    if (!currentSearchQuery) return;
    this.searchTerm$.next(currentSearchQuery);
  }

  onClickCitySearch(e) {
    this.visible = false;
    this.onClickCity.emit(e.target.textContent);
  }

}