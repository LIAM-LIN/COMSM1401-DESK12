import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  constructor() {
    document.body.style.background = '#F4FFDC';
  }

  ngOnInit(): void {
  }

}
