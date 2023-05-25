import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { FlightSelectService } from '../../services/flight-select.service';
import { PassengersService } from '../../services/passengers.service';

type PassengerGroup = { title: string; fare: number; tax: number; count: number };
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  cardItems = this.flightSelectService.getSelectedCardsData(this.searchDataService.isOneWay);

  peopleItems = this.passengersService.passengersList;

  peopleItemsGroup: PassengerGroup[] = this.peopleItems.reduce((acc, el) => {
    const existingPassenger = acc.find((p) => p.title === el.title);
    if (existingPassenger) {
      if (typeof el.fare === 'number') {
        existingPassenger.fare += el.fare;
      }
      if (typeof el.tax === 'number') {
        existingPassenger.tax += el.tax;
      }
      existingPassenger.count += 1;
    } else {
      const newPassenger: PassengerGroup = {
        title: el.title,
        fare: typeof el.fare === 'number' ? el.fare : 0,
        tax: typeof el.tax === 'number' ? el.tax : 0,
        count: 1,
      };
      acc.push(newPassenger);
    }
    return acc;
  }, [] as PassengerGroup[]);

  constructor(
    private flightSelectService: FlightSelectService,
    public searchDataService: SearchDataService,
    private passengersService: PassengersService,
  ) {}

  getTotal(): number {
    return this.peopleItems.reduce(
      (acc, item) => (item.fare && item.tax ? acc + item.fare + item.tax : acc),
      0,
    );
  }
}
