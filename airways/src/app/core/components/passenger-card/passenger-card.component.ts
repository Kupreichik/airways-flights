import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateValidation } from '../../directives/date-validation/date-validation.directive';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
const nameRegex = /^[a-zA-Z]+(-[a-zA-Z]+)*$/;

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss'],
})
export class PassengerCardComponent {
  @ViewChild('dateInput', { static: false }) dateInput!: ElementRef<HTMLInputElement>;

  @Input() passenger!: { title: string };
  @Input() sequenceNumber!: number;

  tooltipText =
    "Add the passenger's name as it is written on their documents (passport or ID). Do not use any accents or special characters. Do not use a nickname.";

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(nameRegex)]],
    lastName: ['', [Validators.required, Validators.pattern(nameRegex)]],
    gender: ['Male'],
    date: ['', [Validators.required, dateValidation()]],
  });

  constructor(private formBuilder: FormBuilder) {}

  get name() {
    return this.form.get('name');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get date() {
    return this.form.get('date');
  }

  onDatepickerChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = moment(event.value).format('MM/DD/YYYY');
    this.form.controls['date'].patchValue(selectedDate);

    this.dateInput.nativeElement.focus();
  }

  onDateInputChange() {
    this.form.controls['date'].updateValueAndValidity();
  }

  onInputChange(controlName: string, event: Event) {
    const value = (event.target as HTMLInputElement)?.value?.toUpperCase() || '';
    this.form.get(controlName)?.setValue(value);
  }
}
