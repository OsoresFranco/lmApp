import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lm-input',
  templateUrl: './lm-input.component.html',
  styleUrls: ['./lm-input.component.scss'],
})
export class LmInputComponent implements OnInit {
  pipe = new DatePipe('en-US');

  myTask!: Task;

  dateHolder = new Date();

  changeHandler(event: any) {
    let now = Date.now();

    let task: Task = {
      id: now,
      toDo: event.target.value,
      isCompleted: false,
      date: String(this.pipe.transform(now, 'medium')),
    };
    this.myTask = task;
  }

  ngOnInit(): void {}
}
