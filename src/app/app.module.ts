import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRouting } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { TasksComponent } from './profile/tasks/tasks.component';
import { TaskComponent } from './profile/tasks/task/task.component';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';

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
    AuthGuard,
    HomeGuard
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
