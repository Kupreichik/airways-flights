import { Component, Input } from '@angular/core';
import { FlightItem } from '../../models/flight-search-response-model';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss'],
})
export class SummaryCardComponent {
  @Input() cardItem?: FlightItem;
  @Input() peopleItems: any;
}
