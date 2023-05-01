import { Component, Input, OnInit } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { Price } from 'src/app/flight-select/models/flight-search-response-model';
import { FlightSelectService } from '../../../services/flight-select.service';
import { getDatesArray } from '../../../utils/utils';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss'],
})
export class DateSelectComponent implements OnInit {
  @Input() isReturnFlight = false;
  @Input() isFlightSelected = false;

  searchDates?: Date[];
  isTransformed = false;
  selectedCardIndex = 2;

  constructor(
    private flightSelectService: FlightSelectService,
    public searchDataService: SearchDataService,
  ) {}

  ngOnInit(): void {
    const dateForSearch = this.isReturnFlight
      ? this.searchDataService.endDate
      : this.searchDataService.startDate;

    this.searchDates = getDatesArray(new Date(dateForSearch));

    let [origin, destination] = [this.searchDataService.origin, this.searchDataService.destination];

    if (this.isReturnFlight) {
      [origin, destination] = [destination, origin];
    }

    this.flightSelectService.getListData(
      this.searchDates,
      origin,
      destination,
      this.isReturnFlight,
    );
  }

  getPriceByIdJeburin(id: number, currency: keyof Price) {
    let price;
    if (this.isReturnFlight) {
      price =
        this.flightSelectService.itemsResponseReturn &&
        this.flightSelectService.itemsResponseReturn[id][0].price[currency];
    } else {
      price =
        this.flightSelectService.itemsResponse &&
        this.flightSelectService.itemsResponse[id][0].price[currency];
    }
    return price;
  }

  handleSelectCard(id: number) {
    this.selectedCardIndex = id;
    this.flightSelectService.changeSelectedCardId(id, this.isReturnFlight);
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
