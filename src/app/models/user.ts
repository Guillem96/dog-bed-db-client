import { Task } from "./task";

Task
export class User {
	firstName: string;
	lastName:string;
	username: string;
	password: string;
	email: string;
	tasks: Array<Task>;

	constructor(user) {
		this.username = user.username;
		this.password = user.password;
		this.email = user.email;
		this.tasks = user.tasks.map(t => new Task(t)) || [];
	}
}