import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrdFilterPipe } from './grd-filter.pipe';
import { DepartmentService } from './departmentService.pipe';
import { CustomApiManagerFormGroupFilter } from './formGroupFilter.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GrdFilterPipe, DepartmentService, CustomApiManagerFormGroupFilter],
  exports: [GrdFilterPipe, DepartmentService, CustomApiManagerFormGroupFilter]
})
export class FilterModule { }
