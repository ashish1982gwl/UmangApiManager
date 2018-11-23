import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { ServicelistService } from './servicelist/servicelist.service';
import { TreeviewModule } from 'ngx-treeview';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultDeshboardPageComponent } from './default-deshboard-page/default-deshboard-page.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          { path: 'default',component:DefaultDeshboardPageComponent },
          { path: 'inbox', loadChildren: './inbox/inbox.module#InboxModule', data: { title: "Manage API" } },
          { path: 'manageApi', loadChildren: './manage-api/manage-api.module#ManageApiModule', data: { title: "Manage API" } },
          { path: 'manageVendor', loadChildren: './manage-vendors/manage-vendors.module#ManageVendorsModule', data: { title: "Manage Vendors" } },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    TreeviewModule.forRoot(), NgbModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ],

  declarations: [
    ServicelistComponent, HeaderComponent,
    LayoutComponent, AdminDashboardComponent,
    FooterComponent, 
    DashboardComponent, DefaultDeshboardPageComponent
  ],
  exports: [],
  providers: [ServicelistService]
})
export class AdminModule { }