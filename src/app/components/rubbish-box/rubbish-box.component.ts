import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rubbish-box',
  templateUrl: './rubbish-box.component.html',
  styleUrls: ['./rubbish-box.component.css']
})
export class RubbishBoxComponent implements OnInit {
  img1 = 'assets/2.png';
  img2 = 'assets/3.png';
  img3 = 'assets/4.png';
  img4 = 'assets/5.png';

  constructor() { }

  ngOnInit(): void {
  }

}
