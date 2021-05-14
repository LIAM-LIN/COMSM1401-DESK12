import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brown-box',
  templateUrl: './brown-box.component.html',
  styleUrls: ['./brown-box.component.css']
})
export class BrownBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = '#D4D7DE';
  }

}
