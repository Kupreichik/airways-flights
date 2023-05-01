import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightSelectRoutingModule } from './flight-select-routing.module';
import { FlightSelectPageComponent } from './pages/flight-select-page/flight-select-page.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { SharedModule } from '../shared/shared.module';
import { DateSelectComponent } from './components/flight-select/date-select/date-select.component';
import { FlightInfoComponent } from './components/flight-select/flight-info/flight-info.component';
import { FlightDateCityComponent } from './components/flight-select/flight-info/flight-date-city/flight-date-city.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
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
  ],
  imports: [CommonModule, SharedModule, FlightSelectRoutingModule],
})
export class FlightSelectModule {}
