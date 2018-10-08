import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
  exports: [
		RouterModule,
	],
})
export class AppRouting { }