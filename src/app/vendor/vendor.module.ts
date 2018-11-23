import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { ServicelistService } from './servicelist/servicelist.service';
import { TreeviewModule } from 'ngx-treeview';
import { FooterComponent } from './footer/footer.component';
import { VendorDashboardComponent } from './vendor-dashboard.component';
import { DepartmentListService } from './department-list/department-list.service';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ReportComponent } from './report/report.component';
import { AlertComponent } from './alert/alert.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RaiseApiIssueComponent } from './raise-api-issue/raise-api-issue.component';
import { RequestProductionApiComponent } from './request-production-api/request-production-api.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { StagingApiComponent } from './staging-api/staging-api.component';
import { ProductionApiComponent } from './production-api/production-api.component';


const routes: Routes = [
  {
    path: '', component: VendorDashboardComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          { path: 'myApp', component: DepartmentListComponent },
          { path: 'default', component: DefaultComponent },
          { path: 'serviceList', component: ServicelistComponent },
          { path: 'report', component: ReportComponent },
          { path: 'alert', component: AlertComponent },
          { path: 'profile', component: MyProfileComponent },
          { path: 'depatrtmentList', component: DepartmentListComponent },
          { path: 'raiseApi', component: RaiseApiIssueComponent },
          { path: 'productionApi', component: RequestProductionApiComponent }
        ]
      },

    ]

  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    TreeviewModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    ServicelistComponent, HeaderComponent,
    LayoutComponent, FooterComponent,
    VendorDashboardComponent, DepartmentListComponent,  ReportComponent, AlertComponent, MyProfileComponent, RaiseApiIssueComponent, RequestProductionApiComponent, DashboardComponent, DefaultComponent, StagingApiComponent, ProductionApiComponent
  ],
  exports: [],
  providers: [ServicelistService, DepartmentListService]
})
export class VendorModule { }