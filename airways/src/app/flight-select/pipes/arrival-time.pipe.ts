import { Pipe, PipeTransform } from '@angular/core';
import { FlightSearchResponse } from '../models/flight-search-response-model';

@Pipe({
  name: 'arrivalTime',
})
export class ArrivalTimePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(flightSelectedData: FlightSearchResponse): string {
    if (flightSelectedData) {
      const inputDate = flightSelectedData?.data[0].departure_at;
      const timeZone = inputDate.slice(-6);
      const duration = flightSelectedData?.data[0].duration_to;

      const date = new Date(inputDate);

      const offsetSign = timeZone[0];
      const offsetHours = parseInt(timeZone.slice(1, 3), 10);
      const offsetMinutes = parseInt(timeZone.slice(-2), 10);
      const offsetMillisec =
        (offsetSign === '+' ? 1 : -1) * (offsetHours * 60 * 60 + offsetMinutes * 60) * 1000;

      const timestamp = date.getTime() + duration * 60 * 1000 + offsetMillisec;
      const arrivalDate = new Date(timestamp);

      return arrivalDate.toISOString().replace('.000Z', timeZone);
    }
    return '';
  }
}

// departure_at: '2023-05-11T03:00:00+03:00';
// duration: 90 min;
// calculate arrival: '2023-05-11T04:30:00.000Z'
