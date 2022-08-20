import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  d = new Date();
  time = this.d.getTime();

  tasks: Task[] = [];

  test(task: Task) {
    let auxArr: Task[] = [];
    this.tasks.filter((value) => {
      value.id != task.id ? auxArr.push(value) : null;
    });
    this.tasks = auxArr;
  }

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      {
        id: 1,
        date: this.time,
        toDo: 'Tarea 1',
        isCompleted: false,
      }
    ];
  }
}
