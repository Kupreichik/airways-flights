import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PassengersComponent } from './components/passengers/passengers.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { PassengerCardComponent } from './components/passenger-card/passenger-card.component';

@NgModule({
  declarations: [HeaderComponent, PassengersComponent, PassengerCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [HeaderComponent, PassengersComponent],
})
export class CoreModule {}
