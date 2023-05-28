import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { PassengersComponent } from './flight-select/pages/passengers/passengers.component';
import { SummaryComponent } from './flight-select/pages/summary/summary.component';

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
  {
    path: 'summary',
    component: SummaryComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((mod) => mod.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
