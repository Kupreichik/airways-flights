import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  passengers = {
    Adults: 0,
    Child: 0,
    Infant: 0,
  };
  passengerCategories = Object.keys(this.passengers);
}
