import {Directive, ElementRef, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import {UserpageComponent} from './userpage/userpage.component';

@Directive({
  selector: '[appUnderAvatar]'
})
export class UnderAvatarDirective implements OnInit {

  constructor(private elementRef: ElementRef, private app: AppComponent, private userP: UserpageComponent) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.app.currentUser.id !== this.userP.currentID || localStorage.getItem('_token') == null) {
        console.log(this.app.currentUser.id + ' ' + this.userP.currentID);
        this.elementRef.nativeElement.style.opacity = 0;
        this.elementRef.nativeElement.style.display = 'none';
      }
    }, 300);
  }

}
