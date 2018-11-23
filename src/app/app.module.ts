import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'vendor', loadChildren: './vendor/vendor.module#VendorModule', data: { title: "Login" } },
  { path: 'register', loadChildren: './register/register.module#RegisterModule', data: { title: "Register" } },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
  ],

  imports: [
    BrowserModule, RouterModule.forRoot(routes), NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,
    MyDatePickerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
