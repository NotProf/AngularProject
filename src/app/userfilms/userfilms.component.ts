import {Component, Input, OnInit} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';
import {UserService} from '../../services/UserService';
import {UserpageComponent} from '../userpage/userpage.component';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-userfilms',
  templateUrl: './userfilms.component.html',
  styleUrls: ['./userfilms.component.css']
})
export class UserfilmsComponent implements OnInit {
  constructor(private filmsS: FilmService,
              private userS: UserService,
              private userComponent: UserpageComponent,
              private app: AppComponent) {
  }

  uFilms: Films[];
  id: number;

  ngOnInit(): void {
    this.id = this.userComponent.currentID;
    this.userS.getUserFilms(this.id).subscribe((res) => {
      this.uFilms = res;
    });
  }

  deleteUserFilm(id: number) {
    this.filmsS.delUserfilms(id).subscribe((res) => {
      this.uFilms = res;
      setTimeout(() => {
          this.app.ngOnInit();
        }, 300
      );
    });
  }
}
