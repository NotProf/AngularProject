import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FilmService} from '../../services/film.service';
import {FilmComponent} from '../film/film.component';
import {Comments} from '../../models/Comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
 comments: Comments[];
  constructor(private filmService: FilmService, private filmComponent: FilmComponent) { }

  ngOnInit() {
    this.filmService.getComments(this.filmComponent.currentF).subscribe((res) => {
      this.comments = res.reverse();
      console.log(res);
    });
  }
  add(form: NgForm) {
    const  fd = new FormData();
    fd.append('text', form.value.text, );
    fd.append('idfilm', this.filmComponent.currentF.toString(), );
    this.filmService.addComment(fd).subscribe(() =>  this.ngOnInit());
  }
}
