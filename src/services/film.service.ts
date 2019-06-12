import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Films} from '../models/Films';
import {NgForm} from '@angular/forms';

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

  getFilmById(id: number): Observable<Films> {
    return this.http.post<Films>('http://localhost:8080/getbyid', id);
  }

  findByGenre(genre: string): Observable<Films[]> {
    return this.http.post<Films[]>('http://localhost:8080/findByGenre', genre);
  }

  findSearchingFilm(filmName: string): Observable<Films[]> {
    return this.http.post<Films[]>('http://localhost:8080/search', filmName);
  }

  delUserfilms(film: number): Observable<Films[]> {
    return this.http.post<Films[]>('http://localhost:8080/deluserfilms', film);
  }
}
