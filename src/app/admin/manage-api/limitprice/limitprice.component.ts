import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiListService } from './../api-list/api-list.service';
import { GrdFilterPipe } from '../../../GlobalServices/filter/grd-filter.pipe';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { controlNameBinding } from './../../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-limitprice',
  templateUrl: './limitprice.component.html',
  styleUrls: ['./limitprice.component.css'],

})
export class LimitpriceComponent implements OnInit {

  deptName: string;
  data: any[];
  error: string;
  errorMessage: string;
  limitPriceForm: FormGroup;
  itemRows: FormArray;
  createForm() {
    this.limitPriceForm = this.formBuilder.group({
      'searchText': [''],
      itemRows: this.formBuilder.array([this.initItemRows()])
    })
  }
  initItemRows() {
    return this.formBuilder.group({
      'freeHits': [''],
      'freeHitsUnit_day_month': '',
      'freeHitsUnit_limit': '',
      'prices': ''
    });
 }
 
 addNewRow() {
     const control = <FormArray>this.limitPriceForm.controls['itemRows'];
     console.log('----------------------------------------')
     control.push(this.initItemRows());
 }
 
 deleteRow(index: number) {
     const control = <FormArray>this.limitPriceForm.controls['itemRows'];
     control.removeAt(index);
 }
  
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
         // this.data = this.parseJsonServiceAndVersionWise(response, this.deptName);
          this.data = [ { "department": "CBSE", "services": [ { "name": "10th_result", "ApiVersion": [ { "freeHits": 100, "freeHitsUnit_day_month": "month", "freeHitsUnit_limit": "10000", "id": "e51d21f5-877e-46c3-b9ce-49a30a050875", "prices": 0.01 } ] }, { "name": "12_result", "ApiVersion": [ { "freeHits": 100, "freeHitsUnit_day_month": "DaY", "freeHitsUnit_limit": "1000", "id": "31bb9ba7-6ec4-4041-8517-46a77c8d23d6", "prices": 0.01 } ] } ] } ];
        },
        error => {
          this.error = error;
          this.errorMessage = "Some thins went wrong, please check";
        });
  }

  ngOnInit() {
    this.deptName = localStorage.getItem('AdminVistedDept');
    this.getDepartmentList(this.deptName);
    this.createForm();
    console.log(this.data);
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


  
  parseJsonServiceAndVersionWise(array, deptName) {
    let finalJson = [];
    let serviceJson = [];
    let index = -1;
    array = this.parseJsonObjServicesAndDepartmentWise(array, deptName);
    for (let dept of array) {
      if (dept.department === deptName) {
        for (let service of dept.services) {
          index = this.isKeyPresent("services", service.name, serviceJson);
          if (index == -1) {
            let serviceVesrionJson = [];
            serviceVesrionJson.push({
              'freeHits': service.freeHits,
              'freeHitsUnit_day_month': this.getFreeHitUnitDayMonth(service.freeHitsUnit),
              'freeHitsUnit_limit': this.getFreeHitUnitValue(service.freeHitsUnit),
              'id': service.id,
              'prices': service.prices,
            });
            serviceJson.push({
              'name': service.name,
              'ApiVersion': serviceVesrionJson
            })
          } else {
            /*serviceJson[index].version.push({
              'freeHits': service.freeHits,
              'freeHitsUnit_day_month':this.getFreeHitUnitDayMonth( service.freeHitsUnit),
              'freeHitsUnit_limit': this.getFreeHitUnitValue(service.freeHitsUnit),
              'id': service.id,
              'prices': service.prices,
            });*/
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

  parseJsonObjServicesAndDepartmentWise(array, deptName) {
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
  getFreeHitUnitValue(value) {
    if (value != null && value != 'undefined' && value != "null") {
      value = value.substring(0, value.indexOf("/"));
    } else {
      value = "";
    }
    return value;
  }
  getFreeHitUnitDayMonth(value) {
    if (value != null && value != 'undefined' && value != "null") {
      value = value.substring(value.indexOf("/") + 1);
      value = value.toLowerCase();
    } else {
      value = "";
    }
    return value;
  }
  onSubmit() {
    let formValue = JSON.stringify(this.limitPriceForm.value);
    let arr = JSON.parse(formValue);
    console.log(arr);
    for (let key in arr) {
     // console.log('id: ' + key + '  value: ' + arr[key]);
    }
  }
}