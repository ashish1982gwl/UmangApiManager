import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiListService } from './../api-list/api-list.service';
import { GrdFilterPipe } from '../../../GlobalServices/filter/grd-filter.pipe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { IMyDpOptions } from 'mydatepicker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  @ViewChild('addMountForm') addMountForm: NgForm;

  deptName: string;
  data: any[];
  error: string;
  errorMessage: string;


  constructor(
    private apiListService: ApiListService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: Router) { }




  getDepartmentList(deptName) {
    this.apiListService.getListByDepartment(deptName)
      .subscribe(
        response => {
          this.data = this.parseJsonDeptAndVesionWise(response, this.deptName);

        },
        error => {
          this.error = error;
          this.errorMessage = "Some thins went wrong, please check";
        });
  }
  ngOnInit() {

    this.deptName = localStorage.getItem('AdminVistedDept');
    this.getDepartmentList(this.deptName);



  }

  toggle(item, e) {
    e.stopPropagation();
    // e.preventDefault();

    if (item.isShow) {
      item.isShow = false;
    }
    else {
      item.isShow = true;
    }
  }
  parseJsonDeptAndVesionWise(array, deptName) {
    let finalJson = [];
    let serviceJson = [];
    let index = -1;
    array = this.getJsonDepartmentAndServiceWise(array, deptName);
    for (let item of array) {
      if (item.department === deptName) {
        for (let service of item.services) {
          index = this.isKeyPresent("services", service.name, serviceJson);
          if (index == -1) {
            let serviceVesrionJson = [];
            serviceVesrionJson.push({
              'defaultTiers': service.defaultTiers,
              'expDate': service.expDate,
              'freeHits': service.freeHits,
              'service.freeHitsUnit': service.freeHitsUnit,
              'id': service.id,
              'prices': service.prices,
              'proAvilable': service.proAvilable,
              'provider': service.provider,
              'status': service.status,
              'stgAvilable': service.stgAvilable,
              'version': service.version,
            });
            serviceJson.push({
              'name': service.name,
              'ApiVersion': serviceVesrionJson
            })
          } else {
            serviceJson[index].version.push({
              'defaultTiers': service.defaultTiers,
              'expDate': service.expDate,
              'freeHits': service.freeHits,
              'freeHitsUnit': service.freeHitsUnit,
              'id': service.id,
              'prices': service.prices,
              'proAvilable': service.proAvilable,
              'provider': service.provider,
              'status': service.status,
              'stgAvilable': service.stgAvilable,
              'version': service.version,
            });
          }
        }
      }
    }
    finalJson.push({
      'department': deptName,
      'services': serviceJson
    })
    console.log(finalJson);
    return finalJson;
  }

getJsonDepartmentAndServiceWise(array, deptName) {
    let depJson = [];
    let index = -1;
    if (array.data.length > 0) {
      for (let service of array.data) {
        console.log(service);
        index = this.isKeyPresent("department", service.department, depJson);
        if (index == -1) {
          let serviceJson = [];
          serviceJson.push(
            {
              'context': service.context,
              'defaultTiers': service.defaultTiers,
              'expDate': service.expDate,
              'freeHits': service.freeHits,
              'freeHitsUnit': service.freeHitsUnit,
              'id': service.id,
              'name': service.name,
              'prices': service.prices,
              'proAvilable': service.proAvilable,
              'provider': service.provider,
              'status': service.status,
              'stgAvilable': service.stgAvilable,
              'version': service.version,
            });
          depJson.push({
            'department': service.department,
            'services': serviceJson,
          })

        } else {
          depJson[index].services.push(
            {
              'context': service.context,
              'defaultTiers': service.defaultTiers,
              'expDate': service.expDate,
              'freeHits': service.freeHits,
              'freeHitsUnit': service.freeHitsUnit,
              'id': service.id,
              'name': service.name,
              'prices': service.prices,
              'proAvilable': service.proAvilable,
              'provider': service.provider,
              'status': service.status,
              'stgAvilable': service.stgAvilable,
              'version': service.version,
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
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  onSubmit() {

    let formValue = JSON.stringify(this.addMountForm.value);
    console.log(this.addMountForm.value);
    let arr = JSON.parse(formValue);
    for (let key in arr) {
      console.log('id: ' + key + '  value: ' + arr[key].formatted);
    }
  }
}