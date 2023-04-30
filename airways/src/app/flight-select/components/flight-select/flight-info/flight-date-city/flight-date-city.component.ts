import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-date-city',
  templateUrl: './flight-date-city.component.html',
  styleUrls: ['./flight-date-city.component.scss'],
})
export class FlightDateCityComponent {
  @Input() isDepartureDate = false;

  @Input() flightDate?: string;
}
