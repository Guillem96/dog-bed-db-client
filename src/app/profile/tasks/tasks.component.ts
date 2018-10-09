import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { TaskService } from '../../services/task/task.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

	@Input() user: User;
  today: number = Date.now();
  
  addTaskForm: FormGroup;
  date: string = "";

  constructor(private taskManager: TaskService,
              fb: FormBuilder,
              private snackBar: MatSnackBar) { 

    this.addTaskForm = fb.group({
			'name': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
      'description': ['', Validators.compose([Validators.required, Validators.minLength(2), , Validators.maxLength(100)])],
      'date': ['', Validators.required],
      'tags': ['', Validators.compose([Validators.minLength(2), Validators.required])]
		});
  }

  ngOnInit() {
  }
  
  submitTask() {
    let name = this.addTaskForm.controls.name;
    let description = this.addTaskForm.controls.description;
    let tags = this.addTaskForm.controls.tags;
    let date = this.addTaskForm.controls.date;

    if (name.valid && description.valid && date.valid && tags.valid) {
      let tagsTokens = tags.value.split(",");
      let task = {
        name : name.value,
        description: description.value,
        date_limit: new Date(date.value),
        tags: tagsTokens
      };

      this.taskManager.addTask(task).subscribe(
        (res : User) => this.user = res,
        err => this.snackBar.open(err.error, "Ok")
      );
    }
  }

  udateTask(task, idx) {
    this.taskManager.updateTask(task, idx).subscribe(
      res => this.snackBar.open("Task updated", "OK")),
      err => this.snackBar.open("Error updating task", "Try again")
  }
}
