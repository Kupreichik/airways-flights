import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PassengersComponent } from './components/passengers/passengers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { PassengerCardComponent } from './components/passenger-card/passenger-card.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PassengersComponent,
    PassengerCardComponent,
    ContactDetailsComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    LayoutModule,
    HttpClientModule,
  ],
  exports: [HeaderComponent, FooterComponent, PassengersComponent, AuthComponent],
})
export class CoreModule {}
