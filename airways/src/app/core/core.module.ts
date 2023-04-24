import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PassengersComponent } from './components/passengers/passengers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { PassengerCardComponent } from './components/passenger-card/passenger-card.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PassengersComponent,
    PassengerCardComponent,
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [HeaderComponent, PassengersComponent],
})
export class CoreModule {}
