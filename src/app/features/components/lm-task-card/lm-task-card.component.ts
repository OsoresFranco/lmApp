import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-task-card',
  templateUrl: './lm-task-card.component.html',
  styleUrls: ['./lm-task-card.component.scss'],
})
export class LmTaskCardComponent implements OnInit {
  cardValue: boolean = false;

  isChecked() {
    this.cardValue = !this.cardValue;
  }

  constructor() {}

  ngOnInit(): void {}
}
