import { animate, state, style, transition, trigger } from '@angular/animations';

export const expandHeader = trigger('expandHeader', [
  state('initial', style({ height: 63 })),
  state('expanded', style({ height: 121 })),
  transition('initial <=> expanded', animate('0.3s')),
]);
