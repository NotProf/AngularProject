import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Title} from '@angular/platform-browser';
import {Films} from '../../models/Films';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private filmsS: FilmService,  private title: Title) { }
  topTen: Films[] = [];
  ngOnInit() {
    this.filmsS.getTopTen().subscribe((res) => {
      this.topTen = res;
    });
  }

}
