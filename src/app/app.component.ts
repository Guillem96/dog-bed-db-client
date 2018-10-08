import { Component } from '@angular/core';
import { AuthService } from './home/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'dog-bed-db-client';
	
	constructor(public auth: AuthService, private router: Router) {}

	public logout() {
		this.auth.logout();
		this.router.navigate([""]);
	}
}
