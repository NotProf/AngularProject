import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Form, NgForm} from '@angular/forms';
import {User} from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private http: HttpClient) {
  }


  ngOnInit() {
  }


  login(form: NgForm) {
    console.log(form.value);
    this.http.post('http://localhost:8080/login', form.value,
      {observe: 'response'})
      .subscribe(value => {
        const token = value.headers.get('Authorization');
        const currentUser = value.headers.get('CurrentUser');
        localStorage.setItem('_currentUser', currentUser);
        localStorage.setItem('_token', token);
        setTimeout(() => {
            window.location.href = '/userpage';
          }, 100
        );
      });
  }
}
