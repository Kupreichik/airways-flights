import { Component, Input, OnInit } from '@angular/core';
import { FlightSelectService } from '../../../services/flight-select.service';
import { getDatesArray } from '../../../utils/utils';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss'],
})
export class DateSelectComponent implements OnInit {
  dateForSearch = '2023-05-23';

  searchDates?: Date[];

  isTransformed = false;

  selectedCardIndex = 2;

  @Input() isReturnFlight = false;

  constructor(private flightSelectService: FlightSelectService) {}

  ngOnInit(): void {
    this.searchDates = getDatesArray(new Date(this.dateForSearch));
    this.flightSelectService.getListData(this.searchDates);
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
