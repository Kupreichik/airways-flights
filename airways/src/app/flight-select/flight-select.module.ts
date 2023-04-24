import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightSelectRoutingModule } from './flight-select-routing.module';
import { FlightSelectPageComponent } from './pages/flight-select-page/flight-select-page.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { SharedModule } from '../shared/shared.module';
import { DateSelectComponent } from './components/date-select/date-select.component';
import { FlightInfoComponent } from './components/flight-info/flight-info.component';
import { FlightDateCityComponent } from './components/flight-info/flight-date-city/flight-date-city.component';

@NgModule({
  declarations: [
    SearchSettingsComponent,
    FlightSelectPageComponent,
    DateSelectComponent,
    FlightInfoComponent,
    FlightDateCityComponent,
  ],
  imports: [CommonModule, SharedModule, FlightSelectRoutingModule],
})
export class FlightSelectModule {}
