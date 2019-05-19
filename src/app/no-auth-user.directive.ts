import {Directive, ElementRef, OnInit} from '@angular/core';
import {UserAuthDirective} from './user-auth.directive';


@Directive({
  selector: '[appNoAuthUser]'
})
export class NoAuthUserDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('_token') != null) {
      this.elementRef.nativeElement.style.opacity = 0;
      this.elementRef.nativeElement.style.bottom = '1000000000em';
    } else {
      this.elementRef.nativeElement.style.opacity = 1;
      this.elementRef.nativeElement.style.left = '20px';
      this.elementRef.nativeElement.style.top = '15px';
    }
  }
}
