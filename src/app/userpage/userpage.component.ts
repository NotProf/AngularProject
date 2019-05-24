import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getInfo() {
    const headersOption = new HttpHeaders().set('Authorization', localStorage.getItem('_token'));
    // const headersOption = new HttpHeaders({'Authorization' : localStorage.getItem('_token')});
    this.http.get('http://localhost:8080/get', {headers: headersOption, responseType: 'text'}).subscribe(value => console.log(value));
  }


}
