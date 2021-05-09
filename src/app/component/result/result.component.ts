import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../../models/user.model';
import {ResultService} from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ ResultService ]
})
export class ResultComponent implements OnInit {
  right = 'assets/img/true.png';
  wrong = 'assets/img/wrong.png';
  dog = 'assets/img/dog.png';

  public user: User;

  constructor(public route: ActivatedRoute, private resultService:ResultService) {
    this.user = new User();
  }

  ngOnInit(): void {
    document.body.style.background = 'skyblue';
    this.route.queryParams.subscribe( val => {
      this.user.username = val.username;
      this.user.points = val.point;
      this.user.rightNum = val.rightNum;
      this.user.wrongNum = val.wrongNum;
    });
  }

  submit():void {
    this.resultService.submit(this.user);
  }

}
