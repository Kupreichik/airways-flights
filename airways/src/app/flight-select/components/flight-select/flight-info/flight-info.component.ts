import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { FlightItem } from '../../../models/flight-search-response-model';
import { FlightSelectService } from '../../../services/flight-select.service';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss'],
})
export class FlightInfoComponent implements OnInit {
  @Input() isReturnFlight = false;
  @Output() handleSelectBtnEvent = new EventEmitter<boolean>();

  flightSelectedData?: FlightItem;
  isFlightSelected = false;

  constructor(
    private flightSelectService: FlightSelectService,
    public searchDataService: SearchDataService,
  ) {}

  ngOnInit(): void {
    if (this.isReturnFlight) {
      this.flightSelectService.selectedReturnCardId$.subscribe((id) => {
        this.flightSelectedData = this.flightSelectService.getDataById(
          id.toString(),
          this.isReturnFlight,
        );
      });
    } else {
      this.flightSelectService.selectedCardId$.subscribe((id) => {
        this.flightSelectedData = this.flightSelectService.getDataById(
          id.toString(),
          this.isReturnFlight,
        );
      });
    }
  }

  handleSelectBtn() {
    this.isFlightSelected = !this.isFlightSelected;
    this.handleSelectBtnEvent.emit(this.isFlightSelected);
  }
}
