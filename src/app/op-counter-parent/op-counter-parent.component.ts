import { Component, QueryList, ViewChildren } from '@angular/core';
import { OpCounterComponent } from '../op-counter/op-counter.component';

@Component({
  selector: 'app-op-counter-parent',
  templateUrl: './op-counter-parent.component.html',
  styleUrls: ['./op-counter-parent.component.css']
})
export class OpCounterParentComponent {


  @ViewChildren(OpCounterComponent) childMultiCounter: QueryList<OpCounterComponent>;


  constructor()
  {
     
  }

  ngOnInit()
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

   // this.childMultiCounter.forEach(el=>el.incrementByOne());

   this.childMultiCounter.find(el=>el.name==="Sohan").incrementByOne();

   this.childMultiCounter.filter(el=>el.name==="Arjun").forEach(e=>e.incrementByOne());

   console.log(`Map example = ${this.childMultiCounter.map(el=>el.name)}`);
   

  }



  decrement()
  {
    // this.childMultiCounter.first.decrementByOne();
    // this.childMultiCounter.last.decrementByOne();

    // this.childMultiCounter.forEach(el=>el.decrementByOne());

    this.childMultiCounter.find(el=>el.name==="Sohan").decrementByOne();

    this.childMultiCounter.filter(el=>el.name==="Arjun").forEach(e=>e.decrementByOne());

  }

  
}
