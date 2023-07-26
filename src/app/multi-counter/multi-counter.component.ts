import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-counter',
  templateUrl: './multi-counter.component.html',
  styleUrls: ['./multi-counter.component.css']
})
export class MultiCounterComponent {

  counter:number=0;

  constructor()
  {

  }


   incrementByOne()
   {
    this.counter = this.counter+1;
   }

   decrementByOne()
   {
    this.counter=this.counter-1;
   }
  


}