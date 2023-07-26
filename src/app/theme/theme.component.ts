import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit{

  @ViewChild('myname') elName : ElementRef;

  @ViewChild('myage') elAge : ElementRef;


  constructor()
  {  
  }

  ngOnInit(): void {
    
  }

  setTheme()
  {
    this.elName.nativeElement.style.backgroundColor="black";
    this.elName.nativeElement.style.color="white";

    this.elAge.nativeElement.style.backgroundColor="yellow";
    this.elAge.nativeElement.style.color="green";
  }

}
















