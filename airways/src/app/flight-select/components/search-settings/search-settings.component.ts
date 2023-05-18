import { Component, EventEmitter, Output } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent {
  // @Input() showEditButton = true;

  @Output() handleEditBtnEvent = new EventEmitter<boolean>();

  isEditBtn = false;

  constructor(public searchDataService: SearchDataService) {}

  handleEditBtn() {
    this.isEditBtn = !this.isEditBtn;
    this.handleEditBtnEvent.emit(this.isEditBtn);
  }
}
