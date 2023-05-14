import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  cardItems = [
    {
      flightNumber: 'OX-8973',
      path: 'Aachen — Abakan',
      date: 'Wednesday, 24 May, 2023',
      time: '8:40 — 12:00',
    },
    {
      flightNumber: 'FR 1925',
      path: 'Abakan — Aachen',
      date: 'Wednesday, 25 May, 2023',
      time: '8:40 — 12:00',
    },
  ];

  peopleItems = [
    {
      passenger: 'adult',
      title: 'Harry Potter',
      checkedBag: '1 checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      seat: '10C',
      fare: 166,
      tax: 91.31,
    },
    {
      passenger: 'children',
      title: 'Lili Potter',
      checkedBag: '1 checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      seat: '11C',
      fare: 106,
      tax: 90.08,
    },
    {
      passenger: 'infant',
      title: 'James Potter',
      checkedBag: '1 checked bag (total 23 kg) included',
      cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
      fare: 88,
      tax: 10,
    },
  ];

  getTotal(): number {
    return this.peopleItems.reduce((acc, item) => acc + item.fare + item.tax, 0);
  }
}
