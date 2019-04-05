import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Films} from '../models/Films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) {

  }

  getFilms(): Observable<Films[]> {
    return this.http.get<Films[]>(this.url);
  }
  addFilm(film: FormData): Observable<Films> {
    return this.http.post<Films>('http://localhost:8080/addfilm', film);
  }
  delFilm(film: number): Observable<Films[]> {
    return this.http.post<Films[]>('http://localhost:8080/delfilm', film);
  }

}
