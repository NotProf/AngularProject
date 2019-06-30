import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Films} from '../models/Films';
import {FilmService} from '../services/film.service';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/UserService';
import {User} from '../models/User';
import {$} from 'protractor';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient,
              private filmsS: FilmService,
              private userService: UserService,
              private titleS: Title) {
  }

  currentUser = new User();
  search = '';
  films: Films [] = [];
  public page = 1;
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
    if (localStorage.getItem('_token') != null) {
      this.userService.setStatus('Online').subscribe();
    }
    this.titleS.setTitle('MyCinema');
    setInterval(() => this.next(), 5000);
    const headersOption = new HttpHeaders()
      .set('Authorization', localStorage.getItem('_token'))
      .set('CurrentUser', localStorage.getItem('_currentUser'));
    if (localStorage.getItem('_token') == null
      && localStorage.getItem('_currentUser') == null) {
      console.log('You are Anonymous!');
    } else {
      this.userService.getCurrentUser().subscribe((res) => {
        this.currentUser = res;

        this.mes = 'Hello, ' + this.currentUser.username;
      });
    }
    window.onoffline = () => {
      console.log('offlineee');
      this.userService.close(this.currentUser.id).subscribe();
      this.currentUser.status = 'offline';
    };
    window.onbeforeunload = () => {
      this.userService.close(this.currentUser.id).subscribe();
    };
  }

// getUsername() {
//   return JSON.parse(localStorage.getItem('_currentUser'));
// }

  logout() {
    localStorage.removeItem('_token');
    localStorage.removeItem('_currentUser');
    localStorage.removeItem('_currentRole');
    window.onoffline = () => {
      console.log('offlineee');
      this.userService.close(this.currentUser.id).subscribe();
      this.currentUser.status = 'offline';
    };
    this.userService.close(this.currentUser.id).subscribe();

  }

  menuClick($event: MouseEvent) {
    event.preventDefault();
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu_active');
  }

}







