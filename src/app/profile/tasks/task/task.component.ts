import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskStatus : EventEmitter<Task> = new EventEmitter<Task>();

  colors: Array<string>;
  constructor() { }

  ngOnInit() {
    this.colors = this.task.tags.map(() => this.randomColor());
  }

  updateTask() {
    this.task.done = !this.task.done;
    this.taskStatus.emit(this.task);
  }

  randomColor() : string {
    return "#"+((1<<24)*Math.random()|0).toString(16);
  }  
}