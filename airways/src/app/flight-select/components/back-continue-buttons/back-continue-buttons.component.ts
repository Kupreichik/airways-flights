import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { StepperService } from 'src/app/core/services/stepper.service';
import { SearchDataService } from '../../../core/services/search-data.service';
import { FlightSelectService } from '../../services/flight-select.service';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-back-continue-buttons',
  templateUrl: './back-continue-buttons.component.html',
  styleUrls: ['./back-continue-buttons.component.scss'],
})
export class BackContinueButtonsComponent implements OnInit {
  @Input() isValid = false;
  isReturn = false;

  constructor(
    private stepperService: StepperService,
    private router: Router,
    private passengersService: PassengersService,
    private flightSelectService: FlightSelectService,
    private searchDataService: SearchDataService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.isReturn = !this.searchDataService.isOneWay;
  }

  prevStep() {
    const currentStepIndex = this.stepperService.getStepIndex();
    const newStepIndex = currentStepIndex - 1;
    if (newStepIndex >= 0) {
      this.stepperService.setStepIndex(newStepIndex);
    }

    if (newStepIndex === 0) {
      this.flightSelectService.isSelectCard = false;
      this.flightSelectService.isSelectReturnCard = !this.isReturn;

      this.flightSelectService.isValid$.next(
        this.flightSelectService.isSelectCard && this.flightSelectService.isSelectReturnCard,
      );
    }

    if (newStepIndex === 1) {
      this.passengersService.deletePassengersList();
    }

    if (newStepIndex === 2) {
      this.passengersService.isValidPageSource$.next(false);
    }

    if (newStepIndex < 0) this.router.navigate(['/']);
  }

  nextStep() {
    const currentStepIndex = this.stepperService.getStepIndex();
    const newStepIndex = currentStepIndex + 1;
    this.stepperService.setStepIndex(newStepIndex);

    if (currentStepIndex === 1) {
      this.passengersService.updatePassengersList();
    }
  }

  showCartButtons(): boolean {
    const currentStepIndex = this.stepperService.getStepIndex();
    return currentStepIndex === 2;
  }

  addToCart() {
    this.cartService.addToCart();
  }
}
