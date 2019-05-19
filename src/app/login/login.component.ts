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

  headers = new HttpHeaders({'Acces-Control-Allow-Origin': ':'});

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  // login(form: NgForm) {
  //   const user: User = form.value;
  //   this.http.post('http://localhost:8080/login', JSON.stringify({
  //     username: user.username,
  //     password: user.password
  //   }), {observe: 'response'}).subscribe(value => console.log(value));
  //   console.log(form.value);
  // }

  login(form: NgForm) {
    console.log(form.value);
    this.http.post('http://localhost:8080/login', form.value,
      {observe: 'response'})
      .subscribe(value => console.log(value));
  }
}
