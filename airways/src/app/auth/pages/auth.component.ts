import { Component, EventEmitter, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  activeTab = 0;
  @Output() activeTabChange = new EventEmitter<number>();

  closeAuth() {}

  onTabChange(event: MatTabChangeEvent) {
    this.activeTab = event.index;
    this.activeTabChange.emit(this.activeTab);
  }
}
