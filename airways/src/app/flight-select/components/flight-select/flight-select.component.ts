import { Component, Input } from '@angular/core';
import { FlightSelectService } from '../../services/flight-select.service';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.scss'],
})
export class FlightSelectComponent {
  @Input() isReturnFlight = false;

  constructor(private flightService: FlightSelectService) {}
}
