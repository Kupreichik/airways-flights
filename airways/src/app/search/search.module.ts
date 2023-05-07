import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [MainPageComponent, SearchFormComponent],
  imports: [CommonModule, SharedModule, SearchRoutingModule],
  exports: [SearchFormComponent],
})
export class SearchModule {}
