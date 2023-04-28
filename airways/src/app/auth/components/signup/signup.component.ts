import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NAME_REGEX } from '../../../shared/constants/constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  passengerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
    lastName: ['', [Validators.required, Validators.pattern(NAME_REGEX)]],
    gender: [''],
    date: ['', [Validators.required]],
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

  // get gender() {
  //   console.log('1');
  //   return GENDER;
  // }
}
