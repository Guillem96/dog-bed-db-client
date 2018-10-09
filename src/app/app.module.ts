import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';

import { MaterialModule } from './material.module';
import { AppRouting } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { TasksComponent } from './profile/tasks/tasks.component';
import { TaskComponent } from './profile/tasks/task/task.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		SignUpComponent,
		ProfileComponent,
		UserInfoComponent,
		TasksComponent,
		TaskComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRouting,
		MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
	],
	providers: [
		AuthGuard
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
