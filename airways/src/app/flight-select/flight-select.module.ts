import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightSelectRoutingModule } from './flight-select-routing.module';
import { FlightSelectPageComponent } from './pages/flight-select-page/flight-select-page.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { SharedModule } from '../shared/shared.module';
import { TicketSelectComponent } from './components/ticket-select/ticket-select.component';

@NgModule({
  declarations: [SearchSettingsComponent, FlightSelectPageComponent, TicketSelectComponent],
  imports: [CommonModule, SharedModule, FlightSelectRoutingModule],
})
export class FlightSelectModule {}
