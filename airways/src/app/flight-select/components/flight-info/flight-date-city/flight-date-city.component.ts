import { Component, Input } from '@angular/core';
import { FlightInfo } from '../../../models/mock-data.model';

@Component({
  selector: 'app-flight-date-city',
  templateUrl: './flight-date-city.component.html',
  styleUrls: ['./flight-date-city.component.scss'],
})
export class FlightDateCityComponent {
  @Input() flightDetails?: FlightInfo;
  @Input() isDepartureDate = false;
}
