import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  { path: '', component: RegisterComponent },
  { path: 'forget', component: ForgetPasswordComponent },

];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),FormsModule, ReactiveFormsModule
  ],
  declarations: [ForgetPasswordComponent,RegisterComponent],
  providers:[]
})
export class RegisterModule { }
