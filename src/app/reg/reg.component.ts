import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:8080/reg';
  mes = '';
  userexists = false;

  ngOnInit() {
  }

  reg(form: NgForm): void {
    if (form.value.Confirmpassword === form.value.password) {
      const user: User = form.value;
      this.http.post<boolean>(this.url, user).subscribe(value => {
        this.userexists = value;
        if (!this.userexists) {
          this.mes = 'Username already exist';
        } else {
          this.mes = 'Thanks for registering! Check your email';
        }
      });
    } else {
      this.mes = 'Passwords do not match';
    }
  }


  confirm(form: NgForm) {
    console.log(form.value.Confirmpassword);
  }
}
