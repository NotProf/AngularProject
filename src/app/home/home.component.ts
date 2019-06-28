import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';
import {UserService} from '../../services/UserService';
import {NgForm} from '@angular/forms';
import {AppComponent} from '../app.component';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  search = '';

  constructor(private filmsS: FilmService,
              private userS: UserService,
              private app: AppComponent,
              private title: Title) {
  }

  films: Films [] = [];
  partFilms: Films[] = [];
  topTen: Films[] = [];
  public page = 1;
  public collectionSize: number;
  public maxSize = 2;
  count = 0;
  images = ['assets\\slide1.jpg', 'assets\\slide2.jpg', 'assets\\slide3.jpg', 'assets\\slide4.jpg', 'assets\\slide5.jpg'];
  image = this.images[this.count];
  currentTrailer;

  filmExists = '';
  userfilmItar = false;

  usersFilms;

  next() {
    this.count++;
    if (this.count >= this.images.length) {
      this.count = 0;
    }
    this.image = this.images[this.count];
  }

  ngOnInit(): void {
    this.title.setTitle('MyCinema');
    setInterval(() => this.next(), 5000);
    this.filmsS.getFilms().subscribe((res) => {
      this.films = res.reverse();
      this.collectionSize = this.films.length;
      this.partFilms = this.films.slice(0, this.maxSize);
    });
    this.filmsS.getTopTen().subscribe((res) => {
      this.topTen = res;
    });

    setTimeout(() => {
      this.usersFilms = this.app.currentUser.usersFilms;
    }, 200);

  }

  onPageChange(p: number) {
    const url = location.href;
    location.href = '#up';
    history.replaceState(null, null, url);
    this.reloadArray(p);
  }

  reloadArray(p: number) {
    this.collectionSize = this.films.length;
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
      this.films = res.reverse();
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
    this.userfilmItar = false;
    for (let i = 0; i < this.usersFilms.length; i++) {
      if (this.usersFilms[i].id === idFilm) {
        this.userfilmItar = true;
        console.log(this.usersFilms[i].id + ' ' + idFilm);
      }
    }
    if (this.userfilmItar === false) {
      this.userS.addUserFilm(idFilm).subscribe((res) => {
        this.usersFilms = res;
        console.log(this.usersFilms);
        location.href = '#exists';
        this.filmExists = 'Додано';
        // this.userfilmItar = true;
      });
    } else {
      this.userfilmItar = false;
      console.log(this.userfilmItar);
      location.href = '#exists';
      this.filmExists = 'Вже є';
    }
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

  ShowTrailer(id: number) {
    let thisFilm: Films;
    this.filmsS.getFilmById(id).subscribe((res) => {
      thisFilm = res;
      this.currentTrailer = thisFilm.movie;
    });
    const dialog = document.querySelector('dialog');
    dialog.showModal();
  }

  close() {
    this.videoplayer.nativeElement.pause();
    const dialog = document.querySelector('dialog');
    dialog.close();
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

}
