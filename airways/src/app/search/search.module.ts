import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, SharedModule, SearchRoutingModule],
})
export class SearchModule {}
