import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    loginEmail: ['', [Validators.required, Validators.email]],
    loginPassword: ['', [Validators.required, Validators.minLength(3)]],
  });

  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private hotToast: HotToastService,
  ) {}

  get loginEmail() {
    return this.loginForm.get('loginEmail');
  }

  get loginPassword() {
    return this.loginForm.get('loginPassword');
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    const loginEmail = this.loginEmail?.value as string;
    const loginPassword = this.loginPassword?.value as string;

    this.authService
      .login(loginEmail, loginPassword)
      .pipe(
        this.hotToast.observe({
          success: 'Logged in successfully',
          loading: 'Logging in',
          error: 'The was an error',
        }),
      )
      .subscribe(() => {});
  }
}
