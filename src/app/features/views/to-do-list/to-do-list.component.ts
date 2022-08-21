import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  pipe = new DatePipe('en-US');
  now = Date.now();
  myFormattedDate = String(this.pipe.transform(this.now, 'medium'));

  constructor() {}

  @Input() tasks: Task[] = [];

  deleteTask(task: Task) {
    let auxArr: Task[] = [];
    this.tasks.filter((value) => {
      value.id != task.id ? auxArr.push(value) : null;
    });
    this.tasks = auxArr;
  }

  ngOnInit(): void {}
}
