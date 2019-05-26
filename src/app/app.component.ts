import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }


  userAuth = false;
  userAu = ' ';
  mes = '';
  title = 'slider';
  el = document.getElementsByClassName('slid');
  count = 0;
  images = ['assets\\slide1.jpg', 'assets\\slide2.jpg', 'assets\\slide3.jpg', 'assets\\slide4.jpg', 'assets\\slide5.jpg'];
  image = this.images[this.count];


  next() {
    this.count++;
    if (this.count >= this.images.length) {
      this.count = 0;
    }
    this.image = this.images[this.count];
  }

  back() {
    this.count--;
    if (this.count <= 0) {
      this.count = this.images.length - 1;
    }
    this.image = this.images[this.count];
  }

  ngOnInit(): void {
    setInterval(() => this.next(), 5000);
    const headersOption = new HttpHeaders()
      .set('Authorization', localStorage.getItem('_token'))
      .set('CurrentUser', localStorage.getItem('_currentUser'));
    // this.http.get<boolean>('http://localhost:8080/get', {
    //   headers: headersOption, responseType: 'text'
    // }).subscribe(value => {
    //     this.userAuth = value;
    //     if (!this.userAuth) {
    //       this.mes = '';
    //     } else {
    //       this.mes = 'Hello, ' + this.getUsername();
    //     }
    // }
    // );
    this.http.get('http://localhost:8080/get', { headers: headersOption, responseType: 'text'}).subscribe((res) => {
      this.mes = 'Hello, ' + res;
    });
  }
// dfedfd
//   wefgsrf
  getUsername() {
    return JSON.parse(localStorage.getItem('_currentUser'));
  }

  logout() {
    localStorage.removeItem('_token');
    localStorage.removeItem('_currentUser');
  }

  // getInfo() {
  //   const headersOption = new HttpHeaders().set('Authorization', localStorage.getItem('_token'));
  //   // const headersOption = new HttpHeaders({'Authorization' : localStorage.getItem('_token')});
  //   this.http.get('http://localhost:8080/get', {
  //     headers: headersOption,
  //     responseType: 'text'
  //   }).subscribe(value => console.log(value));
  // }


}







