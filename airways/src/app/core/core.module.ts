import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthModule } from '../auth/auth.module';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, StepperComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    LayoutModule,
    HttpClientModule,
    AuthModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
