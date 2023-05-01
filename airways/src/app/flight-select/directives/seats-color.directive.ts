import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSeatsColor]',
})
export class SeatsColorDirective {
  @Input() appSeatsColor = 0;
  @Input() isActiveCard = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.changeColor();
  }

  changeColor() {
    let itemColor = '';

    switch (true) {
      case this.appSeatsColor >= 200:
        itemColor = 'greenyellow';
        break;
      case this.appSeatsColor >= 100:
        itemColor = 'yellow';
        break;
      case this.appSeatsColor > 0:
        itemColor = 'red';
        break;
      default:
        itemColor = '';
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
    return itemColor;
  }
}
