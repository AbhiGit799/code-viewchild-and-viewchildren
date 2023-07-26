import { Component, QueryList, ViewChildren } from '@angular/core';
import { MultiChangebgcolorDirective } from '../multi-changebgcolor.directive';

@Component({
  selector: 'app-multi-parent-color',
  templateUrl: './multi-parent-color.component.html',
  styleUrls: ['./multi-parent-color.component.css']
})
export class MultiParentColorComponent {


  // here red color is coming from directive.

  @ViewChildren(MultiChangebgcolorDirective) changeMulticolordir : QueryList<MultiChangebgcolorDirective>;

  constructor()
  {

  }

  changeColor(cl:string)
  {
    // this.changeMulticolordir.first.changecolor(cl);

    // this.changeMulticolordir.last.changecolor(cl);

    this.changeMulticolordir.forEach(el=>el.changecolor(cl));

  }
 

}
