import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlightItem, OtherFlights, Price } from '../models/flight-search-response-model';
import { getDateWithOffset } from '../utils/utils';

const BASE_URL = '/api/search/flight';

const initialSelectedDateId = 0;

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
  selectedCardId$ = new BehaviorSubject(initialSelectedDateId);

  selectedReturnCardId$ = new BehaviorSubject(initialSelectedDateId);

  flightsData?: FlightItem[];

  constructor(private http: HttpClient) {}

  fetchData(searchDateFrom: string, searchDateBack: string, origin: string, destination: string) {
    return this.http.post<FlightItem[]>(
      BASE_URL,
      {
        fromKey: origin,
        toKey: destination,
        forwardDate: searchDateFrom,
        backDate: searchDateBack,
      },
      httpOptions,
    );
  }

  getDataById(id: string, isReturn: boolean) {
    const dataIndex = isReturn ? 1 : 0;

    if (id === '0') {
      return this.flightsData && this.flightsData[dataIndex];
    }

    return this.flightsData && this.flightsData[dataIndex].otherFlights[id as keyof OtherFlights];
  }

  getSelectedCardsData(isOneWay: boolean) {
    const idFrom = this.selectedCardId$.value.toString();
    const idReturn = this.selectedReturnCardId$.value.toString();
    const dataFrom = this.getDataById(idFrom, false);
    const dataReturn = this.getDataById(idReturn, true);

    return isOneWay ? [dataFrom] : [dataFrom, dataReturn];
  }

  getPriceById(id: string, currency: keyof Price, isReturn: boolean) {
    const dataIndex = isReturn ? 1 : 0;

    if (id === '0') {
      return this.flightsData && this.flightsData[dataIndex].price[currency];
    }
    return (
      (this.flightsData &&
        this.flightsData[dataIndex].otherFlights[id as keyof OtherFlights]?.price[currency]) ||
      0
    );
  }

  getDateById(id: string, isReturn: boolean) {
    const dataIndex = isReturn ? 1 : 0;

    const startDate = this.flightsData && this.flightsData[dataIndex].takeoffDate;
    return (
      (this.flightsData &&
        this.flightsData[dataIndex].otherFlights[id as keyof OtherFlights]?.takeoffDate) ||
      getDateWithOffset(startDate, +id)
    );
  }

  getSeatsById(id: string, isReturn: boolean) {
    const dataIndex = isReturn ? 1 : 0;
    if (id === '0') {
      return this.flightsData && this.flightsData[dataIndex].seats;
    }

    return (
      (this.flightsData &&
        this.flightsData[dataIndex].otherFlights[id as keyof OtherFlights]?.seats) ||
      undefined
    );
  }

  changeSelectedCardId(id: number, isReturn: boolean) {
    if (isReturn) {
      this.selectedReturnCardId$.next(id);
    } else {
      this.selectedCardId$.next(id);
    }
  }

  setInitialSelectedCardId() {
    this.selectedReturnCardId$.next(initialSelectedDateId);
    this.selectedCardId$.next(initialSelectedDateId);
  }
}
