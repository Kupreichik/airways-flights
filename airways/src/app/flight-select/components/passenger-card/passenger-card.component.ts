/* eslint-disable class-methods-use-this */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import moment from 'moment';
import { dateValidation } from '../../../core/directives/date-validation/date-validation.directive';
import { NAME_REGEX, TOOLTIP_TEXT } from '../../../shared/constants/constants';
import { GENDER } from '../../../shared/constants/types';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss'],
})
export class PassengerCardComponent {
  @ViewChild('dateInput', { static: false }) dateInput!: ElementRef<HTMLInputElement>;

  @Input() passenger!: { title: string };
  @Input() sequenceNumber!: number;

  tooltipText = TOOLTIP_TEXT;

  passengerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
    lastName: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
    gender: [GENDER.MALE],
    date: ['', [Validators.required, dateValidation()]],
  });

  constructor(private formBuilder: FormBuilder) {}

  get name() {
    return this.passengerForm.get('name');
  }

  get lastName() {
    return this.passengerForm.get('lastName');
  }

  get date() {
    return this.passengerForm.get('date');
  }

  get gender() {
    return GENDER;
  }

  onDatepickerChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = moment(event.value).format('MM/DD/YYYY');
    this.passengerForm.controls.date.patchValue(selectedDate);

    this.dateInput.nativeElement.focus();
  }

  onDateInputChange() {
    this.passengerForm.controls.date.updateValueAndValidity();
  }

  onInputChange(controlName: string, event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    const capitalizedValue = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
    this.passengerForm.get(controlName)?.setValue(capitalizedValue);
  }

  checkGender(gender: GENDER) {
    return this.passengerForm.controls.gender.value === gender;
  }
}
