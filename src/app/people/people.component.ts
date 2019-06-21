import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/UserService';
import {User} from '../../models/User';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  users: User[];
  partUser: User[];
  size = 8;
  current = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUser().subscribe((res) => {
      if (res === null) {
        console.log('No Users');
      } else {
        this.users = res;
        console.log(res);
        this.partUser = this.users.slice(0, this.size);
      }
    });
  }

  next() {
    if (this.current < (this.users.length / this.size)) {
      this.current++;
      this.change();
    }
  }

  back() {
    if (this.current > 0) {
      this.current--;
      this.change();
    }
  }

  change() {
    const a = Number(this.current) * Number(this.size);
    const b = Number(a) + Number(this.size);
    this.partUser = this.users.slice(a, b);
  }

  sendSearchForm(form: NgForm) {
    if (form.value.search !== '') {
      this.userService.findSearchingUser(form.value.search).subscribe(value => {
        this.users = value;
        this.current = 0;
        this.change();
      });
    } else {
      this.ngOnInit();
    }
  }
}
