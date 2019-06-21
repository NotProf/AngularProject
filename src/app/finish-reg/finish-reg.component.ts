import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/UserService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-finish-reg',
  templateUrl: './finish-reg.component.html',
  styleUrls: ['./finish-reg.component.css']
})
export class FinishRegComponent implements OnInit {

  constructor(private userS: UserService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.router.url.substr(11));
    this.userS.finishReg().subscribe();
  }
}
