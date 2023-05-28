import { Component } from '@angular/core';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  displayedColumns2 = ['select', 'number', 'flight', 'type', 'date', 'passengers', 'price', 'dots'];

  cartData = this.cartService.cartData;

  constructor(private cartService: CartService, public searchDataService: SearchDataService) {}

  getTotalPrice() {
    return this.cartData.reduce(
      (acc, item) => acc + item.price[this.searchDataService.currency],
      0,
    );
  }
}
