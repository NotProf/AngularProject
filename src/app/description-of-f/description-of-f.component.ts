import { Component, OnInit } from '@angular/core';
import {FilmComponent} from '../film/film.component';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-description-of-f',
  templateUrl: './description-of-f.component.html',
  styleUrls: ['./description-of-f.component.css']
})
export class DescriptionOfFComponent implements OnInit {
currentFilm: Films = new Films();
page = 0;
  constructor(private filmService: FilmService, private filmComponent: FilmComponent) { }

  ngOnInit() {
    this.page = this.filmComponent.getThisPage();
    console.log(this.page);
    this.filmService.getFilmById(this.filmComponent.getThisPage()).subscribe(res => {
      console.log(res);
      this.currentFilm = res;
    });
  }
}
