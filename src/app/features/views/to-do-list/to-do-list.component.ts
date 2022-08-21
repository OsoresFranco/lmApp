import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor() {}

  deleteTask(task: Task) {
    let auxArr: Task[] = [];
    this.tasks.filter((value) => {
      value.id != task.id ? auxArr.push(value) : null;
    });
    this.tasks = auxArr;
  }

  ngOnInit(): void {}
}
