import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CITIES } from 'src/app/mock/cities';
import { Router } from '@angular/router';
import { SearchDataService } from 'src/app/core/services/search-data.service';
import { ValidateService } from '../../services/validate.service';

interface Passengers {
  [key: string]: { count: number; description: string };
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, DoCheck {
  searchForm!: FormGroup;
  isSubmitDisabled = true;

  citiesList = CITIES.sort((item1, item2) => item1.name.localeCompare(item2.name));

  passengers: Passengers = {
    Adults: { count: 0, description: '14+ years' },
    Child: { count: 0, description: '2-14 years' },
    Infant: { count: 0, description: '0-2 years' },
  };
  passengerCategories = Object.keys(this.passengers);
  selectedPassengers!: string;
  isDestinationReverse = false;

  constructor(
    private formBuilder: FormBuilder,
    private validateService: ValidateService,
    private router: Router,
    private searchDataService: SearchDataService,
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      isOneWay: ['false'],
      destinationFrom: ['', Validators.required],
      destinationTo: ['', Validators.required],
      startDate: ['', [Validators.required, this.validateService.dateValidator]],
      endDate: ['', [Validators.required, this.validateService.dateValidator]],
      passengers: ['', Validators.required],
    });
  }

  ngDoCheck() {
    this.isSubmitDisabled = !this.searchForm.valid;
  }

  onChangeTypeTrip() {
    if (!this.isRoundTrip()) {
      this.searchForm.controls['endDate'].disable();
    } else {
      this.searchForm.controls['endDate'].enable();
      this.searchForm.controls['endDate'].markAsTouched();
    }
  }

  hasDateError(): boolean {
    return this.searchForm.controls['startDate'].hasError('incorrectDate');
  }

  switchDestination() {
    this.isDestinationReverse = !this.isDestinationReverse;
  }

  isRoundTrip(): boolean {
    return this.searchForm.value.isOneWay === 'false';
  }

  setSelectedPassengers() {
    this.selectedPassengers = this.passengerCategories
      .reduce(
        (acc, cur) =>
          this.passengers[cur].count > 0 ? `${acc} ${this.passengers[cur].count} ${cur},` : acc,
        '',
      )
      .slice(0, -1);
  }

  increment(event: Event, category: string) {
    event.stopImmediatePropagation();
    this.passengers[category].count += 1;
    this.setSelectedPassengers();
  }

  decrement(event: Event, category: string) {
    event.stopImmediatePropagation();
    if (this.passengers[category].count) this.passengers[category].count -= 1;
    this.setSelectedPassengers();
  }

  onSubmit() {
    this.searchDataService.isOneWay = this.searchForm.value.isOneWay;
    this.searchDataService.startDate = this.searchForm.value.startDate;
    this.searchDataService.endDate = this.searchForm.value.endDate;

    this.searchDataService.origin = this.isDestinationReverse
      ? this.searchForm.value.destinationTo
      : this.searchForm.value.destinationFrom;

    this.searchDataService.destination = this.isDestinationReverse
      ? this.searchForm.value.destinationFrom
      : this.searchForm.value.destinationTo;

    this.searchDataService.passengers = this.passengerCategories.reduce(
      (acc, cur) => acc + this.passengers[cur].count,
      0,
    );

    this.searchDataService.originName =
      this.citiesList.find((item) => item.code === this.searchDataService.origin)?.name || '';

    this.searchDataService.destinationName =
      this.citiesList.find((item) => item.code === this.searchDataService.destination)?.name || '';

    this.searchDataService.isOneWay = !this.isRoundTrip();

    this.searchDataService.passengersCategories.Adults = this.passengers['Adults'].count;
    this.searchDataService.passengersCategories.Child = this.passengers['Child'].count;
    this.searchDataService.passengersCategories.Infant = this.passengers['Infant'].count;

    if (this.searchForm.valid) this.router.navigateByUrl('/select');
  }
}
