import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Output() taskEmit = new EventEmitter();

  pipe = new DatePipe('en-US');
  inputValue: string = '';

  myTask: Task = {
    id: 0,
    toDo: '',
    isCompleted: false,
    date: '',
  };

  dateHolder = new Date();

  handleChange(event: any) {
    this.myTask = {
      ...this.myTask,
      toDo: event.target.value,
    };
  }

  addTask() {
    // This line gives this task an random number for its ID
    let now = Date.now();

    let task: Task = {
      ...this.myTask,
      id: now,
      isCompleted: false,
      date: String(this.pipe.transform(now, 'medium')),
    };
    this.myTask = task;
    this.taskEmit.emit(this.myTask);
  }

  constructor() {}

  ngOnInit(): void {}
}
