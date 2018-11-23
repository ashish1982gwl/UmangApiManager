import { Component, OnInit,ViewChild } from '@angular/core';
import { ApiListService } from './api-list.service';
import { DepartmentService } from '../../../GlobalServices/filter/departmentService.pipe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css'],
})
export class ApiListComponent implements OnInit {
  apiListForm:FormGroup;
  constructor(
    private apiListService: ApiListService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: Router) { }

createForm(){
  this.apiListForm=this.formBuilder.group({
    SearchText:[]
  });

}
  ngOnInit() {
    this.getDepartmentList();
    this.createForm();
  }

  

  

  data: any[];
  error: string;
  errorMessage: string;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
  }

  getDepartmentList() {
    this.apiListService.getAllDept()
      .subscribe(
        response => {
          this.data = this.parseJsonObj(response);
        },
        error => {
          this.error = error;
          this.errorMessage = "Some thins went wrong, please check";
        });
  }


  parseJsonObj(array) {
    let depJson = [];
    let index = -1;
    if (array.data.length > 0) {
      for (let service of array.data) {
        index = this.isKeyPresent("department", service.department, depJson);
        if (index == -1) {
          let serviceJson = [];
          serviceJson.push(
            {
              'id': service.id,
              'name': service.name,
              'version': service.version,
              'proAvilable': service.proAvilable,
              'stgAvilable': service.stgAvilable,
              'status': service.status,
            });
          depJson.push({
            'department': service.department,
            'services': serviceJson,
          })
        } else {
          depJson[index].services.push(
            {
              'id': service.id,
              'name': service.name,
              'version': service.version,
              'proAvilable': service.proAvilable,
              'stgAvilable': service.stgAvilable,
              'status': service.status,
            });
        }
      }
      console.log(depJson);
      return depJson;
    }
  }

  isKeyPresent(key, value, array) {
    let index = -1;
    let counter = -1;
    for (let item of array) {
      counter++;
      if (item[key] == value) {
        return counter;
      }
    }
    return index;
  }

  toggle(dept, e) {
    e.stopPropagation();
    // e.preventDefault();

    if (dept.isShow) {
      dept.isShow = false;
    }
    else {
      dept.isShow = true;
    }
  }
  goAppServicesPage(deptname) {
    localStorage.setItem('AdminVistedDept', deptname);
    this.router.navigate(['/admin/dashboard/manageApi/AppServices/ServiceList']);
  }
 
}
