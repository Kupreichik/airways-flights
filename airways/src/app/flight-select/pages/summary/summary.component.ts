import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { Price } from '../../models/flight-search-response-model';
import { FlightSelectService } from '../../services/flight-select.service';
import { PassengersService } from '../../services/passengers.service';
import { sumPrices } from '../../utils/utils';

type PassengerGroup = {
  title: string;
  fare?: Price;
  tax?: Price;
  count: number;
};

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
      existingPassenger.fare = sumPrices(existingPassenger.fare, el.fare);
      existingPassenger.tax = sumPrices(existingPassenger.tax, el.tax);
      existingPassenger.count += 1;
    } else {
      const newPassenger: PassengerGroup = {
        title: el.title,
        count: 1,
        fare: el.fare,
        tax: el.tax,
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

  getTotal() {
    return this.peopleItems.reduce(
      (acc, item) =>
        item.fare && item.tax
          ? acc +
            item.fare[this.searchDataService.currency] +
            item.tax[this.searchDataService.currency]
          : acc,
      0,
    );
  }
}
