import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Films} from '../models/Films';
import {catchError} from 'rxjs/operators';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headersOption = new HttpHeaders()
    .set('Authorization', localStorage.getItem('_token'))
    .set('CurrentUser', localStorage.getItem('_currentUser'));

  constructor(private http: HttpClient) {
  }

  Login(user: string) {
    return this.http.post('http://localhost:8080/login', user,
      {observe: 'response'});
  }

  addUserFilm(idFilm: number): Observable<Films[]> {
    return this.http.post<Films[]>('http://localhost:8080/adduserfilm', idFilm, {headers: this.headersOption});
  }

  getUserFilms(): Observable<Films[]> {
    return this.http.get<Films[]>('http://localhost:8080/userpage-userfilms', {headers: this.headersOption});
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>('http://localhost:8080/get', {headers: this.headersOption});
  }

  getUserById(id: number): Observable<User> {
    return this.http.post<User>('http://localhost:8080/getUserById', id);
  }

  compareUser(id: number): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/currentPage', id);
  }

  addSubscribes(id: number): Observable<number> {
    return this.http.post<number>('http://localhost:8080/subscribe', id);
  }

  getSubscribes(id: number): Observable<User[]> {
    return this.http.post<User[]>('http://localhost:8080/friends', id);
  }
}
