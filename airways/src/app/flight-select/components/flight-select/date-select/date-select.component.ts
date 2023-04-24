import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss'],
})
export class DateSelectComponent {
  isTransformed = false;

  selectedCardIndex = 2;

  @Input() isReturnFlight = false;

  handleSelectCard(id: number) {
    this.selectedCardIndex = id;
  }

  handlePrev() {
    this.isTransformed = false;
  }

  handleNext() {
    this.isTransformed = true;
  }
}
