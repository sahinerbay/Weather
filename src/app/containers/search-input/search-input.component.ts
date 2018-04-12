import { Component, Input } from '@angular/core';
import { HttpService } from '@app/shared/services/http.service';
import { CityUtilService } from '@app/shared/util/city-util.service';
import { Weather } from '@app/shared/classes/weather';
import { AutoComplete } from '@app/shared/models/auto-complete';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  constructor(
    private httpService: HttpService,
    private cityUtilService: CityUtilService,
    private router: Router,
  ) { }

  currentSearchTerm: string;
  cityList: Array<AutoComplete> | Array<string>;
  @Input() sTerm: string;

  getCurrentSearchTerm(term: string) {
    this.currentSearchTerm = term
    this.httpService.getCityAutoComplete(this.currentSearchTerm).subscribe((res: Array<AutoComplete>) => this.cityList = res.slice(0, 3));
  }

  onClickCitySearch(fullCityName: string) {
    this.currentSearchTerm = this.cityUtilService.sliceCityName(fullCityName);

    this.router.navigate(['/weather'], { queryParams: { query: this.currentSearchTerm } });
  }

}