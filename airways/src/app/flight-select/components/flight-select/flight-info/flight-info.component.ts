import { Component, Input, OnInit } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { FlightSelectService } from '../../../services/flight-select.service';
import { FlightItem } from '../../../models/flight-search-response-model';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
})
export class FlightInfoComponent implements OnInit {
  @Input() isReturnFlight = false;

  flightSelectedData2?: FlightItem;

  constructor(
    private flightSelectService: FlightSelectService,
    public searchDataService: SearchDataService,
  ) {}

  ngOnInit(): void {
    if (this.isReturnFlight) {
      this.flightSelectService.selectedReturnCardId$.subscribe((id) => {
        this.flightSelectedData2 =
          this.flightSelectService.itemsResponseReturn &&
          this.flightSelectService.itemsResponseReturn[id][0];
        console.log('flight-info, selectedData2-->', this.flightSelectedData2);
      });
    } else {
      this.flightSelectService.selectedCardId$.subscribe((id) => {
        this.flightSelectedData2 =
          this.flightSelectService.itemsResponse && this.flightSelectService.itemsResponse[id][0];
        console.log('flight-info, selectedData2-->', this.flightSelectedData2);
      });
    }
  }
}
