import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  @Output() deleteEmit = new EventEmitter();
  @Input() tasks: Task[] = [];

  deleteSignal(value: Task) {
    this.deleteEmit.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
