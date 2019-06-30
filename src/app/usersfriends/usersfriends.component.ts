import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/UserService';
import {UserpageComponent} from '../userpage/userpage.component';
import {User} from '../../models/User';

@Component({
  selector: 'app-usersfriends',
  templateUrl: './usersfriends.component.html',
  styleUrls: ['./usersfriends.component.css']
})
export class UsersfriendsComponent implements OnInit {
  id: number;
  subscribes: User[];

  constructor(private userService: UserService, private userComponent: UserpageComponent) {
  }

  ngOnInit() {
    this.id = this.userComponent.currentID;
    this.userService.getSubscribes(this.id).subscribe((res) => {
      this.subscribes = res;
    });
  }

  Update() {
    setTimeout(() => {
      this.ngOnInit();
      this.userComponent.ngOnInit();
    }, 100);

  }
}
