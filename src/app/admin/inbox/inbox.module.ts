import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AssignAppsComponent } from './assign-apps/assign-apps.component';
import { OnboardingRequestComponent } from './onboarding-request/onboarding-request.component';
import { InboxListComponent } from './inbox-list/inbox-list.component';
import { InboxComponent } from './inbox.component';

const routes: Routes = [
  {
    path: '', component: InboxComponent,
    children: [
      { path: 'InboxList', component: InboxListComponent },
      { path: 'OnboardingRequest', component: OnboardingRequestComponent },
      { path: 'AssignApps', component: AssignAppsComponent },
    ]
  },
  
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ],
  declarations: [InboxComponent, OnboardingRequestComponent,
    InboxListComponent, AssignAppsComponent]
})
export class InboxModule { }
