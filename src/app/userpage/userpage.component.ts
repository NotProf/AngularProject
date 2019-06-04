import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services/UserService';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private userService: UserService) {
  }
  currentID = 0;
  user = new User();
  ngOnInit() {
    this.activatedRoute.params.subscribe((value) => {
      this.currentID = Number(value.id);
      console.log(this.currentID);
    });
    this.userService.getUserById(this.currentID).subscribe((res) => {
        this.user = res;
        console.log(this.user);
      });
  }

}
