import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, SharedModule, CartRoutingModule],
})
export class CartModule {}
