import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public arr: any;

  constructor(public router: Router, private http: HttpClient) {
    
   }

  ngOnInit(): void {
    document.body.style.background = 'gold';
    
    this.http.get('api/user/ranking').subscribe(this.arr);
    // this.arr = this.arr.ranking;

    console.log(this.arr);
  }

}
