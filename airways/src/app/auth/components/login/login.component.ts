import { Component } from '@angular/core';
import { EMAIL_REGEX } from '../../../shared/constants/constants';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  hidePassword = true;

  constructor(private formBuilder: FormBuilder) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
