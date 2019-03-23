import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Films} from '../../models/Films';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {
  films: Films [] = [];

  constructor(private filmsS: FilmService) {
  }

  ngOnInit(): void {
    this.filmsS.getFilms().subscribe((res) => {
      this.films = res;
    });
  }

  sendForm(form: NgForm) {
    const film: Films = form.value;
    this.filmsS.addFilm(film).subscribe((newFilm) => {
    this.films.push(newFilm);});
  }


}
