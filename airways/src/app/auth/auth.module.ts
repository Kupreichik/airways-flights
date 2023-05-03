import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './pages/auth.component';

@NgModule({
  declarations: [AuthComponent, AuthHeaderComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    LayoutModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
