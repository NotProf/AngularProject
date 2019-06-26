import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services/UserService';
import {FilmService} from '../../services/film.service';
import {Films} from '../../models/Films';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private filmService: FilmService,
              private title: Title) {
  }
  filmsLength = null;
  currentID = 0;
  showUnshow = false;
  subButton = true;
  user = new User();
  image = 'assets/ava.jpg';
  fileToUpload: File = null;
  exist: boolean;
  topTen: Films[] = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe((value) => {
      this.currentID = Number(value.id);
    });
    this.userService.compareUser(this.currentID).subscribe((res) => {
      this.showUnshow = res;
      if (this.showUnshow === false) {
        this.subButton = true;
      } else {
        this.subButton = false;
      }
    });
    this.userService.getUserById(this.currentID).subscribe((curUser) => {
      this.user = curUser;
      this.title.setTitle(this.user.username);
      if (this.user.avatar == null) {
        this.user.avatar = this.image;
      }
    });
    this.userService.existIntFriends(this.currentID).subscribe((res) => {
      this.exist = res;
    });

    this.filmService.getTopTen().subscribe((res) => {
      this.topTen = res;
    });
  }

  subscribes() {
    this.userService.addSubscribes(this.currentID).subscribe(() => this.ngOnInit());
  }
  unSubscribes() {
    this.userService.unSubscribes(this.currentID).subscribe(() => this.ngOnInit());
    this.ngOnInit();
  }


  handleFileInput(event) {
    this.fileToUpload = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.fileToUpload);
    fileReader.onload = () => {
      // @ts-ignore
      this.user.avatar = fileReader.result;
    };


  }

  sendFormWithAvatar() {
    const fd: FormData = new FormData();
    fd.append('avatar', this.fileToUpload);
    this.activatedRoute.params.subscribe((value) => {
      this.currentID = Number(value.id);
      this.userService.setAvatar(fd).subscribe();
    });
    setTimeout(() => {
      window.location.href = '/userpage/' + this.user.id;
    }, 0);
  }



}
