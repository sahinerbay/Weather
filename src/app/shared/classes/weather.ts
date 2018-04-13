export class Weather {
	constructor(public current: Current, public forecast: Forecast, public location: Location) { }

	getLocation(): string {
		return `${this.location.name}, ${this.location.country}`;
	}

	getTemperature(index: number): Temperature {
		return {
			'avgtemp_c': +(this.forecast.forecastday[index].day.avgtemp_c).toFixed(0),
			'maxtemp_c': +(this.forecast.forecastday[index].day.maxtemp_c).toFixed(0),
			'mintemp_c': +(this.forecast.forecastday[index].day.mintemp_c).toFixed(0),
			'feelslike_c': index == 0 ? +(this.current.feelslike_c).toFixed(0) : null
		}
	}

	getWeatherInfo(index: number): string {
		return index == 0 ? this.current.condition.text : this.forecast.forecastday[index].day.condition.text
	}

	getSunInfo(index: number): SunInfo {
		return {
			'sunrise': this.forecast.forecastday[index].astro.sunrise,
			'sunset': this.forecast.forecastday[index].astro.sunset,
		}
	}

	getIconURL(index: number): string {
		return index == 0 ? this.current.condition.icon : this.forecast.forecastday[index].day.condition.icon;
	}

	getDay(index: number): Date {
		let d = new Date(this.forecast.forecastday[index].date);
		return {
			day : index == 0 ? 'Today' : d.toDateString().split(' ').shift(),
			date : this.forecast.forecastday[index].date.slice(5).replace(/-/, '/')
		}
	}

	getConditionBackground(index: number): string {
		return this.forecast.forecastday[index].day.condition.text;
	}

}

export default interface Current {
	condition: Condition,
	feelslike_c: number,
	last_updated: string,
	temp_c: number
}

export interface Condition {
	code: number,
	icon: string,
	text: string
}

export interface Location {
	country: string,
	localtime: string,
	name: string,
	region: string,
}

export interface Forecast {
	forecastday: Array<ForecastDay>
}

export interface ForecastDay {
	astro: Astro,
	date: string,
	day: Day
}

interface Astro {
	sunrise: string,
	sunset: string
}

export interface Day {
	avgtemp_c: number,
	maxtemp_c: number,
	mintemp_c: number,
	condition?: Condition,
}

export interface Temperature {
	maxtemp_c?: number,
	mintemp_c?: number,
	avgtemp_c?: number,
	feelslike_c?: number
}

export interface SunInfo {
	sunrise: string,
	sunset: string,
}

export interface Date {
	day: string,
	date: string
}