import { Component, ViewChild } from '@angular/core';
import { ChangebgcolorDirective } from '../changebgcolor.directive';

@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.css']
})
export class ParentColorComponent {

  // here red color is coming from directive.

  @ViewChild(ChangebgcolorDirective) changecolordir : ChangebgcolorDirective;

  constructor()
  {

  }

  changeColor(cl:string)
  {
    this.changecolordir.changecolor(cl);

  }
 

}
