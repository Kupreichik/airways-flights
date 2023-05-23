import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  displayedColumns2 = ['select', 'number', 'flight', 'type', 'date', 'passengers', 'price', 'dots'];

  cartData = [
    {
      number: ['FR 1925'],
      flight: ['Dublin — Warsaw', 'Modlin  — Dublin'],
      type: 'Round Trip',
      date: 'Date',
      passengers: ['1 x Adult', '1 x Child', '1 x Infant'],
      price: 123,
    },
    {
      number: ['FR 1925'],
      flight: ['Dublin — Warsaw', 'Modlin  — Dublin'],
      type: 'Round Trip',
      date: 'Date',
      passengers: ['1 x Adult', '1 x Child', '1 x Infant'],
      price: 123,
    },
  ];

  getTotalPrice() {
    return this.cartData.map((t) => t.price).reduce((acc, value) => acc + value, 0);
  }
}
