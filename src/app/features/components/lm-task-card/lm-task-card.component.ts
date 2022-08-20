import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lm-task-card',
  templateUrl: './lm-task-card.component.html',
  styleUrls: ['./lm-task-card.component.scss'],
})
export class LmTaskCardComponent implements OnInit {
  @Output() deleteEmit = new EventEmitter();

  deleteTask(){
    this.deleteEmit.emit()
  }

  cardValue: boolean = false;

  isChecked() {
    this.cardValue = !this.cardValue;
  }

  constructor() {}

  ngOnInit(): void {}
}
