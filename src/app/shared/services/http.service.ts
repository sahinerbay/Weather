import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment.prod';
import { Weather } from '@app/shared/classes/weather';
import { AutoComplete } from '@app/shared/models/auto-complete';
import { Icons } from '@app/shared/models/Icons';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getWeatherForecast(cityName: string): Observable<Weather> {
    return this.http.get(`${environment.weatherURI}${cityName}&days=7`)
      .map((item: Weather) => new Weather(item.current, item.forecast, item.location))
  }

  getCityAutoComplete(key: string): Observable<AutoComplete[]> {
    return this.http.get<AutoComplete[]>(environment.geoURI + key)
  }

  getIcons(): Observable<Icons[]> {
    return this.http.get<Icons[]>(environment.iconUri);
  }
}
