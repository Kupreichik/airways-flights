import { Component } from '@angular/core';
import { countries } from '../../../mock/countries';
import { Validators, FormBuilder } from '@angular/forms';
import { EMAIL_REGEX } from '../../../shared/constants/constants';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
})
export class PassengersComponent {
  passengers = [{ title: 'Adult' }, { title: 'Child' }, { title: 'Infant' }];

  countriesList = [countries[0], countries[1], countries[2]];
  selectedCountry = this.countriesList[0].countryName;

  contactForm = this.formBuilder.group({
    phone: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  get phone() {
    return this.contactForm.get('phone');
  }

  get email() {
    return this.contactForm.get('email');
  }
}
