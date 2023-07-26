import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-multi-theme',
  templateUrl: './multi-theme.component.html',
  styleUrls: ['./multi-theme.component.css']
})
export class MultiThemeComponent {
  
  // @ViewChild('myname') elName : ElementRef;

  // @ViewChild('myage') elAge : ElementRef;

  @ViewChildren('myname') elName : QueryList<ElementRef>;

  @ViewChildren('myage') elAge : QueryList<ElementRef>;


  constructor()
  {  
  }


  setTheme()
  {
    // this.elName.nativeElement.style.backgroundColor="black";
    // this.elName.nativeElement.style.color="white";

    // this.elAge.nativeElement.style.backgroundColor="yellow";
    // this.elAge.nativeElement.style.color="green";

  //  this.elName.first.nativeElement.style.backgroundColor="black";
    // this.elName.first.nativeElement.style.color="white";

    // this.elName.last.nativeElement.style.backgroundColor="black";
    // this.elName.last.nativeElement.style.color="white";

    // this.elAge.first.nativeElement.style.backgroundColor="yellow";
    // this.elAge.first.nativeElement.style.color="green";

    // this.elAge.last.nativeElement.style.backgroundColor="yellow";
    // this.elAge.last.nativeElement.style.color="green";


    this.elName.forEach(el=>el.nativeElement.style.backgroundColor="black");
    this.elName.forEach(el=>el.nativeElement.style.color="white");

    this.elAge.forEach(el=>el.nativeElement.style.backgroundColor="yellow");
    this.elAge.forEach(el=>el.nativeElement.style.color="green");


  }

}

