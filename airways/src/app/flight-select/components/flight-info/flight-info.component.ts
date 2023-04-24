import { Component } from '@angular/core';
import { FlightInfo } from '../../models/mock-data.model';

const mockFlightData: FlightInfo = {
  flightNumber: 'FR 1925',
  fligthType: 'direct',
  direction: 'forward',
  duration: '2h 50m',
  seats: 100,
  price: 146.7,
  departure: '2023-02-20T10:49:47.769Z',
  arrival: '2023-04-24T16:48:08.082Z',
  city: 'Dublin',
  timeZone: 'UTC +0',
};

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
})
export class FlightInfoComponent {
  fligthData = mockFlightData;
}
