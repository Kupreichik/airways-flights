import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSelectPageComponent } from './pages/flight-select-page/flight-select-page.component';

const routes: Routes = [{ path: '', component: FlightSelectPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightSelectRoutingModule {}
