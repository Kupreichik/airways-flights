import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  currency = 'eur';
  startDate = new Date('2023-05-23');
  // endDate = new Date(new Date().setDate(new Date().getDate() + 10));
  endDate = new Date('2023-05-28');
  origin = 'MOW';
  destination = 'LED';
  passengers = 1;
}
