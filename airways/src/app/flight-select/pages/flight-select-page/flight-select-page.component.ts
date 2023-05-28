import { Component, OnInit } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { StepperService } from 'src/app/core/services/stepper.service';
import { FlightSelectService } from '../../services/flight-select.service';

@Component({
  selector: 'app-flight-select-page',
  templateUrl: './flight-select-page.component.html',
  styleUrls: ['./flight-select-page.component.scss'],
})
export class FlightSelectPageComponent implements OnInit {
  isEditSettings = false;

  isValid = false;

  constructor(
    public searchDataService: SearchDataService,
    private flightSelectService: FlightSelectService,
    private stepperService: StepperService,
  ) {}

  ngOnInit() {
    this.flightSelectService.isValid$.subscribe((value) => {
      this.isValid = value;
    });

    this.stepperService.setStepIndex(0);
  }

  handleEditSettings(value: boolean) {
    this.isEditSettings = value;
  }
}
