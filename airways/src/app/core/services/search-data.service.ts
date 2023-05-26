import { Injectable } from '@angular/core';
import { TPrice } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  currency: TPrice = 'eur';
  dateFormat = 'MM/dd/yyyy';
  isOneWay = false;
  startDate = new Date();
  endDate = new Date(new Date().setDate(new Date().getDate() + 7));
  origin = '';
  destination = '';
  passengers = 1;
  originName = '';
  destinationName = '';
  passengersCategories = {
    Adults: 1,
    Child: 0,
    Infant: 0,
  };
}
