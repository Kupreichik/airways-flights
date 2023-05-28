import { Component, Input } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';

@Component({
  selector: 'app-flight-date-city',
  templateUrl: './flight-date-city.component.html',
  styleUrls: ['./flight-date-city.component.scss'],
})
export class FlightDateCityComponent {
  @Input() isDepartureDate = false;

  @Input() flightDate?: string;

  @Input() city?: string;

  constructor(public searchDataService: SearchDataService) {}
}
