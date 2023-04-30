import { Component, Input, OnInit } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { FlightSelectService } from '../../../services/flight-select.service';
import { getDatesArray } from '../../../utils/utils';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss'],
})
export class DateSelectComponent implements OnInit {
  searchDates?: Date[];

  isTransformed = false;

  selectedCardIndex = 2;

  @Input() isReturnFlight = false;

  constructor(
    private flightSelectService: FlightSelectService,
    public searchDataService: SearchDataService,
  ) {}

  ngOnInit(): void {
    this.searchDates = getDatesArray(new Date(this.searchDataService.startDate));
    this.flightSelectService.getListData(this.searchDates, 'MOW', 'LED', 'eur');
    // this.flightSelectService.getListData(
    //   this.searchDates,
    //   this.searchDataService.origin,
    //   this.searchDataService.destination,
    //   this.searchDataService.currency,
    // );
  }

  getPriceById(id: number) {
    const price =
      this.flightSelectService.itemsResponse &&
      this.flightSelectService.itemsResponse[id].data[0].price;
    const currency =
      this.flightSelectService.itemsResponse &&
      this.flightSelectService.itemsResponse[id].currency.toLocaleUpperCase();
    return { price, currency };
  }

  handleSelectCard(id: number) {
    this.selectedCardIndex = id;
    this.flightSelectService.changeSelectedCardId(id);
  }

  handlePrev() {
    this.isTransformed = false;
  }

  handleNext() {
    this.isTransformed = true;
  }

  checkCardSelected(cardId: number): boolean {
    return cardId === this.selectedCardIndex;
  }
}
