import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  right = 'assets/img/true.png';
  wrong = 'assets/img/wrong.png';
  username: string = '';
  point: number = 0;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( val => {
      this.username = val.username;
      this.point = val.point;
    });
  }

}
