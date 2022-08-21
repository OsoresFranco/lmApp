import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-button',
  templateUrl: './lm-button.component.html',
  styleUrls: ['./lm-button.component.scss']
})
export class LmButtonComponent implements OnInit {
  @Input()isDisabled:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
