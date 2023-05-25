import { Component, Input } from '@angular/core';
import { PassengersList } from '../../services/passengers.service';

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.scss'],
})
export class SummaryItemComponent {
  @Input() peopleItem!: PassengersList;
}
