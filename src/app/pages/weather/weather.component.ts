import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from '@app/shared/services/http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Weather } from '@app/shared/classes/weather';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { ToggleAnimation, SlideToggleAnimation } from '@app/animations/toggle.animation';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css'],
	animations: [ToggleAnimation, SlideToggleAnimation],
})
export class WeatherComponent implements OnInit {

	constructor(
		private httpService: HttpService,
		private router: Router,
		private activeRoute: ActivatedRoute,
	) { }

	searchTerm: string;
	weatherData: Weather;
	isButtonClicked: boolean = false;
	dayIndex: number = 0;

	get stateName() {
		return this.isButtonClicked ? 'show' : 'hide'
	}

	ngOnInit() {
		// this.activeRoute.queryParamMap
		//   .subscribe((params: ParamMap) => {
		//     this.searchTerm = params.get('query');
		//     this.httpService.getWeatherForecast(this.searchTerm).subscribe((res: Weather) => {

		//       this.weatherData = res;
		//       this.iconKey = res.current.condition.code;
		//       console.log(res);
		//       this.location = `${res.location.name}, ${res.location.country}`;

		//       this.minMaxTemp = {
		//         'avgtemp_c': res.forecast.forecastday[0].day.avgtemp_c,
		//         'maxtemp_c': res.forecast.forecastday[0].day.maxtemp_c
		//       }

		//       this.condition = this.cityUtilService.getCondition(this.weatherData);

		//       this.sunInfo = this.cityUtilService.getSunInfo(this.weatherData);
		//     });
		//   });

		this.activeRoute.queryParamMap
			.map((params: ParamMap) => params.get('query'))
			.flatMap((query: string) => this.httpService.getWeatherForecast(query))
			.subscribe((res: Weather) => {
				this.weatherData = res;
				this.searchTerm = this.weatherData.getLocation()
			})
	}

	onClickedShowMore(e: MouseEvent): void {
		e.preventDefault();
		this.isButtonClicked = !this.isButtonClicked;
	}

	onClickDay(e: MouseEvent): void {
		this.dayIndex = +(<HTMLInputElement>e.currentTarget).dataset.id
	}
}
