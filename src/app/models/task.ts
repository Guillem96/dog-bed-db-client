export class Task {
	name: string;
	description: string;
	date_limit: Date;

	constructor (task) {
		this.name = task.name;
		this.description = task.description;
		this.date_limit = new Date(task.date_limit);
	}
}