import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemPic = 'assets/item.png';
  constructor() { }

  ngOnInit(): void {
  }

}
