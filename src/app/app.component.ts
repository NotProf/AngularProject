import {Component, OnInit} from '@angular/core';

import {element} from 'protractor';
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'slider';
  el = document.getElementsByClassName('slid')

  count = 0;
  images = ['assets\\slide1.jpg', 'assets\\slide2.jpg', 'assets\\slide3.jpg', 'assets\\slide4.jpg', 'assets\\slide5.jpg']
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

  }



}







