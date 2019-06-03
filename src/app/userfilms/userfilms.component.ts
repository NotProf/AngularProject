import {Component, Input, OnInit} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-userfilms',
  templateUrl: './userfilms.component.html',
  styleUrls: ['./userfilms.component.css']
})
export class UserfilmsComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
}
