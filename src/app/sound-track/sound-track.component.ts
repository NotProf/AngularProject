import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';
import {FilmComponent} from '../film/film.component';

@Component({
  selector: 'app-sound-track',
  templateUrl: './sound-track.component.html',
  styleUrls: ['./sound-track.component.css']
})
export class SoundTrackComponent implements OnInit {
  constructor(private filmService: FilmService, private filmComponent: FilmComponent) {
  }

  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  currentFilm: Films = new Films();

  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }

  ngOnInit() {
    this.filmService.getFilmById(this.filmComponent.getThisPage()).subscribe(res => {
      this.currentFilm = res;
    });

  }

}
