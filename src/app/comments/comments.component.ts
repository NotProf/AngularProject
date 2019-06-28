import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FilmService} from '../../services/film.service';
import {FilmComponent} from '../film/film.component';
import {Comments} from '../../models/Comments';
import {DatePipe} from "@angular/common";
import {Films} from "../../models/Films";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comments[];
  currentFilm: Films = new Films();
  authUser = localStorage.getItem('_token') != null;
  constructor(private filmService: FilmService,
              private filmComponent: FilmComponent,
              private datepipe: DatePipe) {
  }

  ngOnInit() {
    this.filmService.getComments(this.filmComponent.currentF).subscribe((res) => {
      this.comments = res.reverse();
    });
    this.filmService.getFilmById(this.filmComponent.getThisPage()).subscribe(res => {
      this.currentFilm = res;
    });
  }

  add(form: NgForm) {
    const date = this.datepipe.transform(new Date(), 'dd-MM-yyyy, HH:mm');
    const fd = new FormData();
    fd.append('text', form.value.text);
    fd.append('idfilm', this.filmComponent.currentF.toString());
    fd.append('date' , date);
    this.filmService.addComment(fd).subscribe(() => this.ngOnInit());
    form.onReset();
  }
}
