import { Component, Input } from '@angular/core';
import { SearchDataService } from '../../../core/services/search-data.service';

@Component({
  selector: 'app-summary-total-item',
  templateUrl: './summary-total-item.component.html',
  styleUrls: ['./summary-total-item.component.scss'],
})
export class SummaryTotalItemComponent {
  @Input() peopleItem: any;

  constructor(public searchDataService: SearchDataService) {}
}
