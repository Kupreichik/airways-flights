import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { countriesMockList } from '../../../mock/countries';
import { EMAIL_REGEX } from '../../../shared/constants/constants';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
})
export class PassengersComponent implements OnInit {
  passengers = this.passengersService.getPassengersList();

  countriesList = [countriesMockList[0], countriesMockList[1], countriesMockList[2]];
  selectedCountry = this.countriesList[0].countryName;

  contactForm = this.formBuilder.group({
    phone: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
  });

  isValid = false;

  constructor(private formBuilder: FormBuilder, private passengersService: PassengersService) {}

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe(() => {
      this.passengersService.updateContactFormValidity(this.contactForm);
      this.passengersService.checkAllFormsValid(this.contactForm);
    });

    this.passengersService.isValidPageSource$.subscribe((value) => {
      this.isValid = value;
    });

    this.passengersService.updateContactFormValidity(this.contactForm);

    this.passengersService.checkAllFormsValid(this.contactForm);
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get email() {
    return this.contactForm.get('email');
  }
}
