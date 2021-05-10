import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  img1 = 'assets/img/gameTopImg.png';
  img2 = 'assets/img/excl.png';
  img3 = 'assets/img/ranknew.png';
  img4 = 'assets/img/starnew.png';
  box1 = 'assets/img/black_.png';
  box2 = 'assets/img/blue_.png';
  box3 = 'assets/img/brown_.png';
  box4 = 'assets/img/green_.png';

  type = this.getRandomNumInt(1, 2);
  number = this.getRandomNumInt(1, 3);
  itemPic: string = '';
  count: number = 1;
  runtime = 0;
  rightNum = 0;
  wrongNum = 0;
  instruction = '';



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
    document.body.style.background = '#D4D7DE';
  }

  ngOnInit(): void {
    this.changePic();
    /*this.itemPic = 'assets/item/' + this.type + '/' + this.number + '.png';*/
    this.route.queryParams.subscribe( val => {
      this.User.username = val.username;
    });
  }

  doCheck(id: number){
    if (this.itemPic === 'assets/img/getpoint.png' || this.itemPic === 'assets/img/losepoint.png'){
      return;
    }
    if (this.count <= 10){
      if (this.type === id){
        this.itemPic = 'assets/img/getpoint.png';
        this.User.points = this.User.points + 100;
        this.instruction = 'you get 100 points';
        this.rightNum++;
      }
      else{
        this.itemPic = 'assets/img/losepoint.png';
        this.User.points = this.User.points - 100;
        this.instruction = 'you lose 100 points';
        this.wrongNum++;
      }
    }
    else{
      this.router.navigate(['/result'],
        {queryParams: {username: this.User.username, point: this.User.points, rightNum: this.rightNum, wrongNum: this.wrongNum}});
    }
  }

  changePic(){
    this.type = this.getRandomNumInt(1, 4);
    if (this.type === 1){
       this.number = this.getRandomNumInt(0, blackBin.length);
       this.itemPic = blackBin[this.number].path;
       this.instruction = blackBin[this.number].name;
    }
    else if (this.type === 2){
      this.number = this.getRandomNumInt(0, blueBin.length);
      this.itemPic = blueBin[this.number].path;
      this.instruction = blueBin[this.number].name;

    }
    else if (this.type === 3){
      this.number = this.getRandomNumInt(0, brownBin.length);
      this.itemPic = brownBin[this.number].path;
      this.instruction = brownBin[this.number].name;

    }
    else{
      this.number = this.getRandomNumInt(0, greenBin.length);
      this.itemPic = greenBin[this.number].path;
      this.instruction = greenBin[this.number].name;
    }
  }

  changeState(){
    if (this.count >= 10){
      this.router.navigate(['/result'],
        {queryParams: {username: this.User.username, point: this.User.points, rightNum: this.rightNum, wrongNum: this.wrongNum}});
    }
    if (this.itemPic === 'assets/img/getpoint.png' || this.itemPic === 'assets/img/losepoint.png'){
      this.changePic();
      this.count++;
    }
  }



}

const blackBin: any[] = [
  { path: 'assets/item/1/battery.png', name: 'battery' },
  { path: 'assets/item/1/book.png', name: 'book' },
  { path: 'assets/item/1/documents.png', name: 'documents' },
  { path: 'assets/item/1/engine oil.png', name: 'engine oil' },
  { path: 'assets/item/1/envelopes.png', name: 'envelopes' },
  { path: 'assets/item/1/glass cup.png', name: 'glass cup' },
  { path: 'assets/item/1/glass mirror.png', name: 'glass mirror' },
  { path: 'assets/item/1/glasses.png', name: 'glasses' },
  { path: 'assets/item/1/headset.png', name: 'headset' },
  { path: 'assets/item/1/laptop.png', name: 'laptop' },
  { path: 'assets/item/1/mouse.png', name: 'mouse' },
  { path: 'assets/item/1/newspaper.png', name: 'newspaper' },
  { path: 'assets/item/1/pad.png', name: 'pad' },
  { path: 'assets/item/1/spectacle.png', name: 'spectacle' },
  { path: 'assets/item/1/watch.png', name: 'watch' },
  { path: 'assets/item/1/wearable bra.png', name: 'wearable bra' },
  { path: 'assets/item/1/wearable shoes.png', name: 'wearable shoes' },
  { path: 'assets/item/1/wearable sock.png', name: 'wearable sock' },
  { path: 'assets/item/1/wearable t-shirt.png', name: 'wearable t-shirt' }
];

const blueBin: any[] = [
  { path: 'assets/item/2/box.png', name: 'box' },
  { path: 'assets/item/2/boxes.png', name: 'boxes' },
  { path: 'assets/item/2/brown boxes.png', name: 'brown boxes' },
  { path: 'assets/item/2/brown paper.png', name: 'brown paper' },
  { path: 'assets/item/2/brown paper and cardboard tube.png', name: 'brown paper and cardboard tube' },
  { path: 'assets/item/2/brown paper bag.png', name: 'brown paper bag' },
  { path: 'assets/item/2/brown papers.png', name: 'brown papers' },
  { path: 'assets/item/2/cardboard cup.png', name: 'cardboard cup' },
  { path: 'assets/item/2/empty drink carton.png', name: 'empty drink carton' },
  { path: 'assets/item/2/empty milk carton.png', name: 'empty milk carton' },
  { path: 'assets/item/2/greetings card.png', name: 'greetings card' },
];

const brownBin: any[] = [
  { path: 'assets/item/3/apple.png', name: 'apple' },
  { path: 'assets/item/3/banana.png', name: 'banana' },
  { path: 'assets/item/3/bone.png', name: 'bone' },
  { path: 'assets/item/3/bread.png', name: 'bread' },
  { path: 'assets/item/3/candy.png', name: 'candy' },
  { path: 'assets/item/3/Chinese rice pudding.png', name: 'Chinese rice pudding' },
  { path: 'assets/item/3/cookie.png', name: 'cookie' },
  { path: 'assets/item/3/corn.png', name: 'corn' },
  { path: 'assets/item/3/dumpling.png', name: 'dumpling' },
  { path: 'assets/item/3/egg shell.png', name: 'egg shell' },
  { path: 'assets/item/3/fish.png', name: 'fish' },
  { path: 'assets/item/3/fish bone.png', name: 'fish bone' },
  { path: 'assets/item/3/fruit leftover.png', name: 'fruit leftover' },
  { path: 'assets/item/3/fruit peelings.png', name: 'fruit peelings' },
  { path: 'assets/item/3/meat.png', name: 'meat' },
  { path: 'assets/item/3/pizza.png', name: 'pizza' },
  { path: 'assets/item/3/rice.png', name: 'rice' },
  { path: 'assets/item/3/sausage.png', name: 'sausage' },
  { path: 'assets/item/3/shrimp.png', name: 'shrimp' },
  { path: 'assets/item/3/vegetable.png', name: 'vegetable' }
];

const greenBin: any[] = [
  { path: 'assets/item/4/can.png', name: 'can' },
  { path: 'assets/item/4/can with lid.png', name: 'can with lid' },
  { path: 'assets/item/4/clean aerosol.png', name: 'clean aerosol' },
  { path: 'assets/item/4/drink can.png', name: 'drink can' },
  { path: 'assets/item/4/empty aerosol.png', name: 'empty aerosol' },
  { path: 'assets/item/4/foil.png', name: 'foil' },
  { path: 'assets/item/4/foil package(empty it first).png', name: 'foil package(empty it first)' },
  { path: 'assets/item/4/plastic bottle(empty it first).png', name: 'plastic bottle(empty it first)' },
  { path: 'assets/item/4/plastic cola bottle(empty it first).png', name: 'plastic cola bottle(empty it first)' },
  { path: 'assets/item/4/plastic food package.png', name: 'plastic food package' },
  { path: 'assets/item/4/plastic kecth up bottle(empty it first).png', name: 'plastic kecth up bottle(empty it first)' },
  { path: 'assets/item/4/plastic water bottle.png', name: 'plastic water bottle' },
];

