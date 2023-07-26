import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-op-counter',
  templateUrl: './op-counter.component.html',
  styleUrls: ['./op-counter.component.css']
})
export class OpCounterComponent {

  @Input() name:string;

  @Input() operation:string;

  counter: number = 0;

  constructor() {}

  incrementByOne() {
    this.counter = this.counter + 1;
  }

  decrementByOne() {
    this.counter = this.counter - 1;
  }
}

