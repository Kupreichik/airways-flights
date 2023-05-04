import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { PassengersComponent } from './flight-select/pages/passengers/passengers.component';

const redirectToHome = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./search/search.module').then((m) => m.SearchModule),
  },

  {
    path: 'select',
    loadChildren: () =>
      import('./flight-select/flight-select.module').then((mod) => mod.FlightSelectModule),
  },
  {
    path: 'passengers',
    component: PassengersComponent,
    ...canActivate(redirectToHome),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
