import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  test(value: any) {
    this.taskList.push(value);
  }

  taskList: Task[] = [];

  constructor() {}

  ngOnInit(): void {}
}
