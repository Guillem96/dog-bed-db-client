export class Task {
	name: string;
	description: string;
	date_limit: Date;
  tags: Array<string>;
  done: boolean;

	constructor (task) {
		this.name = task.name;
		this.description = task.description;
    this.date_limit = new Date(task.date_limit);
    this.done = task.done;
    this.tags = task.tags || [];
	}
}