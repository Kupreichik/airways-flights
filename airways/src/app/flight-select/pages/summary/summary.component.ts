import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  items = [
    { name: 'Товар 1', price: 100 },
    { name: 'Товар 2', price: 200 },
    { name: 'Товар 3', price: 150 },
  ];

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}
