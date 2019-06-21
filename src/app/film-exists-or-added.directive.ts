import {Directive, ElementRef, OnInit} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';

@Directive({
  selector: '[appFilmExistsOrAdded]'
})
export class FilmExistsOrAddedDirective implements OnInit {

  constructor(private elementRef: ElementRef, private app: AppComponent) {

  }

  ngOnInit(): void {
  }


}
