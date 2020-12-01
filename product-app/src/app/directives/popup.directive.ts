import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup',
})
export class PopupDirective {
  @Input() msm: String;

  constructor(_elementRef: ElementRef) {
    console.log('popup directive...', _elementRef);
  }

  /*HostListener decorator allows a directive to listen to events on its host
element.
  */
  @HostListener('click') displayMessage(): void {
    alert(this.msm);
  }

}
