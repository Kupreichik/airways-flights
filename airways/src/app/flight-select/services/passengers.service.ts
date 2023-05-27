import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SearchDataService } from '../../core/services/search-data.service';
import { Price } from '../models/flight-search-response-model';
import { multiplyPrice } from '../utils/utils';
import { FlightSelectService } from './flight-select.service';

export interface PassengersList {
  id: string;
  title: string;
  firstName?: string;
  lastName?: string;
  cabinBag?: string;
  checkedBag?: string;
  seat?: string;
  fare?: Price;
  tax?: Price;
  valid?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PassengersService {
  passengerFormList: PassengersList[] = [];

  contactForm!: FormGroup;

  passengersList: PassengersList[] = [];

  isValidPageSource$ = new BehaviorSubject<boolean>(false);

  constructor(
    private searchDataService: SearchDataService,
    private flightSelectService: FlightSelectService,
  ) {}

  getPassengersList() {
    this.passengersList = Object.entries(this.searchDataService.passengersCategories)
      .filter(([, count]) => count > 0)
      .reduce((acc: PassengersList[], [name, count]) => {
        if (count >= 1) {
          for (let i = 1; i <= count; i += 1) {
            acc.push({ id: `${name}-${i}`, title: name });
          }
        }
        return acc;
      }, []);

    return this.passengersList;
  }

  updatePassengersList() {
    const letters = 'ABCDEFGHIJKL'.split('');
    const rows = 28;
    const seats = [] as string[];
    while (seats.length < this.passengerFormList.length) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      const randomNumber = Math.floor(Math.random() * rows) + 1;
      const seat = `${randomLetter}${randomNumber}`;
      if (!seats.includes(seat)) {
        seats.push(seat);
      }
    }

    const adultsPrice = this.flightSelectService.getSelectedCardsPriceData();

    const passengers = this.passengerFormList.map((el, i) => {
      const isAdult = this.passengersList[i].title === 'Adults';
      const isChild = this.passengersList[i].title === 'Child';
      let fare;
      let tax;
      if (isAdult) {
        fare = adultsPrice;
        tax = multiplyPrice(adultsPrice, 0.1);
      } else if (isChild) {
        fare = multiplyPrice(adultsPrice, 0.6);
        tax = multiplyPrice(adultsPrice, 0.1);
      } else {
        fare = multiplyPrice(adultsPrice, 0.5);
        tax = multiplyPrice(adultsPrice, 0.1);
      }

      return {
        ...this.passengersList[i],
        ...el,
        checkedBag: '1 checked bag (total 23 kg) included',
        cabinBag: '1 cabin bag + 1 personal item (max. 8 kg) included',
        seat: seats[i],
        fare,
        tax,
      };
    });

    this.passengersList = passengers;
  }

  deletePassengersList() {
    this.passengersList = [];
    this.passengerFormList = [];
  }

  updatePassengerFormValidity(formList: FormGroup, id: string, title: string) {
    this.passengerFormList = [
      ...this.passengerFormList,
      { id, title, ...formList.value, valid: formList.valid },
    ];
  }

  updateContactFormValidity(formList: FormGroup) {
    this.contactForm = formList;
  }

  checkAllFormsValid(formList: FormGroup, id = 'id') {
    this.isValidPageSource$.next(true);

    this.passengerFormList.forEach((el, i) => {
      if (el.id === id) {
        this.passengerFormList[i] = { ...el, ...formList.value, valid: formList.valid };
      }

      if (!el.valid) {
        this.isValidPageSource$.next(false);
      }
    });

    if (this.contactForm.invalid) {
      this.isValidPageSource$.next(false);
    }
  }
}
