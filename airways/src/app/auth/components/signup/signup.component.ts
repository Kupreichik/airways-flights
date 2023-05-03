import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { HotToastService } from '@ngneat/hot-toast';
import moment from 'moment';
import { dateValidation } from '../../../core/directives/date-validation/date-validation.directive';
import { passwordValidation } from '../../../core/directives/password-validation.directive';
import { citizenshipMockList } from '../../../mock/citizenship';
import { countriesMockList } from '../../../mock/countries';
import { NAME_REGEX, TOOLTIP_TEXT } from '../../../shared/constants/constants';
import { GENDER } from '../../../shared/constants/types';
import { AuthService } from '../../services/auth.service';

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
    signupCheckbox: [false, [Validators.requiredTrue]],
  });

  hidePassword = true;
  tooltipText = TOOLTIP_TEXT;

  countriesList = [countriesMockList[0], countriesMockList[1], countriesMockList[2]];
  selectedCountry = this.countriesList[0].countryName;

  citizenshipList = [citizenshipMockList[0], citizenshipMockList[1], citizenshipMockList[2]];
  selectedCitizenship = '';

  signupButtonClicked = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private hotToast: HotToastService,
  ) {}

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

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }

    const signupEmail = this.signupEmail?.value as string;
    const signupPassword = this.signupPassword?.value as string;
    const signupFirstName = this.signupFirstName?.value as string;
    const signupLastName = this.signupLastName?.value as string;

    this.authService
      .signUp(signupEmail, signupPassword, signupFirstName, signupLastName)
      .pipe(
        this.hotToast.observe({
          success: `Congrats! You are all signed up`,
          loading: 'Signing in',
          error: ({ message }) => `${message}`,
        }),
      )
      .subscribe(() => {});
  }
}
