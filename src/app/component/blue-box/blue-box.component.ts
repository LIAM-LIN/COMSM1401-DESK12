import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-box',
  templateUrl: './blue-box.component.html',
  styleUrls: ['./blue-box.component.css']
})
export class BlueBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = '#D4D7DE';
  }

}
