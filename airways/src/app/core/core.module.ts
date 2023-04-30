import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { PassengersComponent } from './components/passengers/passengers.component';

import { PassengerCardComponent } from './components/passenger-card/passenger-card.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
    LayoutModule,
    HttpClientModule,
    AuthModule,
  ],
  exports: [HeaderComponent, FooterComponent, PassengersComponent],
})
export class CoreModule {}
