import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrdFilterPipe} from './grd-filter.pipe';
import {DepartmentService} from './departmentService.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GrdFilterPipe,DepartmentService],
  exports :[GrdFilterPipe,DepartmentService]
})
export class FilterModule { }
