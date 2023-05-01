import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { FlightItem } from '../models/flight-search-response-model';

const BASE_URL = '/api/search/flight';

const initialSelectedDateId = 2;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FlightSelectService {
  itemsResponse?: FlightItem[][];

  itemsResponseReturn?: FlightItem[][];

  selectedCardId$ = new BehaviorSubject(initialSelectedDateId);

  selectedReturnCardId$ = new BehaviorSubject(initialSelectedDateId);

  constructor(private http: HttpClient) {}

  getData(searchDate: string, origin: string, destination: string) {
    return this.http.post<FlightItem[]>(
      BASE_URL,
      {
        fromKey: origin,
        toKey: destination,
        forwardDate: searchDate,
      },
      httpOptions,
    );
  }

  getListData(dataList: Date[], origin: string, destination: string, isReturn: boolean) {
    const requests = dataList.map((item) => this.getData(item.toISOString(), origin, destination));
    forkJoin(requests).subscribe((data) => {
      if (isReturn) {
        this.itemsResponseReturn = data;
        this.selectedReturnCardId$.next(initialSelectedDateId);
      } else {
        this.itemsResponse = data;
        this.selectedCardId$.next(initialSelectedDateId);
      }
      console.log('from service getListData, forkJoin, results', data);
    });
  }

  changeSelectedCardId(id: number, isReturn: boolean) {
    if (isReturn) {
      this.selectedReturnCardId$.next(id);
    } else {
      this.selectedCardId$.next(id);
    }
  }
}
