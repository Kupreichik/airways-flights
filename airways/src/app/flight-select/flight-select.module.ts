import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { DateSelectComponent } from './components/flight-select/date-select/date-select.component';
import { FlightDateCityComponent } from './components/flight-select/flight-info/flight-date-city/flight-date-city.component';
import { FlightInfoComponent } from './components/flight-select/flight-info/flight-info.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
import { PassengerCardComponent } from './components/passenger-card/passenger-card.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { SeatsColorDirective } from './directives/seats-color.directive';
import { FlightSelectRoutingModule } from './flight-select-routing.module';
import { FlightSelectPageComponent } from './pages/flight-select-page/flight-select-page.component';
import { PassengersComponent } from './pages/passengers/passengers.component';
import { MinToHoursPipe } from './pipes/min-to-hours.pipe';

@NgModule({
  declarations: [
    SearchSettingsComponent,
    FlightSelectPageComponent,
    DateSelectComponent,
    FlightInfoComponent,
    FlightDateCityComponent,
    FlightSelectComponent,
    MinToHoursPipe,
    SeatsColorDirective,
    PassengersComponent,
    PassengerCardComponent,
    ContactDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, FlightSelectRoutingModule],
})
export class FlightSelectModule {}
