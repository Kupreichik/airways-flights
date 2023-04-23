import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-select',
  templateUrl: './ticket-select.component.html',
  styleUrls: ['./ticket-select.component.scss'],
})
export class TicketSelectComponent {
  isTransformed = false;

  selectedCardIndex = 2;

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
