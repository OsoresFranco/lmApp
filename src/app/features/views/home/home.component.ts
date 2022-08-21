import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  taskList: Task[] = [];

  addTask(value: any) {
    this.taskList.push(value);
  }

  deleteTask(task: Task) {
    let auxArr: Task[] = [];
    this.taskList.filter((value) => {
      value.id != task.id ? auxArr.push(value) : null;
    });
    this.taskList = auxArr;
  }

  constructor() {}

  ngOnInit(): void {}
}
