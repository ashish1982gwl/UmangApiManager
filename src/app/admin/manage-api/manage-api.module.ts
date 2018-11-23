import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApiListComponent } from './api-list/api-list.component';
import { AppServicesComponent } from './app-services/app-services.component';
import { LimitpriceComponent } from './limitprice/limitprice.component';
import { ManageAPIComponent } from './manage-api.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from './../../GlobalServices/filter/filter.module';
import { ApiListService } from './api-list/api-list.service';
import { MyDatePickerModule } from 'mydatepicker';

const routes: Routes = [
  {
    path: '', component: ManageAPIComponent, children: [
      { path: 'ApiList', component: ApiListComponent },
      {
        path: 'AppServices', component: AppServicesComponent,
        children: [
          { path: 'ServiceList', component: ServiceListComponent },
          { path: 'Limitprice', component: LimitpriceComponent }
        ]
      }
    ]
  },
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule,
    FilterModule,MyDatePickerModule
  ],
  declarations: [ManageAPIComponent, LimitpriceComponent,
    AppServicesComponent, ApiListComponent, ServiceListComponent],
  providers: [ApiListService]
})
export class ManageApiModule { }
