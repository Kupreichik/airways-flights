import { Component } from '@angular/core';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent {
  startDate = new Date();
  endDate = new Date(new Date().setDate(new Date().getDate() + 17));
}
