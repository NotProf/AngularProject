import {Component, Input, OnInit} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';
import {UserService} from '../../services/UserService';

@Component({
  selector: 'app-userfilms',
  templateUrl: './userfilms.component.html',
  styleUrls: ['./userfilms.component.css']
})
export class UserfilmsComponent implements OnInit {
  constructor(private filmsS: FilmService, private userS: UserService) {
  }
  uFilms: Films[];

  ngOnInit(): void {
  this.userS.getUserFilms().subscribe((res) => {
    this.uFilms = res;
    console.log(this.uFilms);
  });
  }



}
