import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable()
export class ResultService {

	constructor(private http: HttpClient){

	}
	
	public submit(user: User){
		return this.http.post('/api/user/submit',{
			username : user.username,
            points: user.points,
            rightNum: user.rightNum,
            wrongNum: user.wrongNum
		})
	}

}