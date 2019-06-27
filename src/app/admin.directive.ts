import {Directive, ElementRef, OnInit} from '@angular/core';
import {UserService} from '../services/UserService';
import {User} from '../models/User';

@Directive({
  selector: '[appAdmin]'
})
export class AdminDirective implements OnInit {

  curUser = new User();

  constructor(private elementRef: ElementRef, private userS: UserService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('_token') == null && localStorage.getItem('_currentUser') == null) {
      this.elementRef.nativeElement.style.opacity = 0;
      this.elementRef.nativeElement.style.bottom = '10000000em';
    } else {
      this.userS.getCurrentUser().subscribe((current) => {
        this.curUser = current;
        if (current.role === 'ROLE_ADMIN') {
          this.elementRef.nativeElement.style.opacity = 1;
        } else if (current.role === 'ROLE_USER') {
          this.elementRef.nativeElement.style.opacity = 0;
          this.elementRef.nativeElement.style.bottom = '10000000em';
        }
      });
    }
  }
}
