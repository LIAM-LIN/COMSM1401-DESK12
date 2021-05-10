import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  right = 'assets/img/Rightnew.png';
  wrong = 'assets/img/Wrongnew.png';
  dog = 'assets/img/dog.png';
  public People: any = {
    username: '',
    points: 0,
    rightNum: 0,
    wrongNum: 0
  };
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    document.body.style.background = 'skyblue';
    this.route.queryParams.subscribe( val => {
      this.People.username = val.username;
      this.People.points = val.point;
      this.People.rightNum = val.rightNum;
      this.People.wrongNum = val.wrongNum;
    });
  }

}
