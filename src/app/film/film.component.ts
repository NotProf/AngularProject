import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmService} from '../../services/film.service';
import {Films} from '../../models/Films';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
 currentF = 0;
rating = 0;
  public film: Films = new Films();
 constructor(private actevateRoute: ActivatedRoute, private filmService: FilmService ) {}
  ngOnInit() {
    this.actevateRoute.params.subscribe((param) => {
      this.currentF = Number(param.id);
    });
    this.filmService.getFilmById(this.currentF).subscribe(res => {
      this.film = res;
      const score = Math.trunc(this.film.score);
      console.log(score + 'score');
      try {
        document.getElementById(`star-${score - 1}`).setAttribute('checked', 'checked');
      } catch (e) {
        console.log('rating mising');
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
}
