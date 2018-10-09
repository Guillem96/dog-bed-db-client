import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	signupForm: FormGroup;
	
	constructor(private fb: FormBuilder, 
								private auth: AuthService, 
								private router: Router,
								private snackBar: MatSnackBar) {
		this.signupForm = fb.group({
			'first_name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
			'last_name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
			'username': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
			'password': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
			'password1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
			'email': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.email])],
		});
	}

  ngOnInit() {
	}
	
	submitRegister() {
		let password = this.signupForm.controls["password"];
		let password1 = this.signupForm.controls["password1"];
		let email = this.signupForm.controls["email"];
		let username = this.signupForm.controls["username"];
		let firstName = this.signupForm.controls["first_name"];
		let lastName = this.signupForm.controls["last_name"];

		if (password.value !== password1.value) {
			this.snackBar.open("Passwords din't match", "Try again");
			return;
		}
		if (password.valid && 
				username.valid && 
				email.valid && 
				firstName.valid &&
				lastName.valid) {
			this.auth.signUp({ 
				first_name: firstName.value,
				last_name: lastName.value,
				username: username.value,
				password: password.value,
				email: email.value
			}).subscribe(() => {
				this.router.navigateByUrl("/profile");
			},
			error => {
				console.log(error);
				this.snackBar.open(error.error.examplemsg, "Try again");
			});
		}
	}
}
