import { Component, Input } from '@angular/core';
import { FlightInfo } from '../../../models/mock-data.model';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
})
export class FlightInfoComponent {
  @Input() flightData?: FlightInfo;
}
