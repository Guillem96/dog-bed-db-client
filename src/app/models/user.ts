import { Task } from "./task";

Task
export class User {
	first_name: string;
	last_name:string ;
	username: string;
	password: string;
	email: string;
	tasks: Array<Task>;

	constructor(user) {
    this.first_name = user.first_name;
		this.last_name = user.last_name;
		this.username = user.username;
		this.password = user.password;
    this.email = user.email;
    if (user.tasks) {
      this.tasks = user.tasks.map(t => new Task(t));
    } else {
      this.tasks = [];
    }
	}
}