import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-userfilms',
  templateUrl: './userfilms.component.html',
  styleUrls: ['./userfilms.component.css']
})
export class UserfilmsComponent implements OnInit {
  @Input() public allFilms: string;
  constructor() { }

  ngOnInit() {
  }

}
