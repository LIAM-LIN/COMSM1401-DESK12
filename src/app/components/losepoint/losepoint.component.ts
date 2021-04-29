import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-losepoint',
  templateUrl: './losepoint.component.html',
  styleUrls: ['./losepoint.component.css']
})
export class LosepointComponent implements OnInit {
  losePoint = 'assets/lose_point.png';

  constructor() { }

  ngOnInit(): void {
  }

}
