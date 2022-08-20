import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  dateHolder = new Date();
  time = this.dateHolder.getTime();

  @Input() tasks: Task[] = [];

  test(task: Task) {
    let auxArr: Task[] = [];
    this.tasks.filter((value) => {
      value.id != task.id ? auxArr.push(value) : null;
    });
    this.tasks = auxArr;
  }

  constructor() {}

  ngOnInit(): void {}
}
