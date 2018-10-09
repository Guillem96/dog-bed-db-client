import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

	private url = environment.API_URL + "/tasks";

	constructor(private http: HttpClient, private auth: AuthService) { }
	
	public addTask(task): Observable<User | {}> {
		const header = this.auth.getRequestHeaders();
		return this.http.post(this.url, task, header).pipe(
			map(res => {
        console.log(res);
				let user = new User(res);
				this.auth.updateUser(user);
				return user;
			})
		);
	}

	public deleteTask(taskIdx): Observable<User | {}> {
		const header = this.auth.getRequestHeaders();
		return this.http.delete(this.url + "/" + taskIdx, header).pipe(
			map(res => {
				let user = new User(res);
				this.auth.updateUser(user);
				return user;
			})
		);
  }
  
  public updateTask(task, taskIdx): Observable<User | {}> {
		const header = this.auth.getRequestHeaders();
		return this.http.put(this.url + "/" + taskIdx, task, header).pipe(
			map(res => {
        console.log(res);
				let user = new User(res);
				this.auth.updateUser(user);
				return user;
			})
		);
	}
}
