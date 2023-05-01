import { Injectable } from '@angular/core';
import { TPrice } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  currency: TPrice = 'eur';
  dateFormat = 'MM/dd/yyyy';
  isOneWay = false;
  startDate = new Date('2023-05-23');
  endDate = new Date('2023-05-28');
  origin = 'MOW';
  destination = 'LED';
  passengers = 1;
  originName = '';
  destinationName = '';
  passengersCategories = {
    Adults: 0,
    Child: 0,
    Infant: 0,
  };
}
