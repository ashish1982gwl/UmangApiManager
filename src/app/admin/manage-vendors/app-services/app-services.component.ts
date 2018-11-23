import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-app-services',
  templateUrl: './app-services.component.html',
  styleUrls: ['./app-services.component.css']
})
export class AppServicesComponent implements OnInit {
  displayPage: string;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  linkClickAction(pageName) {
    this.linkCss = pageName;
  } 
   linkCss: string = 'ServiceList';


}
