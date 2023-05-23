import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.scss'],
})
export class FlightSelectComponent {
  @Input() isReturnFlight = false;
  isFlightSelected = false;

  handleSelectEvent() {
    this.isFlightSelected = !this.isFlightSelected;
  }
}
