import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManageVendorsComponent } from './manage-vendors.component';
import { AppServicesComponent } from './app-services/app-services.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { UsageReportComponent } from './usage-report/usage-report.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { VendorServiesService } from './vendor-servies.service';
const routes: Routes = [

  {
    path: '', component: ManageVendorsComponent,
    children: [
      { path: 'VendorList', component: VendorListComponent },
      {
        path: 'AppServices', component: AppServicesComponent,
        children: [
          { path: 'Invoice', component: InvoiceComponent },
          { path: 'Pricing', component: PricingComponent },
          { path: 'UsageReport', component: UsageReportComponent },
          { path: 'ServiceList', component: ServiceListComponent },
        ]
      },
    ]
  },
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  declarations: [ServiceListComponent,
    VendorListComponent, InvoiceComponent, ManageVendorsComponent,
    PricingComponent, AppServicesComponent, UsageReportComponent, ServiceListComponent
  ],
  providers:[VendorServiesService]
})
export class ManageVendorsModule { }
