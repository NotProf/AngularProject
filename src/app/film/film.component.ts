import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilmService} from "../../services/film.service";
import {Films} from "../../models/Films";


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
 currentF = 0;
 film: Films;
 constructor(private actevateRoute: ActivatedRoute, private filmService: FilmService) {}
  ngOnInit() {
   this.actevateRoute.params.subscribe((param) => {
     this.currentF = Number(param.id);
     console.log(this.currentF);
   });
   this.filmService.getFilmById(this.currentF).subscribe(value => {
     this.film = value;
     console.log(this.film);
   });
  }
  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
}
