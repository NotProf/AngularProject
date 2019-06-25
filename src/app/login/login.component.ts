import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpInterceptor} from '@angular/common/http';
import {Form, NgForm} from '@angular/forms';
import {User} from '../../models/User';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {UserService} from '../../services/UserService';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  mes = '';

  constructor(private http: HttpClient, private userS: UserService) {
  }


  ngOnInit() {
  }


  login(form: NgForm) {
    this.userS.Login(form.value).subscribe(value => {
      const token = value.headers.get('Authorization');
      const currentUser = value.headers.get('CurrentUser');
      localStorage.setItem('_currentUser', currentUser);
      localStorage.setItem('_token', token);
      setTimeout(() => {
          window.location.href = '/';
        }, 100
      );
    }, () => {
      this.mes = 'Неправильно вказані дані або не активований акаунт';
    });
  }
}
