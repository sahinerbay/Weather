import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private el: ElementRef, renderer: Renderer2) { 
    renderer.setProperty(el.nativeElement, 'autofocus', true);
  }


}
