import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currencies = ['EUR', 'USA', 'RUB', 'PLS'];
  dateFormats = ['MM/dd/yyyy', 'dd/MM/yyyy', 'yyyy/dd/MM', 'yyyy/MM/dd'];

  currency = this.currencies[2];
  dateFormat = this.dateFormats[1];
}
