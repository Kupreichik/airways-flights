import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { FlightSelectService } from '../../services/flight-select.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  cardItems = this.flightSelectService.getSelectedCardsData(this.searchDataService.isOneWay);

  peopleItems = [
    {
      passenger: 'adult',
      title: 'Harry Potter',
      checkedBag: '1 checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      seat: '10C',
      fare: 166,
      tax: 91.31,
    },
    {
      passenger: 'children',
      title: 'Lili Potter',
      checkedBag: '1 checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      seat: '11C',
      fare: 106,
      tax: 90.08,
    },
    {
      passenger: 'infant',
      title: 'James Potter',
      checkedBag: '1 checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      fare: 88,
      tax: 10,
    },
  ];

  constructor(
    private flightSelectService: FlightSelectService,
    private searchDataService: SearchDataService,
  ) {}

  getTotal(): number {
    return this.peopleItems.reduce((acc, item) => acc + item.fare + item.tax, 0);
  }
}
