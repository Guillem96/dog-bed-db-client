import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	
	constructor(public fb: FormBuilder, 
							private auth: AuthService,
							private router: Router,
							private snackBar: MatSnackBar) {
		this.loginForm = fb.group({
			'username': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
			'password': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
		});
	}

  ngOnInit() {
	}
	
	submitLogin() {
		let password = this.loginForm.controls["password"];
		let username = this.loginForm.controls["username"];
		if (password.valid && username.valid) {
			this.auth.login(username.value, password.value).subscribe(
				() => {
					this.router.navigateByUrl("/profile");
				},
				error => {
					console.log(error);
					this.snackBar.open(error.statusText, "Try again");
				});
		}
	}
}
