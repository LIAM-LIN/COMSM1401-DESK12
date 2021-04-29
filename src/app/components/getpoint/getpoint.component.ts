import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getpoint',
  templateUrl: './getpoint.component.html',
  styleUrls: ['./getpoint.component.css']
})
export class GetpointComponent implements OnInit {
  getPoint = 'assets/get_point.png';
  constructor() { }

  ngOnInit(): void {
  }

}
