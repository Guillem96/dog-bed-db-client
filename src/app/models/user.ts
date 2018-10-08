import { Task } from "./task";

Task
export class User {
	username: string;
	password: string;
	email: string;
	tasks: Array<Task>;

	constructor(user) {
		this.username = user.username;
		this.password = user.password;
		this.email = user.email;
		this.tasks = user.tasks || [];
	}
}