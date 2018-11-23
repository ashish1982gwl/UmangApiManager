import { Component, OnInit } from '@angular/core';
import { VendorServiesService } from './../vendor-servies.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  constructor(private VendorServies: VendorServiesService) {

  }


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
    this.VendorServies.getVendorList()
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

  toggle(dept) {
    if (dept.isShow) {
      dept.isShow = false;
    }
    else {
      dept.isShow = true;
    }
  }
  deleteVendor(id){
    alert(id);
  }
}


