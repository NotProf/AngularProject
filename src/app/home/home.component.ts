import {Component, OnInit} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';
import {UserService} from '../../services/UserService';
import {NgForm} from '@angular/forms';
import {User} from '../../models/User';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser = new User();
  currentFilm = new Films();
  films: Films [] = [];
  partFilms: Films[] = [];
  public page = 1;
  public collectionSize: number;
  public maxSize = 2;
  count = 0;
  images = ['assets\\slide1.jpg', 'assets\\slide2.jpg', 'assets\\slide3.jpg', 'assets\\slide4.jpg', 'assets\\slide5.jpg'];
  image = this.images[this.count];
  filmExists = '';

  constructor(private filmsS: FilmService, private userS: UserService) {
  }

  next() {
    this.count++;
    if (this.count >= this.images.length) {
      this.count = 0;
    }
    this.image = this.images[this.count];
  }

  ngOnInit(): void {
    setInterval(() => this.next(), 5000);
    this.filmsS.getFilms().subscribe((res) => {
      this.films = res;
      this.collectionSize = this.films.length;
      this.partFilms = this.films.slice(0, this.maxSize).reverse();
    });

  }

  onPageChange(p: number) {
    const url = location.href;
    location.href = '#up';
    history.replaceState(null, null, url);
    this.reloadArray(p);
  }

  reloadArray(p: number) {
    if (p === 1) {
      this.partFilms = this.films.slice(0, this.maxSize);
    } else {
      const first = Number(this.maxSize) * Number(p) - Number(this.maxSize);
      const last = Number(this.maxSize) * Number(p);
      this.partFilms = this.films.slice(first, last);
    }
  }

  SearchBy(genre: string) {
    this.filmsS.findByGenre(genre).subscribe((res) => {
      this.films = res;
      this.page = 1;
      this.onPageChange(1);
    });
  }

  sortByYear() {
    this.page = 1;
    this.films.sort(this.compare);
    this.onPageChange(this.page);
  }

  compare(first, second) {
    if (first.year < second.year) {
      return 1;
    }
    if (first.year > second.year) {
      return -1;
    }
    return 0;
  }


  addUserFilm(idFilm: number) {
    this.userS.getCurrentUser().subscribe(value => {
      this.currentUser = value;
    });
    this.filmsS.getFilmById(idFilm).subscribe(value => {
      this.currentFilm = value;
    });
    this.userS.addUserFilm(idFilm).subscribe(value => {
      const usersFilms = this.currentUser.usersFilms;
      location.href = '#exists';
      setTimeout(() => {
        this.filmExists = 'Додано';
      }, 100);
      for (let i = 0; i < usersFilms.length; i++) {
        if (usersFilms[i].id === idFilm) {
          // console.log(usersFilms[i].id + '  ' + idFilm);
          location.href = '#exists';
          setTimeout(() => {this.filmExists = 'Вже є';
          }, 100);
        }
      }
    });
  }

  sendSearchForm(form: NgForm) {
    if (form.value.search !== '') {
      this.filmsS.findSearchingFilm(form.value.search).subscribe(value => {
        this.films = value;
        this.page = 1;
        this.reloadArray(1);
      });
    } else {
      this.filmsS.getFilms().subscribe((res) => {
        this.films = res;
        this.page = 1;
        this.reloadArray(1);
      });
    }
  }

  sortByRating() {
    this.page = 1;
    this.films.sort(this.compareByR);
    this.onPageChange(this.page);
  }

  compareByR(first, second) {
    if (first.score < second.score) {
      return 1;
    }
    if (first.score > second.score) {
      return -1;
    }
    return 0;
  }
}
