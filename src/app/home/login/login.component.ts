import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	
  constructor(fb: FormBuilder) {
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
			alert(username.value + " - " + password.value);
		}
	}
}
