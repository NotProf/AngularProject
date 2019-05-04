import { Component, OnInit } from '@angular/core';
import {FilmComponent} from '../film/film.component';
import {Films} from "../../models/Films";

@Component({
  selector: 'app-description-of-f',
  templateUrl: './description-of-f.component.html',
  styleUrls: ['./description-of-f.component.css']
})
export class DescriptionOfFComponent implements OnInit {
currentFilm: Films = null;
  constructor(private filmComponent: FilmComponent ) { }

  ngOnInit() {
    this.currentFilm = this.filmComponent.getThisMovie();
  }
}
