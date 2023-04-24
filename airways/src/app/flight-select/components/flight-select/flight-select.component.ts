import { Component, Input } from '@angular/core';
import { FlightInfo } from '../../models/mock-data.model';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.scss'],
})
export class FlightSelectComponent {
  @Input() flightData?: FlightInfo;
  @Input() isReturnFlight = false;
}
