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

  public film: Films = new Films();
 constructor(private actevateRoute: ActivatedRoute, private filmService: FilmService ) {}
  ngOnInit() {
    this.actevateRoute.params.subscribe((param) => {
      this.currentF = Number(param.id);
      console.log(this.currentF);
    });
    this.filmService.getFilmById(this.currentF).subscribe(res => {
      console.log(res);
      this.film = res;
      console.log(this.film.movie);
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
}
