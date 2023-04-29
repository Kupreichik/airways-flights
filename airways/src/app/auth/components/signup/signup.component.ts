import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NAME_REGEX, TOOLTIP_TEXT } from '../../../shared/constants/constants';
import { dateValidation } from '../../../core/directives/date-validation/date-validation.directive';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

import { GENDER } from '../../../shared/constants/types';
import { countriesMockList } from '../../../mock/countries';
import { citizenshipMockList } from '../../../mock/citizenship';
import { passwordValidation } from '../../../core/directives/password-validation.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @ViewChild('dateBirthInput', { static: false }) dateBirthInput!: ElementRef<HTMLInputElement>;

  signupForm = this.formBuilder.group({
    signupEmail: ['', [Validators.required, Validators.email]],
    signupPassword: ['', [Validators.required, Validators.minLength(8), passwordValidation()]],
    signupFirstName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.pattern(NAME_REGEX)],
    ],
    signupLastName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.pattern(NAME_REGEX)],
    ],
    signupDateBirth: ['', [Validators.required, dateValidation()]],
    signupGender: [GENDER.MALE],
    signupPhone: ['', [Validators.required, Validators.minLength(10)]],
    signupCitizenship: ['', [Validators.required]],
    signupCheckbox: ['', [Validators.required]],
  });

  hidePassword = true;
  tooltipText = TOOLTIP_TEXT;

  countriesList = [countriesMockList[0], countriesMockList[1], countriesMockList[2]];
  selectedCountry = this.countriesList[0].countryName;

  citizenshipList = [citizenshipMockList[0], citizenshipMockList[1], citizenshipMockList[2]];
  selectedCitizenship = '';

  constructor(private formBuilder: FormBuilder) {}

  get signupEmail() {
    return this.signupForm.get('signupEmail');
  }

  get signupPassword() {
    return this.signupForm.get('signupPassword');
  }

  get signupFirstName() {
    return this.signupForm.get('signupFirstName');
  }

  get signupLastName() {
    return this.signupForm.get('signupLastName');
  }

  get signupDateBirth() {
    return this.signupForm.get('signupDateBirth');
  }

  get signupGender() {
    return GENDER;
  }

  get signupPhone() {
    return this.signupForm.get('signupPhone');
  }

  get signupCitizenship() {
    return this.signupForm.get('signupCitizenship');
  }

  get signupCheckbox() {
    console.log(this.signupForm.get('signupCheckbox')?.value);
    return this.signupForm.get('signupCheckbox');
  }

  onInputChange(controlName: string, event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    const capitalizedValue = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
    this.signupForm.get(controlName)?.setValue(capitalizedValue);
  }

  onDatepickerChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = moment(event.value).format('MM/DD/YYYY');
    this.signupForm.controls.signupDateBirth.patchValue(selectedDate);

    this.dateBirthInput.nativeElement.focus();
  }

  onDateInputChange() {
    this.signupForm.controls.signupDateBirth.updateValueAndValidity();
  }

  checkGender(gender: GENDER) {
    return this.signupForm.controls.signupGender.value === gender;
  }
}
