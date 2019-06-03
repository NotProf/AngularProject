import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Films} from '../models/Films';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   headersOption = new HttpHeaders()
    .set('Authorization', localStorage.getItem('_token'))
    .set('CurrentUser', localStorage.getItem('_currentUser'));
  constructor(private http: HttpClient) {}
  addUserFilm(idFilm: number ): Observable<Films[]>  {
    return this.http.post<Films[]>('http://localhost:8080/adduserfilm', idFilm, {headers: this.headersOption});
  }//as
  getUserFilms(): Observable<Films[]> {
    return this.http.get<Films[]>('http://localhost:8080/userpage-userfilms', {headers: this.headersOption});
  }
}
