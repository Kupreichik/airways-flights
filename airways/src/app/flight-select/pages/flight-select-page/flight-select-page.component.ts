import { Component, Input } from '@angular/core';
import { FlightInfo } from '../../models/mock-data.model';

const mockFlightData: FlightInfo[] = [
  {
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
  },
  {
    flightNumber: 'FR 1925',
    fligthType: 'direct',
    direction: 'backward',
    duration: '5h 50m',
    seats: 20,
    price: 333,
    departure: '2023-04-20T15:49:47.769Z',
    arrival: '2023-05-24T10:48:08.082Z',
    city: 'Dublin123',
    timeZone: 'UTC +0',
  },
];

@Component({
  selector: 'app-flight-select-page',
  templateUrl: './flight-select-page.component.html',
  styleUrls: ['./flight-select-page.component.scss'],
})
export class FlightSelectPageComponent {
  @Input() testData = mockFlightData;
}
