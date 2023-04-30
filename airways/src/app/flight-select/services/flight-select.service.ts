import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { FlightSearchResponse } from '../models/flight-search-response-model';

// https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&destination=LED&departure_at=2023-05-01&one_way=true&currency=eur&limit=10&token=2fbb1de08be1472367b68094ed12482f

// const BASE_URL = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates';

const BASE_URL = '/api/aviasales/v3/prices_for_dates';
const API_TOKEN = '2fbb1de08be1472367b68094ed12482f';
const initialSelectedDateId = 2;

@Injectable({
  providedIn: 'root',
})
export class FlightSelectService {
  itemsResponse?: FlightSearchResponse[];

  selectedCardId$ = new BehaviorSubject(initialSelectedDateId);

  constructor(private http: HttpClient) {}

  getData(searchDate: string) {
    return this.http.get<FlightSearchResponse>(BASE_URL, {
      params: {
        origin: 'MOW',
        destination: 'LED',
        departure_at: searchDate,
        one_way: true,
        currency: 'eur',
        limit: 10,
        token: API_TOKEN,
      },
    });
  }

  getListData(dataList: Date[]) {
    const requests = dataList.map((item) => this.getData(item.toISOString().slice(0, 10)));
    forkJoin(requests).subscribe((data) => {
      this.itemsResponse = data;
      this.selectedCardId$.next(initialSelectedDateId);
      console.log('from service, forkJoin, results', data);
    });
  }

  changeSelectedCardId(id: number) {
    this.selectedCardId$.next(id);
  }
}
