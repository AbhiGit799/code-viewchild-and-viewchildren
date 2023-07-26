import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMultiChangebgcolor]'
})
export class MultiChangebgcolorDirective {

  constructor(private elRef:ElementRef) { }

  ngOnInit()
  {
    this.elRef.nativeElement.style.color="red";
    this.elRef.nativeElement.style.fontSize="40px";
    
  }

  changecolor(colo:string)
  {
    this.elRef.nativeElement.style.color=colo;
  }


}