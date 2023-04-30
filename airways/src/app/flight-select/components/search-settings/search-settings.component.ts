import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent {
  constructor(public searchDataService: SearchDataService) {}
}
