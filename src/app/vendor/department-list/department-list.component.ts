import { Component, OnInit } from '@angular/core';
import { DepartmentListService } from './department-list.service';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {

  constructor(private departmentListService: DepartmentListService) { }

  data: any[];
  error: string;
  errorMessage: string;

  ngOnInit() {
    this.getDepartmentList();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }
  getDepartmentList() {
    this.departmentListService.getDepartmentsList()
      .subscribe(
        response => {
          this.data = response;
          /*this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;*/
        },
        error => {
          this.error = error;
          this.errorMessage = "Some thins went wrong, please check";
        });
  }
}