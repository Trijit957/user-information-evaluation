import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[errorText]'
})
export class ErrorTextDirective {

  constructor(
    private elementRef: ElementRef
  ) {
      elementRef.nativeElement.style.color = '#f53d3d';
      elementRef.nativeElement.style.fontWeight = 'bold';
      elementRef.nativeElement.style.fontStyle = 'italic';
      elementRef.nativeElement.style.textAlign = 'center';
  }

}
