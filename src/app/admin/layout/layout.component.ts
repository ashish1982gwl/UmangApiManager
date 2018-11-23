import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  linkClickAction(pageName) {
    this.linkCss = pageName;
  } 
   linkCss: string = 'Default';
}
