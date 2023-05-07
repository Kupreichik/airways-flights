import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';

@Component({
  selector: 'app-flight-select-page',
  templateUrl: './flight-select-page.component.html',
  styleUrls: ['./flight-select-page.component.scss'],
})
export class FlightSelectPageComponent {
  constructor(public searchDataService: SearchDataService) {}

  isEditSettings = false;

  handleEditSettings(value: boolean) {
    this.isEditSettings = value;
  }
}
