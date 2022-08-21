import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
 
  dateHolder = new Date();
  dateNow:number = 0;

  taskList: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dateNow = this.dateHolder.getDate();

    this.taskList = [
      {
        id: 1,
        toDo: 'Lavar la ropa',
        date: this.dateNow,
        isCompleted: false,
      },
      {
        id: 2,
        toDo: 'Lavar la ropa 1',
        date: this.dateNow,
        isCompleted: false,
      },
      {
        id: 3,
        toDo: 'Lavar la ropa 2',
        date: this.dateNow,
        isCompleted: false,
      },
      {
        id: 4,
        toDo: 'Lavar la ropa 3',
        date: this.dateNow,
        isCompleted: false,
      },
    ];
  }

}
