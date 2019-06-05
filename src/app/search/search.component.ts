import {Component, OnInit} from '@angular/core';
import {Films} from '../../models/Films';
import {UserService} from '../../services/UserService';
import {AppComponent} from '../app.component';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  films: Films [] = [];
  partFilms: Films[] = [];
  public page = 1;
  public collectionSize: number;

  constructor(private userS: UserService, private appComp: AppComponent, private filmsS: FilmService) {
  }

  ngOnInit() {
    console.log(this.appComp.search + '1111111111111111');

    this.filmsS.findSearchingFilm(this.appComp.search).subscribe(value => {
      console.log(value);
      this.partFilms = value;
    });
  }

  addUserFilm(idFilm: number) {
    this.userS.addUserFilm(idFilm).subscribe(value => {
      console.log(value.toString());
    });
  }
}
