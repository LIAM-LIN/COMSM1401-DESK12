import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  s1 = 'assets/s1.png';
  s2 = 'assets/s2.png';
  pointPic = 'assets/point_pic.png';
  constructor() { }

  ngOnInit(): void {
  }

}
