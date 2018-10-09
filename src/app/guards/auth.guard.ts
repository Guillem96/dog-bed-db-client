import { AuthService } from "../services/auth/auth.service";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService) {
  }

  canActivate() {
		if(this.authService.isAuthenticated()) 
			return true;
		return false;
	}
}