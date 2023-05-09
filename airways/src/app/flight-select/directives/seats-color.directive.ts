import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';
import { Seats } from '../models/flight-search-response-model';

@Directive({
  selector: '[appSeatsColor]',
})
export class SeatsColorDirective implements OnChanges {
  @Input() appSeatsColor: Seats | undefined = undefined;
  @Input() isActiveCard = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.changeColor();
  }

  changeColor() {
    let itemColor = '';

    if (this.appSeatsColor?.avaible && this.appSeatsColor?.total) {
      switch (true) {
        case this.appSeatsColor.avaible / this.appSeatsColor.total > 0.5:
          itemColor = 'greenyellow';
          break;
        case this.appSeatsColor.avaible >= 10:
          itemColor = 'orange';
          break;
        case this.appSeatsColor.avaible < 10:
          itemColor = 'red';
          break;
        default:
          itemColor = '';
      }
    }

    if (this.el.nativeElement instanceof HTMLSpanElement) {
      this.renderer.setStyle(this.el.nativeElement, 'background', `${itemColor}`);
    }

    if (this.el.nativeElement instanceof HTMLDivElement && this.isActiveCard) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'borderBottom',
        itemColor ? `5px solid ${itemColor}` : '',
      );
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'borderBottom', '');
    }
  }
}
