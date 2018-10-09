import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	public user: User;

	constructor(private http: HttpClient) { }
	
	public signUp(user) : Observable<boolean> {
		return this.http.post(environment.API_URL + "/sign-up", user).pipe(
			map(res => {
        this.user = new User(user);
        this.updateUser(user);
				return res != null;
			})
		);
	}

	public login(username, password) : Observable<User | {}> {
		const header = this.getRequestHeaders(username, password);
		return this.http.get(environment.API_URL + "/identity", header ).pipe(
			map(res => {
				this.updateUser(new User(res));
				return this.user;
			})
		);
	}

	public generateAuthorization(username: string, password: string): string {
    return `Basic ${btoa(`${username}:${password}`)}`;
	}	 

	public getRequestHeaders(username?, password?) {
		let authUsername = username ? username : this.user.username;
		let authPassword = password ? password : this.user.password;
	
    return { 
			headers : new HttpHeaders({
				'Authorization': this.generateAuthorization(authUsername, authPassword),
				'Content-Type': 'application/json'
			})
		};
	}

	public isAuthenticated(): boolean {
		if (this.user != null)
			return true;
		
		let userData = localStorage.getItem("user");
		if (userData) {
			this.user = new User(JSON.parse(userData));
			return true;
		}
		return false;
	}


	public logout() {
		localStorage.clear();
		this.user = null;
	}

	public updateUser(user: User) {
		this.user = user;
		localStorage.setItem("user", JSON.stringify(this.user));
	}
}
