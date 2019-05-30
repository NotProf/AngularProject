import {Component, Input, OnInit} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-userfilms',
  templateUrl: './userfilms.component.html',
  styleUrls: ['./userfilms.component.css']
})
export class UserfilmsComponent implements OnInit {
  constructor(private filmsS: FilmService) {
  }

  // films: Films [] = [];
  // partFilms: Films[] = [];
  // public collectionSize: number;


  ngOnInit(): void {
    // this.filmsS.getFilms().subscribe((res) => {
    //   this.films = res;
    //   this.collectionSize = this.films.length;
    //   this.films = this.films.reverse();
    // });

  }



}
