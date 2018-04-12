export class Weather {
    constructor(public current: Current, public forecast: Forecast, public location: Location) { }

    getLocation(): string {
        return `${this.location.name}, ${this.location.country}`;
    }

    getTemperature(index: number): Temperature {
        return {
            'avgtemp_c': this.forecast.forecastday[index].day.avgtemp_c,
            'maxtemp_c': this.forecast.forecastday[index].day.maxtemp_c,
            'mintemp_c': this.forecast.forecastday[index].day.maxtemp_c,
            'feelslike_c': index == 0 ? this.current.feelslike_c : null
        }
    }

    getWeatherInfo(index: number): WeatherInfo {
        return {
            'current': index == 0 ? this.current.condition.text : '',
            'future': this.forecast.forecastday[index].day.condition.text
        }
    }

    getSunInfo(index: number): SunInfo {
        return {
            'sunrise': this.forecast.forecastday[index].astro.sunrise,
            'sunset': this.forecast.forecastday[index].astro.sunset,
        }
    }

    getIconKey(index: number): number {
        return this.forecast.forecastday[index].day.condition.code;
    }

    getDay(index: number): string {
        let d = new Date(this.forecast.forecastday[index].date);
        return d.toDateString().split(' ').shift();
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
    maxtemp_c: number
    condition?: Condition,
    uv?: number
}

export interface Temperature {
    maxtemp_c?: number,
    mintemp_c?: number,
    avgtemp_c?: number,
    feelslike_c?: number
}

export interface WeatherInfo {
    current: string,
    future: string
}

export interface SunInfo {
    sunrise: string,
    sunset: string,
}