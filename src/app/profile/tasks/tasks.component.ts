import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

	@Input() user: User;

  constructor(private taskManager: TaskService) { }

  ngOnInit() {
	}

}
