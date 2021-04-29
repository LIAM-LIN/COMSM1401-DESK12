import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gametopbar',
  templateUrl: './gametopbar.component.html',
  styleUrls: ['./gametopbar.component.css']
})
export class GametopbarComponent implements OnInit {
  img1 = 'assets/1.png';
  constructor() {
    document.body.style.background = '#F4FFDC';
  }

  ngOnInit(): void {
  }

}
