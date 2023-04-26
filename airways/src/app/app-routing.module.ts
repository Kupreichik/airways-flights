import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
