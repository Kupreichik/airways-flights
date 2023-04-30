import { Component, Input, OnInit } from '@angular/core';
import { FlightSelectService } from '../../../services/flight-select.service';
import { FlightSearchResponse } from '../../../models/flight-search-response-model';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
})
export class FlightInfoComponent implements OnInit {
  @Input() isReturnFlight = false;
  @Input() flightSelectedData?: FlightSearchResponse;

  constructor(private flightSelectService: FlightSelectService) {}

  ngOnInit(): void {
    this.flightSelectService.selectedCardId$.subscribe((id) => {
      this.flightSelectedData =
        this.flightSelectService.itemsResponse && this.flightSelectService.itemsResponse[id];
      console.log('flight-info, selectedData-->', this.flightSelectedData);
    });
  }
}
