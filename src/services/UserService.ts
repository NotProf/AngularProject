import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Films} from '../models/Films';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  addUserFilm(idFilm: number ): Observable<Films[]>  {
    const headersOption = new HttpHeaders()
      .set('Authorization', localStorage.getItem('_token'))
      .set('CurrentUser', localStorage.getItem('_currentUser'));
    return this.http.post<Films[]>('http://localhost:8080/adduserfilm', idFilm, {headers: headersOption});
  }
}
