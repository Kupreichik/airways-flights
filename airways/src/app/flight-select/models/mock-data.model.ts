export interface FlightInfo {
  flightNumber: string;
  flightType: 'direct' | 'with transfer';
  direction: 'forward' | 'backward';
  duration: string;
  seats: number;
  price: number;
  departure: string;
  arrival: string;
  city: string;
  timeZone: string;
}
