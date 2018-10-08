import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	signupForm: FormGroup;
	
  constructor(fb: FormBuilder) {
		this.signupForm = fb.group({
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
		if (password.valid && username.valid && email.valid && password.value == password1.value) {
			alert(username.value + " - " + password.value);
		}
	}
}
