import { Component, Input } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { Price } from 'src/app/flight-select/models/flight-search-response-model';
import { FlightSelectService } from '../../../services/flight-select.service';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss'],
})
export class DateSelectComponent {
  @Input() isReturnFlight = false;
  @Input() isFlightSelected = false;

  currentSliderPosition: '' | 'left' | 'right' = '';

  selectedCardIndex = 0;

  constructor(
    private flightSelectService: FlightSelectService,
    public searchDataService: SearchDataService,
  ) {}

  getPrice(id: string, currency: keyof Price) {
    return this.flightSelectService.getPriceById(id, currency, this.isReturnFlight);
  }

  getDate(id: string) {
    return this.flightSelectService.getDateById(id, this.isReturnFlight);
  }

  getSeats(id: string) {
    return this.flightSelectService.getSeatsById(id, this.isReturnFlight);
  }

  handleSelectCard(id: number) {
    this.selectedCardIndex = id;
    this.flightSelectService.changeSelectedCardId(id, this.isReturnFlight);
  }

  handleSliderPosition(direction: 'left' | 'right') {
    const oppositeDirection = direction === 'left' ? 'right' : 'left';
    switch (this.currentSliderPosition) {
      case '':
        this.currentSliderPosition = direction;
        break;
      case oppositeDirection:
        this.currentSliderPosition = '';
        break;
      default:
        break;
    }
  }

  checkCardSelected(cardId: number): boolean {
    return cardId === this.selectedCardIndex;
  }
}
