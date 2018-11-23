import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() getBreadCrum: String;
  constructor() { }

  ngOnInit() {
    console.log('getBreadCrum-----------'+this.getBreadCrum);
  }

}
