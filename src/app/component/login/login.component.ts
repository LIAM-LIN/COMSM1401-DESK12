import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*让username带着参数传到别得地方*/
  public username: string = '';

  constructor(public router: Router) { }

  ngOnInit(){
    document.body.style.background = '#93E192';
  }

  doLogin() {
    if (this.username !== ''){
      this.router.navigate(['/game'],
        {queryParams: {username: this.username}});
    }
    else{
      alert('you should enter a username');
    }

  }
}
