import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent {

  @ViewChild(CounterComponent) counterComponent: CounterComponent;

  constructor()
  {

  }

 

  increment()
  {
    this.counterComponent.incrementByOne();
  }

  decrement()
  {
    this.counterComponent.decrementByOne();
  }

  
}



