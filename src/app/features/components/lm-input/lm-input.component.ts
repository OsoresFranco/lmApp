import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-input',
  templateUrl: './lm-input.component.html',
  styleUrls: ['./lm-input.component.scss'],
})
export class LmInputComponent implements OnInit {
  myTask: string = '';

  changeHandler(event: any) {
    let task = event.target.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
