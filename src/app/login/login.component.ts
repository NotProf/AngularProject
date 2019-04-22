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
        localStorage.setItem('_token', token);
        console.log(value);
      });
  }

  getInfo() {
    const headersOption = new HttpHeaders().set('Authorization', localStorage.getItem('_token'));
    // const headersOption = new HttpHeaders({'Authorization' : localStorage.getItem('_token')});
    this.http.get('http://localhost:8080/get', {headers: headersOption, responseType: 'text'}).subscribe(value => console.log(value));
  }


  logout() {
    localStorage.removeItem('_token');
  }
}
