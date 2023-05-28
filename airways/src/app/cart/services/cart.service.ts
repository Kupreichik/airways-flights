import { Injectable } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { FlightSelectService } from 'src/app/flight-select/services/flight-select.service';
import { PassengersService } from 'src/app/flight-select/services/passengers.service';
import { sumPrices } from 'src/app/flight-select/utils/utils';
import { CartData } from '../models/cart.model';

interface FlightsDataForCart {
  number: string[];
  flight: string[];
  date: string[][];
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData: CartData[] = [];

  constructor(
    private flightSelectService: FlightSelectService,
    public searchDataService: SearchDataService,
    private passengersService: PassengersService,
  ) {}

  addToCart() {
    const price = this.passengersService.passengersList.reduce(
      (acc, item) => {
        const itemPrice = sumPrices(item.fare, item.tax);
        return sumPrices(acc, itemPrice);
      },
      { eur: 0, usd: 0, pln: 0, rub: 0 },
    );

    const tripType = this.searchDataService.isOneWay ? 'One way' : 'Round trip';

    const selectedFlightsData = this.flightSelectService
      .getSelectedCardsData(this.searchDataService.isOneWay)
      .reduce(
        (acc: FlightsDataForCart, item) => {
          acc.number.push(item?.flightNumber || '');
          acc.flight.push(`${item?.form.city} - ${item?.to.city}`);
          acc.date.push([item?.takeoffDate || '', item?.landingDate || '']);
          return acc;
        },
        { number: [], flight: [], date: [] },
      );

    const passengers = Object.entries(this.searchDataService.passengersCategories)
      .filter((item) => item[1])
      .map((item) => item.reverse().join(' x '));

    const newCartItem = { price, type: tripType, ...selectedFlightsData, passengers };

    const isItemInCart = this.cartData.find(
      (item) => JSON.stringify(item) === JSON.stringify(newCartItem),
    );

    if (!isItemInCart) this.cartData.push(newCartItem);
  }

  getCartCount() {
    return this.cartData.length;
  }
}
