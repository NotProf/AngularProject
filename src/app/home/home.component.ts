import {Component, OnChanges, OnInit} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';
import {UserService} from '../../services/UserService';
import {AppComponent} from '../app.component';
import set = Reflect.set;
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search = '';
  films: Films [] = [];
  partFilms: Films[] = [];
  public page = 1;
  public collectionSize: number;
  public maxSize = 2;
  count = 0;
  images = ['assets\\slide1.jpg', 'assets\\slide2.jpg', 'assets\\slide3.jpg', 'assets\\slide4.jpg', 'assets\\slide5.jpg'];
  image = this.images[this.count];

  constructor(private filmsS: FilmService, private userS: UserService, private appComp: AppComponent) {
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
      this.films = this.films.reverse();
      this.partFilms = this.films.slice(0, this.maxSize).reverse();
    });

  }

  onPageChange(p: number) {
    const url = location.href;
    location.href = '#up';
    history.replaceState(null, null, url);
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
      return -1;
    }
    if (first.year > second.year) {
      return 1;
    }
    return 0;
  }


  addUserFilm(idFilm: number) {
    this.userS.addUserFilm(idFilm).subscribe(value => {
      setTimeout(() => {
          window.location.href = '/';
        }, 100
      );
    });
  }
  sendSearchForm(form: NgForm
  ) {
    this.search = form.value.search;
    console.log(this.search);
  }
}
