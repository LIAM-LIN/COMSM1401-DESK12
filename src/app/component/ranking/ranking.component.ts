import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public User: any = {
    username: '',
    points: 0
  };

  constructor(public route: ActivatedRoute, private router: Router) {
    document.body.style.background = 'gold';
  }

  ngOnInit(): void {
    /*this.itemPic = 'assets/item/' + this.type + '/' + this.number + '.png';*/
    this.route.queryParams.subscribe( val => {
      this.User.username = val.name;
      this.User.points = val.points;
    });

  }

}
