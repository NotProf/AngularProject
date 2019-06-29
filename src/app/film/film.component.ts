import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmService} from '../../services/film.service';
import {Films} from '../../models/Films';
import {UserService} from '../../services/UserService';
import Timer = NodeJS.Timer;
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  currentF = 0;
  rating = 0;
  idInterval;
  video = 'film';

  public film: Films = new Films();

  constructor(private actevateRoute: ActivatedRoute,
              private filmService: FilmService,
              private userService: UserService,
              private title: Title) {
  }

  ngOnInit() {

    this.actevateRoute.params.subscribe((param) => {
      this.currentF = Number(param.id);
    });
    this.filmService.getFilmById(this.currentF).subscribe(res => {
      this.film = res;
      this.title.setTitle(this.film.name);
      const score = Math.trunc(this.film.score);
      try {
        document.getElementById(`star-${score - 1}`).setAttribute('checked', 'checked');
      } catch (e) {
        console.log('rating missing');
      }
    });

  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  getThisPage(): number {
    return this.currentF;
  }

  getThisFilm(): Films {
    return this.film;
  }

  filmRating(value, id) {
    this.filmService.rating(value, id).subscribe((res) => {
      this.rating = res;
      console.log(this.rating);
    });
  }

  star5(id) {
    const value = 5;
    this.filmRating(value, id);
  }

  star4(id) {
    const value = 4;
    this.filmRating(value, id);
  }

  star3(id) {
    const value = 3;
    this.filmRating(value, id);
  }

  star2(id) {
    const value = 2;
    this.filmRating(value, id);
  }

  star1(id) {
    const value = 1;
    this.filmRating(value, id);
  }

  filmB() {
    this.video = 'film';
    const filmButton = document.getElementById('filmButton');
    const trailerButton = document.getElementById('trailerButton');
    trailerButton.style.background = '#545454';
    filmButton.style.background = '#1fce04';
  }

  trailerB() {
    this.video = 'trailer';
    const filmButton = document.getElementById('filmButton');
    const trailerButton = document.getElementById('trailerButton');
    trailerButton.style.background = '#1fce04';
    filmButton.style.background = '#545454';
  }

  play() {
    this.idInterval = setInterval(() => {
      if (!document.getElementsByTagName('video')[0].paused) {
        console.log(this.film.name);
        this.userService.setStatus('Watching : ' + this.film.name).subscribe();
      } else {
        console.log('online');
        this.userService.setStatus('Online').subscribe();
        clearInterval(this.idInterval);
      }
    }, 5000);
  }


}


