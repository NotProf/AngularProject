import { Component, OnInit } from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';
import {FilmComponent} from '../film/film.component';

@Component({
  selector: 'app-starring',
  templateUrl: './starring.component.html',
  styleUrls: ['./starring.component.css']
})
export class StarringComponent implements OnInit {

  currentFilm: Films = new Films();
  constructor(private filmService: FilmService, private filmComponent: FilmComponent) { }

  ngOnInit() {
    this.filmService.getFilmById(this.filmComponent.getThisPage()).subscribe(res => {
      this.currentFilm = res;
    });
  }

}
