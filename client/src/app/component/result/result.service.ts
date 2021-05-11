import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

	constructor(private http: HttpClient){

	}
	
	// validateLogin(user: User){
	// 	return this.http.post('/api/user/login',{
    //         username: user.username,
    //         points: user.points,
    //         rightNum: user.rightNum,
    //         wrongNum: user.wrongNum,
	// 	})
	// }

	create(user:User){
		return this.http.post('/api/user/create',{
            username: user.username,
            points: user.points,
            rightNum: user.rightNum,
            wrongNum: user.wrongNum,
		})
	}

}