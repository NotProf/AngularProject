import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {User} from '../models/User';

@Directive({
  selector: '[appUserAuth]'
})
export class UserAuthDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('_token') != null) {
      this.elementRef.nativeElement.style.opacity = 1;
    } else {
      this.elementRef.nativeElement.style.opacity = 0;
      this.elementRef.nativeElement.style.bottom = '10000000em';
    }
  }
}
