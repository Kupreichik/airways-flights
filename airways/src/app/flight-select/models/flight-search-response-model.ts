import { TPrice } from 'src/app/core/models';

export interface Airport {
  key: string;
  country: string;
  city: string;
  name: string;
}

export interface Price {
  eur: number;
  usd: number;
  rub: number;
  pln: number;
}

export interface FlightItem {
  seats: Seats;
  flightNumber: string;
  timeMins: number;
  form: Airport;
  to: Airport;
  takeoffDate: string;
  landingDate: string;
  price: PriceTest;
  otherFlights: OtherFlights;
}

export type OtherFlights = {
  [key in '1' | '2' | '3' | '4' | '5' | '-5' | '-4' | '-3' | '-2' | '-1']?: FlightItem;
};

type PriceTest = {
  [key in TPrice]: number;
};

export interface Seats {
  total: number;
  avaible: number;
}
