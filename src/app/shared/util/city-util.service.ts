import { Injectable } from '@angular/core';

@Injectable()
export class CityUtilService {

  sliceCityName(cityDetails: string): string {
    let index = cityDetails.indexOf(',');
    return cityDetails.slice(0, index);
  }

}