import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from '../../../lib'
import { ServicelistService } from './servicelist.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
      hasAllCheckBox: true,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
      maxHeight: 4000
  });



  constructor(
      private service: ServicelistService
  ) { }

  ngOnInit() {
      this.items = this.service.getBooks();
  }

  onFilterChange(value: string) {
      console.log('filter:', value);
  }
}