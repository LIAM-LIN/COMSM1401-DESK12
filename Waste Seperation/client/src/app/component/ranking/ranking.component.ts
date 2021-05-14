import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public arr: any;
  public usernameList: Array<String> =[];
  public pointsList: Array<String> =[];
  public rightNumList: Array<String> =[];
  public wrongNumList: Array<String> =[];

  constructor(public router: Router, private http: HttpClient) {
    
   }

  ngOnInit(): void {
    document.body.style.background = 'gold';
    
    // this.http.get('api/user/ranking').subscribe(this.arr);
    // // this.arr = this.arr.ranking;

    // this.http.get('/api/user/rankings').subscribe(result => this.arr)
      // this.arr = this.arr.ranking;
      

    this.http.get('/api/user/ranking').subscribe((result: any) => {

      this.arr = result;
      
      for (var _i = 0; _i < result.data.length; _i++) {
        this.usernameList.push(JSON.stringify(result.data[_i]['username']).substring(1,this.checkStringLength(JSON.stringify(result.data[_i]['username']))-1));
        this.rightNumList.push(JSON.stringify(result.data[_i]['rightNum']));
        this.wrongNumList.push(JSON.stringify(result.data[_i]['wrongNum']));   
        this.pointsList.push(JSON.stringify(result.data[_i]['points']));  
      }

      for (_i = result.data.length; _i < 10; _i++) {
        this.usernameList.push("");
        this.rightNumList.push("");
        this.wrongNumList.push("");   
        this.pointsList.push("");  
      }

      console.log(this.usernameList);
      console.log(this.rightNumList);
      console.log(this.wrongNumList);
      console.log(this.pointsList);

      // console.log('result is ', JSON.stringify(result));
      // console.log(JSON.parse(JSON.stringify(result)));
      
    });

  }

  checkStringLength(str: String):number {
    var strlen: number = 0;
    for (var i = 0; i < str.length; i++) {
            strlen++;
    }
    return strlen;
  }

  }


