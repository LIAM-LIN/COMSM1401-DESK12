import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ UserService ]
})
export class ResultComponent implements OnInit {
  right = 'assets/img/true.png';
  wrong = 'assets/img/wrong.png';
  dog = 'assets/img/dog.png';
  public People: User;
  constructor(public route: ActivatedRoute, public router:Router, private userService:UserService) {
    this.People = new User();
  }

  ngOnInit(): void {
    document.body.style.background = 'skyblue';
    this.route.queryParams.subscribe( val => {
      this.People.username = val.username;
      this.People.points = val.point;
      this.People.rightNum = val.rightNum;
      this.People.wrongNum = val.wrongNum;
    });
  }

  create() {
  	if(this.People.username) {
  		this.userService.create(this.People).subscribe(result => {
        console.log('result is ', result);
        if(result === null) {
          this.router.navigate(['/home']);
        } else {
          alert('Error');
        }
        
      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }

}
