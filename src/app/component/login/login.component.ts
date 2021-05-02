import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*让username带着参数传到别得地方*/
  public username: string = '';

  constructor() { }

  ngOnInit(){
    document.body.style.background = '#93E192';
  }

  doLogin() {

  }
}
