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
  seats: {
    total: number;
    avaible: number;
  };
  flightNumber: string;
  timeMins: number;
  form: Airport;
  to: Airport;
  takeoffDate: string;
  landingDate: string;
  price: PriceTest;
}

type PriceTest = {
  [key in TPrice]: number;
};
