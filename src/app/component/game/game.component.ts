import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  img1 = 'assets/img/gameTopImg.png';
  img2 = 'assets/img/exclamation.png';
  img3 = 'assets/img/equalSymbol.png';
  img4 = 'assets/img/star.png';
  box1 = 'assets/img/box1.png';
  box2 = 'assets/img/box2.png';
  box3 = 'assets/img/box3.png';
  box4 = 'assets/img/box4.png';

  type = this.getRandomNumInt(1, 2);
  number = this.getRandomNumInt(1, 3);
  itemPic: string = '';
  count: number = 1;
  runtime = 0;

  public User: any = {
    username: '',
    points: 0
  };

  getRandomNumInt(min: number, max: number): number{
    const Range = max - min;
    const Rand = Math.random();
    return (min + Math.round(Rand * Range));
  }

  constructor(public route: ActivatedRoute, private router: Router) {
    document.body.style.background = '#F4FFDC';
  }

  ngOnInit(): void {
    this.itemPic = 'assets/item/' + this.type + '/' + this.number + '.png';
    this.route.queryParams.subscribe( val => {
      this.User.username = val.name;
    });
  }

  doCheck(id: number){
    this.count++;
    if (this.count <= 10){
      if (this.type === id){
        this.itemPic = 'assets/img/get_point.png';
        this.User.points = this.User.points + 100;
      }
      else{
        this.itemPic = 'assets/img/lose_point.png';
        this.User.points = this.User.points - 100;
      }
    }
    else{
      this.router.navigate(['/result'], {queryParams: {username: this.User.username, point: this.User.points}});
    }
  }

  changeState(){
    if (this.itemPic === 'assets/img/get_point.png' || this.itemPic === 'assets/img/lose_point.png'){
      this.type = this.getRandomNumInt(1, 2);
      this.number = this.getRandomNumInt(1, 3);
      this.itemPic = 'assets/item/' + this.type + '/' + this.number + '.png';
    }
  }

  sleep(numberMillis: number) {
    let now = new Date();
    const exitTime = now.getTime() + numberMillis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime) {
        return;
      }
    }
  }
}
