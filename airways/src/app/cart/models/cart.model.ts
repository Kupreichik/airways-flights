import { Price } from 'src/app/flight-select/models/flight-search-response-model';

export interface CartData {
  number: string[];
  flight: string[];
  type: string;
  date: string[][];
  price: Price;
  passengers: string[];
}
