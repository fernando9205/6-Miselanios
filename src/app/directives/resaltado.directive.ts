import { Directive, ElementRef, HostListener, Input } from  '@angular/core';
import { hostViewClassName } from '@angular/compiler';

@Directive({
  selector: '[appResaltado]'
})



export class ResaltadoDirective {

  @Input('appResaltado') newColor: boolean;

  constructor(private ele: ElementRef) {
  }

  @HostListener('mouseenter') mouseEntro() {
    this.setColor( this.newColor);
  }

  @HostListener('mouseleave') mousesalio() {
    this.ele.nativeElement.style.backgroundColor = null;
  }

  private setColor( color ) {
    this.ele.nativeElement.style.backgroundColor = color;
  }
}
