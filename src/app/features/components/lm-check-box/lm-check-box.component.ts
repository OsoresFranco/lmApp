import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lm-check-box',
  templateUrl: './lm-check-box.component.html',
  styleUrls: ['./lm-check-box.component.scss'],
})
export class LmCheckBoxComponent implements OnInit {
  valor: boolean = false;

  onClick(): void {
    this.valor = !this.valor;
  }

  @Output() checked = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  emitEvent(valor: any) {
    this.checked.emit(valor);
  }
}
