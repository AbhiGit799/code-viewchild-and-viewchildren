import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MultiCounterComponent } from '../multi-counter/multi-counter.component';

@Component({
  selector: 'app-multi-counter-parent',
  templateUrl: './multi-counter-parent.component.html',
  styleUrls: ['./multi-counter-parent.component.css']
})
export class MultiCounterParentComponent {

  @ViewChildren(MultiCounterComponent) childMultiCounter: QueryList<MultiCounterComponent>;


  constructor()
  {
     
  }

  ngAfterViewInit()
  {
    //alert(this.childMultiCounter.length);
    console.log(`Number of Multi Counter Components ${this.childMultiCounter.length}`);
    
  }



  increment()
  {
    // this.childMultiCounter.first.incrementByOne();
    // this.childMultiCounter.last.incrementByOne();

    this.childMultiCounter.forEach(el=>el.incrementByOne());


  }

  decrement()
  {
    // this.childMultiCounter.first.decrementByOne();
    // this.childMultiCounter.last.decrementByOne();

    this.childMultiCounter.forEach(el=>el.decrementByOne());



  }

  
}