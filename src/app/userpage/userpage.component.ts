import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public films = 'all users films';

  constructor() {
  }

  ngOnInit() {
  }

}
