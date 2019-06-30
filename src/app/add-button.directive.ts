import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appAddButton]'
})
export class AddButtonDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('_token') == null) {
      this.elementRef.nativeElement.style.cursor = 'not-allowed';
      this.elementRef.nativeElement.style.pointerEvents = 'none';
      this.elementRef.nativeElement.style.opacity = 0.5;
    }
  }

}
