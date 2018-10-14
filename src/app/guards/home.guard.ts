import { AuthService } from "../services/auth/auth.service";
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeGuard implements CanActivate {

  constructor(private authService : AuthService,
              private router: Router) {
  }

  canActivate() {
		if(this.authService.isAuthenticated()) 
      this.router.navigate(["profile"]);
    return true;
	}
}