import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { countriesMockList } from '../../../mock/countries';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
})
export class PassengersComponent {
  passengers = [{ title: 'Adult' }, { title: 'Child' }, { title: 'Infant' }];

  countriesList = [countriesMockList[0], countriesMockList[1], countriesMockList[2]];
  selectedCountry = this.countriesList[0].countryName;

  contactForm = this.formBuilder.group({
    phone: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private formBuilder: FormBuilder) {}

  get phone() {
    return this.contactForm.get('phone');
  }

  get email() {
    return this.contactForm.get('email');
  }
}
