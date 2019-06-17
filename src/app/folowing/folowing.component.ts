import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/UserService';
import {UserpageComponent} from '../userpage/userpage.component';
import {User} from "../../models/User";

@Component({
  selector: 'app-folowing',
  templateUrl: './folowing.component.html',
  styleUrls: ['./folowing.component.css']
})
export class FolowingComponent implements OnInit {
  id: number;
  folowing: User[];
  constructor(private userService: UserService, private userComponent: UserpageComponent) { }

  ngOnInit() {
    this.id = this.userComponent.currentID;
    this.userService.getFolowing(this.id).subscribe((res) => {
      this.folowing = res;
    });
  }

}
