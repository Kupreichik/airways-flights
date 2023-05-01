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
  avaible: number;
  flightNumber: string;
  timeMins: number;
  form: Airport;
  to: Airport;
  takeoffDate: string;
  landingDate: string;
  price: Price;
}
