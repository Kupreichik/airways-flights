export interface FlightSearchResponse {
  success: boolean;
  data: FlightItemInfo[];
  currency: string;
}

export interface FlightItemInfo {
  airline: string;
  departure_at: string;
  destination: string;
  destination_airport: string;
  duration: number;
  duration_back: number;
  duration_to: number;
  flight_number: string;
  link: string;
  origin: string;
  origin_airport: string;
  price: number;
  return_transfers: number;
  transfers: number;
}

// export const testResponse2 = {
//   success: true,
//   data: [
//     {
//       airline: '5N',
//       departure_at: '2023-05-11T12:00:00+03:00',
//       destination: 'LED',
//       destination_airport: 'LED',
//       duration: 90,
//       duration_back: 0,
//       duration_to: 90,
//       flight_number: '295',
//       link: '/search/MOW1105LED1?t=5N16837956001683801000000090SVOLED_fa6f1c7e69ea5a109cf3b88ab6b854b0_3140&search_date=28042023&expected_price_uuid=7913bda7-e3c7-4874-baff-345461290d1a&expected_price_currency=rub',
//       origin: 'MOW',
//       origin_airport: 'SVO',
//       price: 36,
//       return_transfers: 0,
//       transfers: 0,
//     },
//   ],
//   currency: 'eur',
// };
